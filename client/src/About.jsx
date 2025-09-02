// src/About.jsx
import "./App.css";

const AboutComponent = () => {
  return (
    <div className="form-container">
      <div className="form-box">
        <h1 className="form-title">About This Project</h1>

        <div style={{ color: "white", lineHeight: "1.6" }}>
          <div>
            <h2 style={{ color: "#6a11cb", marginBottom: "10px" }}>Project Info</h2>
            <p>
              This is a URL shortening application built with React (frontend) and Node.js + Express (backend). 
              It connects to MongoDB Atlas to store and retrieve URLs. Users can shorten any valid link 
              and share the shortened version.
            </p>
          </div>

          <div style={{ marginTop: "20px" }}>
            <h2 style={{ color: "#6a11cb", marginBottom: "10px" }}>About Me</h2>
            <p>
              I enjoy building practical web tools. This project demonstrates skills in frontend design, 
              backend APIs, and database integration — wrapped with a modern gradient UI theme.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AboutComponent;
