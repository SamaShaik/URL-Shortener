const express = require("express");
const router = express.Router();
const { shortenUrl } = require("../controllers/shortenController");
const { redirectUrl } = require("../controllers/retrieveController");

// POST /shorten -> create short URL
router.post("/shorten", shortenUrl);

// GET /:shortId -> redirect
router.get("/:shortId", redirectUrl);

module.exports = router;
