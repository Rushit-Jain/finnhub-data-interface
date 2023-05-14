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
