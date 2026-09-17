import { useState } from 'react';
import { formatYear, formatRating, FALLBACK_POSTER } from '../utils/helpers';

const MovieCard = ({ show, onSelectMovie }) => {
  const [imgSrc, setImgSrc] = useState(
    show.image?.medium || show.image?.original || FALLBACK_POSTER
  );

  const title = show.name || 'Untitled Show';
  const year = formatYear(show.premiered);
  const rating = formatRating(show.rating);

  const handleImageError = () => {
    setImgSrc(FALLBACK_POSTER);
  };

  return (
    <article className="movie-card" aria-label={title}>
      <div className="movie-poster-container">
        <img
          src={imgSrc}
          alt={`${title} poster`}
          loading="lazy"
          className="movie-poster"
          onError={handleImageError}
        />
        <div className="card-rating-badge" title={`Rating: ${rating}`}>
          <span>⭐</span>
          <span>{rating}</span>
        </div>
      </div>

      <div className="movie-card-content">
        <h3 className="movie-card-title" title={title}>
          {title}
        </h3>

        <div className="movie-card-meta">
          <div className="meta-item">
            <span role="img" aria-label="Release year">📅</span>
            <span>{year}</span>
          </div>
          {show.genres && show.genres.length > 0 && (
            <>
              <span className="meta-divider">•</span>
              <span className="meta-item" title={show.genres.join(', ')}>
                {show.genres[0]}
              </span>
            </>
          )}
        </div>

        <button
          type="button"
          className="btn-see-details"
          onClick={() => onSelectMovie(show)}
          aria-label={`See details for ${title}`}
        >
          <span>See Details</span>
          <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
            <circle cx="12" cy="12" r="10"></circle>
            <line x1="12" y1="16" x2="12" y2="12"></line>
            <line x1="12" y1="8" x2="12.01" y2="8"></line>
          </svg>
        </button>
      </div>
    </article>
  );
};

export default MovieCard;
