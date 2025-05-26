const express = require("express");
const router = express.Router();
const { createMetalRate, getLatestMetalRate, getMetalRates,getRateHistory } = require("../controller/metalrate");

router.post('/metalrates', createMetalRate);
router.get('/rates/latest', getLatestMetalRate);
router.get('/getpurities', getMetalRates);
router.get('/getratehistory',getRateHistory)

module.exports = router;
