const express = require("express");

const controller = require("./controller");

const router = express.Router();

router.get("/company-info", controller.getCompanyInformation);
// router.get("/events", controller.getEvents);
// router.get("/event", controller.getEvent);
// router.get("/venue", controller.getVenue);

module.exports = router;
