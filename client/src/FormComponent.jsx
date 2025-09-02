// src/FormComponent.jsx
import { useState } from "react";
import { shortenURL } from "./api";
import "./FormComponent.css";

const FormComponent = () => {
  const [longUrl, setLongUrl] = useState("");
  const [shortenedUrl, setShortenedUrl] = useState(null);
  const [error, setError] = useState(null);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError(null);
    setShortenedUrl(null);

    try {
      const data = await shortenURL(longUrl);
      if (!data.shortUrl) {
        throw new Error("No shortUrl in response");
      }
      setShortenedUrl(data.shortUrl);
    } catch (err) {
      setError(err.message);
    }
  };

  const handleCopy = () => {
    if (shortenedUrl) {
      navigator.clipboard
        .writeText(shortenedUrl)
        .then(() => {
          alert("Shortened URL copied to clipboard!");
        })
        .catch((err) => {
          console.error("Failed to copy:", err);
          alert("Failed to copy URL");
        });
    }
  };

  return (
    <div className="form-container">
      <div className="form-box">
        <h2 className="form-title">URL Shortener</h2>

        <form onSubmit={handleSubmit} className="form">
          <input
            type="url"
            value={longUrl}
            onChange={(e) => setLongUrl(e.target.value)}
            placeholder="Enter URL to shorten (e.g., https://example.com)"
            required
            className="input-field"
          />

          <button type="submit" className="submit-btn">
            Shorten URL
          </button>
        </form>

        {(shortenedUrl || error) && (
          <div className="result-box">
            {error ? (
              <p className="error-text">{error}</p>
            ) : (
              <div className="result">
                <a
                  href={shortenedUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="short-url"
                >
                  {shortenedUrl}
                </a>
                <button onClick={handleCopy} className="copy-btn">
                  Copy
                </button>
              </div>
            )}
          </div>
        )}
      </div>
    </div>
  );
};

export default FormComponent;
