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
  fetchStockData(formData);
  fetchCompanyNews(formData);
  console.log(dataStore.data);
}

function onFormReset(event) {
  event.preventDefault();
  get("form").reset();
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
}

function renderCompanyInfo() {
  let companyInfo = dataStore.get("companyInfo");
  let html = `
    <div class="row align-items-center justify-content-center">
      <img src="${companyInfo.logo}" height="200px" width="200px" alt="company-logo" />
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
