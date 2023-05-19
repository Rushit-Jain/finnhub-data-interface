const express = require("express");

const controller = require("./controller");

const router = express.Router();

router.get("/company-info", controller.getCompanyInformation);
router.get("/stock-summary", controller.getStockSummary);
router.get("/company-news", controller.getCompanyNews);
router.get("/chart-data", controller.getChartData);
router.get("/", controller.getIndexPage);

module.exports = router;
