const express = require("express");

const controller = require("./controller");

const router = express.Router();

router.get("/company-info", controller.getCompanyInformation);
router.get("/stock-summary", controller.getStockSummary);
router.get("/company-news", controller.getCompanyNews);
// router.get("/venue", controller.getVenue);

module.exports = router;
