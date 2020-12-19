const express = require("express");
const router = express.Router();
const homeController = require("../controller/index");

router.get('/', (req, res, next) => {
    homeController.getHomePage(req, res);
})

module.exports = router;