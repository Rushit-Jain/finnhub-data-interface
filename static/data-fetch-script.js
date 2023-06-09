function fetchCompanyData(params) {
  axios
    .get(baseURL + "/company-info", { params })
    .then((response) => {
      dataStore.set("companyInfo", response.data);
      fetchStockData(params);
      renderCompanyInfo();
    })
    .catch((error) => console.log(error));
}

function fetchStockData(params) {
  axios
    .get(baseURL + "/stock-summary", { params })
    .then((response) => {
      dataStore.set("stockSummary", response.data);
      fetchChartData(params);
      renderStockSummary();
    })
    .catch((error) => console.log(error));
}

function fetchCompanyNews(params) {
  axios
    .get(baseURL + "/company-news", { params })
    .then((response) => {
      dataStore.set("companyNews", response.data);
      renderCompanyNews();
    })
    .catch((error) => console.log(error));
}

function fetchChartData(params) {
  axios
    .get(baseURL + "/chart-data", { params })
    .then((response) => {
      dataStore.set("chartData", response.data);
      let dataSets = processData();
      fetchCompanyNews(params);
      renderChart(dataSets);
    })
    .catch((error) => console.log(error));
}
