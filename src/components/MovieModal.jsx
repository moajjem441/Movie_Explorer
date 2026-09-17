import { useEffect, useRef } from 'react';
import { formatYear, formatRating, stripHtml, FALLBACK_POSTER } from '../utils/helpers';

const MovieModal = ({ movie, onClose }) => {
  const modalRef = useRef(null);

  useEffect(() => {
    if (!movie) return;

    // Prevent body scrolling when modal is open
    const originalStyle = window.getComputedStyle(document.body).overflow;
    document.body.style.overflow = 'hidden';

    // Handle Escape key press
    const handleKeyDown = (event) => {
      if (event.key === 'Escape') {
        onClose();
      }
    };

    window.addEventListener('keydown', handleKeyDown);

    return () => {
      document.body.style.overflow = originalStyle;
      window.removeEventListener('keydown', handleKeyDown);
    };
  }, [movie, onClose]);

  if (!movie) return null;

  const title = movie.name || 'Untitled Show';
  const year = formatYear(movie.premiered);
  const rating = formatRating(movie.rating);
  const poster = movie.image?.original || movie.image?.medium || FALLBACK_POSTER;
  const overview = stripHtml(movie.summary);
  const genres = movie.genres && movie.genres.length > 0 ? movie.genres.join(', ') : 'Not specified';
  const language = movie.language || 'N/A';
  const status = movie.status || 'N/A';
  const runtime = movie.runtime ? `${movie.runtime} mins` : (movie.averageRuntime ? `${movie.averageRuntime} mins` : 'N/A');

  const handleBackdropClick = (e) => {
    if (e.target === e.currentTarget) {
      onClose();
    }
  };

  return (
    <div
      className="modal-overlay"
      onClick={handleBackdropClick}
      role="dialog"
      aria-modal="true"
      aria-labelledby="modal-movie-title"
    >
      <div className="modal-container" ref={modalRef}>
        {/* Top X Close Button */}
        <button
          type="button"
          className="modal-close-top"
          onClick={onClose}
          aria-label="Close details modal"
        >
          &times;
        </button>

        {/* Large Poster / Banner Header */}
        <div className="modal-header-banner">
          <img
            src={poster}
            alt={`${title} banner`}
            className="modal-banner-img"
            onError={(e) => {
              e.currentTarget.src = FALLBACK_POSTER;
            }}
          />
          <div className="modal-banner-gradient" />
        </div>

        {/* Modal Body */}
        <div className="modal-body">
          <h2 id="modal-movie-title" className="modal-title">
            {title}
          </h2>

          <div className="modal-meta-row">
            <span className="modal-badge rating">
              <span>⭐</span> Rating: {rating}
            </span>
            <span className="modal-badge year">
              <span>📅</span> Release: {year}
            </span>
          </div>

          {movie.genres && movie.genres.length > 0 && (
            <div className="modal-genres">
              {movie.genres.map((genre) => (
                <span key={genre} className="genre-tag">
                  {genre}
                </span>
              ))}
            </div>
          )}

          <div className="modal-section-title">Overview</div>
          <p className="modal-overview">{overview}</p>

          <div className="modal-info-grid">
            <div className="modal-info-item">
              <span className="modal-info-label">Genres</span>
              <span className="modal-info-val">{genres}</span>
            </div>
            <div className="modal-info-item">
              <span className="modal-info-label">Language</span>
              <span className="modal-info-val">{language}</span>
            </div>
            <div className="modal-info-item">
              <span className="modal-info-label">Status</span>
              <span className="modal-info-val">{status}</span>
            </div>
            <div className="modal-info-item">
              <span className="modal-info-label">Runtime</span>
              <span className="modal-info-val">{runtime}</span>
            </div>
          </div>

          {/* Bottom Close Button */}
          <div className="modal-actions-bottom">
            <button
              type="button"
              className="btn-modal-close"
              onClick={onClose}
              aria-label="Close modal dialog"
            >
              Close
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MovieModal;
