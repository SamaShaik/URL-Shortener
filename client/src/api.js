// client/src/api.js
import axios from "axios";

// Use environment variable if defined, otherwise fallback to localhost
const API_URL = import.meta.env.VITE_API_URL || "http://localhost:5000";

// Function to shorten URL
export const shortenURL = async (longUrl) => {
  try {
    const response = await axios.post(`${API_URL}/shorten`, { longUrl });
    return response.data;
  } catch (error) {
    console.error("Error shortening URL:", error.response?.data || error.message);
    throw error;
  }
};
