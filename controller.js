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
      let recommendationURL = "https://finnhub.io/api/v1/stock/recommendation";
      axios
        .get(recommendationURL, { params })
        .then((recommendationResponse) => {
          let sortedRecommendationResponse =
            utilities.sortRecommendationResponse(recommendationResponse.data);
          let cleanedRecommendationResponse =
            utilities.cleanRecommendationResponse(sortedRecommendationResponse);
          let cleanedResponse = utilities.cleanStockSummary(response.data);
          cleanedResponse.recommendation = cleanedRecommendationResponse;
          cleanedResponse.ticker = req.query.symbol;
          res.json(cleanedResponse);
        })
        .catch((error) => console.log(error));
    })
    .catch((error) => console.log(error));
};

exports.getCompanyNews = (req, res, next) => {
  let URL = "https://finnhub.io/api/v1/company-news";
  ("?symbol=TSLA&from=BEFORE_30&to=TODAY");
  let params = {
    symbol: req.query.symbol,
    from: utilities.getNewsDate("from"),
    to: utilities.getNewsDate("to"),
    token: constants.API_KEY,
  };
  axios
    .get(URL, { params })
    .then((response) => {
      let cleanedResponse = utilities.cleanCompanyNews(response.data);
      res.json(cleanedResponse);
    })
    .catch((error) => console.log(error));
};
