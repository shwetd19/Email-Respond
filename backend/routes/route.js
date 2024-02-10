const router = require("express").Router();

const { sendEmail } = require("../controller/appController.js");

/** HTTP Reqeust */
router.post("/email", sendEmail);

module.exports = router;
