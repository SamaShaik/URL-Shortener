// src/App.jsx
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import FormComponent from './FormComponent.jsx';
import AboutComponent from './About.jsx';
import './App.css';

function App() {
  return (
    <Router>
      <div className="app">
        {/* Navigation */}
        <nav className="navbar">
          <ul className="nav-list">
            <li>
              <Link to="/" className="nav-link">Home</Link>
            </li>
            <li>
              <Link to="/about" className="nav-link">About</Link>
            </li>
          </ul>
        </nav>

        {/* Routes */}
        <Routes>
          <Route path="/" element={<FormComponent />} />
          <Route path="/about" element={<AboutComponent />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
