function get(id) {
  return document.getElementById(id);
}

function readFormData() {
  let formData = {};
  formData["symbol"] = get("input-text").value.toUpperCase();
  return formData;
}

function onFormSubmit(event) {
  event.preventDefault();
  let formData = readFormData();
  fetchCompanyData(formData);
  console.log(dataStore.data);
}

function onFormReset(event) {
  event.preventDefault();
  showContentDiv(false);
  showNoDataDiv(false);
  get("form").reset();
}

function showNoDataDiv(isDisplayed) {
  if (isDisplayed) get("div-nodata").style.display = "block";
  else get("div-nodata").style.display = "none";
}

function showContentDiv(isDisplayed) {
  if (isDisplayed) {
    get("div-tabs").style.display = "block";
  } else {
    get("div-tabs").style.display = "none";
  }
}

function renderCompanyNews() {
  let companyNews = dataStore.get("companyNews");
  let html = "";
  companyNews.forEach((news) => {
    html += `
      <div class="news-item row">
        <div class="news-image col-12 col-md-2 align-items-center justify-content-center">
          <img src="${news.image}" height="100px" width="100px" alt="news-image" />
        </div>
        <div class="news-content col-12 col-md">
          <h5>${news.headline}</h5>
          <p>${news.datetime}</p>
          <a href="${news.url}" target="_blank">See Original Post</a>
        </div>
      </div>
    `;
  });
  get("tab4").innerHTML = html;
  showNoDataDiv(false);
  showContentDiv(true);
}

function renderCompanyInfo() {
  let companyInfo = dataStore.get("companyInfo");
  if (companyInfo.name.length === 0) {
    showNoDataDiv(true);
    showContentDiv(false);
    return;
  }
  let html = `
    <div class="row align-items-center justify-content-center">
      <img src="${companyInfo.logo}" height="200px" width="200px" style="margin-bottom: 10px;" alt="company-logo" />
    </div>
    <div class="row align-items-center justify-content-center">
      <div class="col-12 col-md-6">
        <table class="table company-info-table">
          <tbody>
            <tr>
              <th scope="row">Company Name</th>
              <td>${companyInfo.name}</td>
            </tr>
            <tr>
              <th scope="row">Stock Ticker Symbol</th>
              <td>${companyInfo.ticker}</td>
            </tr>
            <tr>
              <th scope="row">Stock Exchange Code</th>
              <td>${companyInfo.exchange}</td>
            </tr>
            <tr>
              <th scope="row">Company IPO Date</th>
              <td>${companyInfo.ipo}</td>
            </tr>
            <tr>
              <th scope="row">Category</th>
              <td>${companyInfo.category}</td>
            </tr>
        </table>
      </div>
    </div>
  `;
  get("tab1").innerHTML = html;
}

function renderChart(dataSets) {
  let chartData = dataStore.get("chartData");
  var categories = chartData.date.map((item) =>
    item.substring(5, item.length - 13)
  );
  console.log(categories);
  const chart = Highcharts.stockChart("div-chart", {
    rangeSelector: {
      enabled: false,
    },
    chart: {
      type: "column",
    },

    tooltip: {
      shared: true,
    },

    title: {
      text: dataStore.get("companyInfo").ticker + " Stock Price",
    },

    subtitle: {
      text: '<a href="https://finnhub.io/" target="_blank">Source: Finnhub</a>',
      useHTML: true,
    },

    navigator: {
      xAxis: {
        categories: categories,
        labels: {
          formatter: function () {
            return categories[this.value];
          },
        },
      },
    },
    xAxis: {
      categories: categories,
      labels: {
        formatter: function () {
          return categories[this.value];
        },
      },
    },

    yAxis: [
      {
        title: { text: "Volume" },
        labels: { align: "left" },
        min: 0,
        offset: 1,
      },
      {
        title: { text: "Stock Price" },
        opposite: false,
        min: 0,
      },
    ],

    plotOptions: {
      column: {
        pointWidth: 2,
        color: "#404040",
      },
    },

    series: [
      {
        name: "Stock Price",
        type: "area",
        data: dataSets[0],
        tooltip: {
          valueDecimals: 2,
        },
        yAxis: 1,
        showInNavigator: true,
        fillColor: {
          linearGradient: {
            x1: 0,
            y1: 0,
            x2: 0,
            y2: 1,
          },
          stops: [
            [0, Highcharts.getOptions().colors[0]],
            [
              1,
              Highcharts.color(Highcharts.getOptions().colors[0])
                .setOpacity(0)
                .get("rgba"),
            ],
          ],
        },
      },
      {
        name: "Volume",
        type: "column",
        showInNavigator: false,
        data: dataSets[1],
        tooltip: {
          valueDecimals: 2,
        },
        yAxis: 0,
      },
    ],
  });
}

function renderStockSummary() {
  let stockInfo = dataStore.get("stockSummary");
  let dText =
    stockInfo.d > 0
      ? "<span class='green-up-arrow'>&#x25B2;</span>"
      : "<span class='red-down-arrow'>&#x25BC;</span>";
  let html = `
    <div class="row align-items-center justify-content-center">
      <div class="col-12 col-md-6">
        <table class="table stock-info-table">
          <tbody>
            <tr>
              <th scope="row">Stock Ticker Symbol</th>
              <td>${stockInfo.ticker}</td>
            </tr>
            <tr>
              <th scope="row">Trading Day</th>
              <td>${stockInfo.t}</td>
            </tr>
            <tr>
              <th scope="row">Previous Closing Price</th>
              <td>${stockInfo.pc}</td>
            </tr>
            <tr>
              <th scope="row">Opening Price</th>
              <td>${stockInfo.o}</td>
            </tr>
            <tr>
              <th scope="row">High Price</th>
              <td>${stockInfo.h}</td>
            </tr>
            <tr>
              <th scope="row">Low Price</th>
              <td>${stockInfo.l}</td>
            </tr>
            <tr>
              <th scope="row">Change</th>
              <td>${stockInfo.d + " " + dText}</td>
            </tr>
            <tr>
              <th scope="row">Change Percent</th>
              <td>${stockInfo.dp + " " + dText}</td>
            </tr>
        </table>
        <div class="div-recommendation">
          <span class="span-recommendation red-cube">${
            stockInfo.recommendation.strongSell
          }</span>
          <span class="span-recommendation brown-cube">${
            stockInfo.recommendation.sell
          }</span>
          <span class="span-recommendation olive-cube">${
            stockInfo.recommendation.hold
          }</span>
          <span class="span-recommendation dark-green-cube">${
            stockInfo.recommendation.buy
          }</span>
          <span class="span-recommendation light-green-cube">${
            stockInfo.recommendation.strongBuy
          }</span>
        </div>
        <div class="div-recommendation-heading">
          <h5>Recommendation Trends</h5>
        </div>
      </div>
    </div>
  `;
  get("tab2").innerHTML = html;
}
