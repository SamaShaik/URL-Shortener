const pool = require("../models/Url");
const { customAlphabet } = require("nanoid");

const nanoid = customAlphabet("0123456789abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ", 8);

exports.shortenUrl = async (req, res) => {
  try {
    const { longUrl } = req.body;
    if (!longUrl) {
      return res.status(400).json({ error: "longUrl is required" });
    }

    // Check if URL already exists
    const [rows] = await pool.query("SELECT * FROM urls WHERE longUrl = ?", [longUrl]);
    let shortId;

    if (rows.length > 0) {
      shortId = rows[0].shortId;
    } else {
      shortId = nanoid();
      await pool.query("INSERT INTO urls (longUrl, shortId) VALUES (?, ?)", [longUrl, shortId]);
    }

    res.json({ shortUrl: `${req.protocol}://${req.get("host")}/${shortId}` });
  } catch (err) {
    console.error(err);
    res.status(500).json({ error: "Server error", details: err.message });
  }
};
