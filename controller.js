const axios = require("axios");

const constants = require("./constants");
const utilities = require("./utilities");

exports.getCompanyInformation = (req, res, next) => {
  let URL = "https://finnhub.io/api/v1/stock/profile2";
  let params = {
    symbol: req.query.symbol,
    token: constants.API_KEY,
  };
  axios
    .get(URL, { params })
    .then((response) => {
      let cleanedResponse = utilities.cleanCompanyInfo(response.data);
      res.json(cleanedResponse);
    })
    .catch((error) => console.log(error));
};

exports.getStockSummary = (req, res, next) => {
  let URL = "https://finnhub.io/api/v1/quote";
  let params = {
    symbol: req.query.symbol,
    token: constants.API_KEY,
  };
  axios
    .get(URL, { params })
    .then((response) => {
      let cleanedResponse = utilities.cleanStockSummary(response.data);
      res.json(cleanedResponse);
    })
    .catch((error) => console.log(error));
};
