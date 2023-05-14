function fetchCompanyData(params) {
  axios
    .get(baseURL + "/company-info", { params })
    .then((response) => dataStore.set("companyInfo", response.data))
    .catch((error) => console.log(error));
}

function fetchStockData(params) {
  axios
    .get(baseURL + "/stock-summary", { params })
    .then((response) => dataStore.set("stockSummary", response.data))
    .catch((error) => console.log(error));
}

function fetchCompanyNews(params) {
  axios
    .get(baseURL + "/company-news", { params })
    .then((response) => dataStore.set("companyNews", response.data))
    .catch((error) => console.log(error));
}
