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
