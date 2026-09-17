import MovieCard from './MovieCard';

const MovieGrid = ({ movies, onSelectMovie, onClearSearch }) => {
  if (!movies || movies.length === 0) {
    return (
      <div className="empty-state-container" role="status" aria-live="polite">
        <div className="empty-state-icon" role="img" aria-label="Magnifying glass searching">🔍</div>
        <h3 className="empty-state-title">No movies found</h3>
        <p className="empty-state-desc">Try searching with a different title.</p>
        {onClearSearch && (
          <button
            type="button"
            className="btn-clear-search"
            onClick={onClearSearch}
            aria-label="Clear search input and reset"
          >
            Clear Search
          </button>
        )}
      </div>
    );
  }

  return (
    <div className="movie-grid" role="region" aria-label="Movie list">
      {movies.map((movie) => (
        <MovieCard
          key={movie.id}
          show={movie}
          onSelectMovie={onSelectMovie}
        />
      ))}
    </div>
  );
};

export default MovieGrid;
