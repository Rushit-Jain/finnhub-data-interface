function fetchCompanyData(params) {
  axios
    .get(baseURL + "/company-info", { params })
    .then((response) => console.log(response))
    .catch((error) => console.log(error));
  axios
    .get(baseURL + "/stock-summary", { params })
    .then((response) => {
      console.log(response);
    })
    .catch((error) => console.log(error));
}
