const express = require("express");
const router = express.Router();

const ClickController = require("../controllers/clicks.controller");

router.get("/v1/progress", ClickController.getClicksCount);
router.patch("/v1/progress", ClickController.patch);

module.exports = router;
