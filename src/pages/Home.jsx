import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import Hero from '../components/Hero';
import MovieCard from '../components/MovieCard';
import MovieModal from '../components/MovieModal';
import Loading from '../components/Loading';
import ErrorMessage from '../components/ErrorMessage';
import { normalizeShow } from '../utils/helpers';

const Home = () => {
  const [featuredMovies, setFeaturedMovies] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [selectedMovie, setSelectedMovie] = useState(null);

  const fetchFeatured = async () => {
    try {
      setLoading(true);
      setError(null);
      const res = await fetch('https://api.tvmaze.com/shows');
      if (!res.ok) {
        throw new Error(`Failed to load shows (${res.status})`);
      }
      const data = await res.json();
      // Select top rated / prominent shows for landing page showcase
      const normalized = data.map(normalizeShow);
      const sortedByRating = [...normalized]
        .filter((show) => show && show.rating?.average)
        .sort((a, b) => (b.rating?.average || 0) - (a.rating?.average || 0))
        .slice(0, 8);

      setFeaturedMovies(sortedByRating.length > 0 ? sortedByRating : normalized.slice(0, 8));
    } catch (err) {
      setError(err.message || 'Unable to load movies. Please try again.');
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchFeatured();
  }, []);

  return (
    <div className="home-page">
      {/* Cinematic Hero */}
      <Hero />

      {/* Featured / Trending Preview Section */}
      <section className="home-featured-section container">
        <div className="section-header">
          <div className="section-title-wrap">
            <h2>Trending & Top Rated</h2>
            <p>Critically acclaimed shows you should not miss tonight.</p>
          </div>
          <Link to="/movies" className="see-all-link">
            <span>Explore All Shows</span>
            <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
              <polyline points="9 18 15 12 9 6"></polyline>
            </svg>
          </Link>
        </div>

        {loading && <Loading message="Loading featured shows..." skeletonCount={4} />}

        {error && <ErrorMessage message={error} onRetry={fetchFeatured} />}

        {!loading && !error && featuredMovies.length > 0 && (
          <div className="movie-grid">
            {featuredMovies.map((movie) => (
              <MovieCard
                key={movie.id}
                show={movie}
                onSelectMovie={setSelectedMovie}
              />
            ))}
          </div>
        )}
      </section>

      {/* Movie Details Modal */}
      {selectedMovie && (
        <MovieModal
          movie={selectedMovie}
          onClose={() => setSelectedMovie(null)}
        />
      )}
    </div>
  );
};

export default Home;
