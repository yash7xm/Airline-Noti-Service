const express = require("express");

const { InfoController } = require("../../controllers");
const { EmailController } = require("../../controllers");

const router = express.Router();

router.get("/info", InfoController.info);

router.get("/tickets", EmailController.create);

module.exports = router;
