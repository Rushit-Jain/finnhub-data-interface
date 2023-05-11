function get(id) {
  return document.getElementById(id);
}

function readFormData() {
  let formData = {};
  formData["name"] = get("input-text").value.toUpperCase();
  return formData;
}

function onFormSubmit(event) {
  event.preventDefault();
  let formData = readFormData();
}

function onFormReset(event) {
  event.preventDefault();
  get("form").reset();
}
