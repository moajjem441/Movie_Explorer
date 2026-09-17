const SearchBar = ({ query, onQueryChange, onClear }) => {
  return (
    <div className="search-bar-wrapper">
      <div className="search-input-container">
        <span className="search-icon" aria-hidden="true">
          <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round">
            <circle cx="11" cy="11" r="8"></circle>
            <line x1="21" y1="21" x2="16.65" y2="16.65"></line>
          </svg>
        </span>
        <input
          type="search"
          className="search-input"
          placeholder="Search for a movie..."
          value={query}
          onChange={(e) => onQueryChange(e.target.value)}
          aria-label="Search movies and shows"
          id="movie-search-input"
          autoComplete="off"
        />
        {query && (
          <button
            type="button"
            className="search-clear-btn"
            onClick={onClear}
            aria-label="Clear search input"
            title="Clear search"
          >
            &times;
          </button>
        )}
      </div>
    </div>
  );
};

export default SearchBar;
