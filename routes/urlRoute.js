const express = require("express");
const {
  shortenURL,
  useShortUrl,
  getUrls,
} = require("../controllers/urlController");

const router = express.Router();

router.post("/shorten", shortenURL);
router.get("/geturls", getUrls);
router.get("/useshortner/:shortURL", useShortUrl);

module.exports = router;
