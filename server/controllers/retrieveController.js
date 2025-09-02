const pool = require("../models/Url");

exports.redirectUrl = async (req, res) => {
  try {
    const { shortId } = req.params;

    const [rows] = await pool.query("SELECT * FROM urls WHERE shortId = ?", [shortId]);

    if (rows.length === 0) {
      return res.status(404).json({ error: "URL not found" });
    }

    // Increment clicks
    await pool.query("UPDATE urls SET clicks = clicks + 1 WHERE shortId = ?", [shortId]);

    res.redirect(rows[0].longUrl);
  } catch (error) {
    res.status(500).json({ error: "Server error", details: error.message });
  }
};
