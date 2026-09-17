import { Link } from 'react-router-dom';

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-container">
        <div className="footer-brand">
          <span role="img" aria-label="Movie Clapper">🎬</span>
          <span>Movie<span className="brand-gradient">Explorer</span></span>
        </div>

        <div className="footer-links">
          <Link to="/" className="footer-link">Home</Link>
          <Link to="/movies" className="footer-link">Explore Movies</Link>
          <a
            href="https://www.tvmaze.com/api"
            target="_blank"
            rel="noopener noreferrer"
            className="footer-link"
          >
            TVMaze API
          </a>
          <a
            href="https://github.com"
            target="_blank"
            rel="noopener noreferrer"
            className="footer-link"
          >
            GitHub
          </a>
        </div>

        <p className="footer-copy">
          © 2026 MovieExplorer. All rights reserved. Powered by TVMaze.
        </p>
      </div>
    </footer>
  );
};

export default Footer;
