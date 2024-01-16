const URL = require("../models/urlSchema");
const uniqid = require("uniqid");
const shortenURL = async (req, res) => {
  const { originalURL } = req.body;
  const existingURL = await URL.findOne({ originalURL });

  if (existingURL) {
    res.json({ shortURL: existingURL.shortURL });
  } else {
    const shortURL = uniqid();
    const newUrl = new URL({ originalURL, shortURL });
    await newUrl.save();

    res.json({ shortURL });
  }
};

const getUrls = async (req, res) => {
  const urls = await URL.find({});
  res.json({ urls });
};

const useShortUrl = async (req, res) => {
  const { shortURL } = req.params;
  const url = await URL.findOne({ shortURL });
  if (url) {
    // res.json(url);
    res.redirect(url.originalURL);
  } else {
    res.status(404).json({ error: "URL not found" });
  }
};

module.exports = { shortenURL, useShortUrl, getUrls };
