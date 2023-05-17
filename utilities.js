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

exports.getNewsDate = (dateType) => {
  let today = new Date();
  if (dateType === "from") today.setDate(today.getDate() - 30);
  let newsDate = today.toISOString().split("T")[0];
  return newsDate;
};

exports.epochToDateTime = (epoch) => {
  let date = new Date(epoch * 1000);
  let year = date.getFullYear();
  let month = date.getMonth();
  let months = [
    "January",
    "February",
    "March",
    "April",
    "May",
    "June",
    "July",
    "August",
    "September",
    "October",
    "November",
    "December",
  ];
  let day = date.getDate();
  return `${day} ${months[month]}, ${year}`;
};

exports.cleanCompanyNews = (companyNews) => {
  let cleanedCompanyNews = [];
  for (let i = 0; i < companyNews.length; i++) {
    if (cleanedCompanyNews.length >= 5) break;
    let currentNewsItem = companyNews[i];
    if (currentNewsItem.image == null || currentNewsItem.image.length === 0)
      continue;
    if (currentNewsItem.url == null || currentNewsItem.url.length === 0)
      continue;
    if (
      currentNewsItem.headline == null ||
      currentNewsItem.headline.length === 0
    )
      continue;
    if (
      currentNewsItem.datetime == null ||
      currentNewsItem.datetime.length === 0
    )
      continue;
    cleanedCompanyNews.push(currentNewsItem);
  }
  for (let i = 0; i < cleanedCompanyNews.length; i++) {
    cleanedCompanyNews[i].datetime = this.epochToDateTime(
      cleanedCompanyNews[i].datetime
    );
  }
  return cleanedCompanyNews;
};

exports.getSixMonthsOneDayAgo = (today) => {
  let sixMonthsAgo = new Date();
  sixMonthsAgo.setMonth(today.getMonth() - 6);
  let sixMonthsOneDayAgo = new Date(sixMonthsAgo);
  sixMonthsOneDayAgo.setDate(sixMonthsOneDayAgo.getDate() - 1);
  return sixMonthsOneDayAgo.getTime();
};

exports.cleanChartData = (chartData) => {
  let cleanedChartData = chartData;
  return cleanedChartData;
};
