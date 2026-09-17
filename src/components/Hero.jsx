import { Link } from 'react-router-dom';

const Hero = () => {
  return (
    <section className="hero-section" aria-label="Hero Spotlight">
      <div className="hero-backdrop-glow" aria-hidden="true" />
      
      <div className="hero-content">
        <div className="hero-badge">
          <span role="img" aria-label="Sparkles">✨</span>
          <span>Unlimited Movies & TV Series</span>
        </div>

        <h1 className="hero-title">
          Discover Your Next <span>Favorite Movie</span>
        </h1>

        <p className="hero-description">
          Explore popular shows, discover new favorites, and find detailed information about movies and TV shows from around the world.
        </p>

        <div className="hero-actions">
          <Link to="/movies" className="btn-cta-hero" id="hero-explore-cta">
            <span>Explore Movies</span>
            <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
              <polygon points="5 3 19 12 5 21 5 3"></polygon>
            </svg>
          </Link>
        </div>

        <div className="hero-stats">
          <div className="stat-item">
            <span className="stat-value">50,000+</span>
            <span className="stat-label">Shows Available</span>
          </div>
          <div className="stat-item">
            <span className="stat-value">Live API</span>
            <span className="stat-label">Real-time TVMaze Data</span>
          </div>
          <div className="stat-item">
            <span className="stat-value">HD Details</span>
            <span className="stat-label">Ratings & Synopsis</span>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
