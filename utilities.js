exports.cleanCompanyInfo = (companyInfo) => {
  if (companyInfo == null) return null;
  let cleanedCompanyInfo = {};
  if (companyInfo.name != null) cleanedCompanyInfo.name = companyInfo.name;
  else cleanedCompanyInfo.name = "";
  if (companyInfo.ticker != null)
    cleanedCompanyInfo.ticker = companyInfo.ticker;
  else cleanedCompanyInfo.ticker = "";
  if (companyInfo.logo != null) cleanedCompanyInfo.logo = companyInfo.logo;
  else cleanedCompanyInfo.logo = "";
  if (companyInfo.exchange != null)
    cleanedCompanyInfo.exchange = companyInfo.exchange;
  else cleanedCompanyInfo.exchange = "";
  if (companyInfo.ipo != null) cleanedCompanyInfo.ipo = companyInfo.ipo;
  else cleanedCompanyInfo.ipo = "";
  if (companyInfo.finnhubIndustry != null)
    cleanedCompanyInfo.category = companyInfo.finnhubIndustry;
  else cleanedCompanyInfo.category = "";
  return cleanedCompanyInfo;
};

exports.cleanStockSummary = (stockSummary) => {
  if (stockSummary == null) return null;
  let cleanedStockSummary = {};
  if (stockSummary.d != null) cleanedStockSummary.d = stockSummary.d;
  else cleanedStockSummary.d = "";
  if (stockSummary.dp != null) cleanedStockSummary.dp = stockSummary.dp;
  else cleanedStockSummary.dp = "";
  if (stockSummary.h != null) cleanedStockSummary.h = stockSummary.h;
  else cleanedStockSummary.h = "";
  if (stockSummary.l != null) cleanedStockSummary.l = stockSummary.l;
  else cleanedStockSummary.l = "";
  if (stockSummary.o != null) cleanedStockSummary.o = stockSummary.o;
  else cleanedStockSummary.o = "";
  if (stockSummary.pc != null) cleanedStockSummary.pc = stockSummary.pc;
  else cleanedStockSummary.pc = "";
  if (stockSummary.t != null) cleanedStockSummary.t = stockSummary.t;
  else cleanedStockSummary.t = "";
  return cleanedStockSummary;
};

exports.sortRecommendationResponse = (recommendationResponse) => {
  recommendationResponse.sort((a, b) => {
    return a.period - b.period;
  });
  return recommendationResponse;
};

exports.cleanRecommendationResponse = (recommendationResponse) => {
  let recommendationConsideration =
    recommendationResponse[recommendationResponse.length - 1];
  let cleanedRecommendationResponse = {};
  if (recommendationConsideration.buy != null)
    cleanedRecommendationResponse.buy = recommendationConsideration.buy;
  else cleanedRecommendationResponse.buy = "";
  if (recommendationConsideration.hold != null)
    cleanedRecommendationResponse.hold = recommendationConsideration.hold;
  else cleanedRecommendationResponse.hold = "";
  if (recommendationConsideration.sell != null)
    cleanedRecommendationResponse.sell = recommendationConsideration.sell;
  else cleanedRecommendationResponse.sell = "";
  if (recommendationConsideration.strongBuy != null)
    cleanedRecommendationResponse.strongBuy =
      recommendationConsideration.strongBuy;
  else cleanedRecommendationResponse.strongBuy = "";
  if (recommendationConsideration.strongSell != null)
    cleanedRecommendationResponse.strongSell =
      recommendationConsideration.strongSell;
  else cleanedRecommendationResponse.strongSell = "";
  return cleanedRecommendationResponse;
};
