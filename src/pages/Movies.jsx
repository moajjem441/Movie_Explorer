import { useState, useEffect, useRef, useCallback } from 'react';
import SearchBar from '../components/SearchBar';
import MovieGrid from '../components/MovieGrid';
import MovieModal from '../components/MovieModal';
import Loading from '../components/Loading';
import ErrorMessage from '../components/ErrorMessage';
import { normalizeShow } from '../utils/helpers';

const Movies = () => {
  const [movies, setMovies] = useState([]);
  const [searchQuery, setSearchQuery] = useState('');
  const [debouncedQuery, setDebouncedQuery] = useState('');
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [selectedMovie, setSelectedMovie] = useState(null);

  // Keep track of active AbortController to cancel stale requests
  const abortControllerRef = useRef(null);

  // Debounce search input by 400ms
  useEffect(() => {
    const timer = setTimeout(() => {
      setDebouncedQuery(searchQuery.trim());
    }, 400);

    return () => clearTimeout(timer);
  }, [searchQuery]);

  // Fetch shows function
  const fetchShows = useCallback(async (query) => {
    // Cancel any ongoing fetch
    if (abortControllerRef.current) {
      abortControllerRef.current.abort();
    }

    const controller = new AbortController();
    abortControllerRef.current = controller;

    try {
      setLoading(true);
      setError(null);

      const endpoint = query
        ? `https://api.tvmaze.com/search/shows?q=${encodeURIComponent(query)}`
        : 'https://api.tvmaze.com/shows';

      const res = await fetch(endpoint, { signal: controller.signal });

      if (!res.ok) {
        throw new Error(`API error: received status ${res.status}`);
      }

      const data = await res.json();

      // Normalize results (search results contain { score, show }, direct /shows contains show)
      const formatted = Array.isArray(data)
        ? data.map(normalizeShow).filter(Boolean)
        : [];

      setMovies(formatted);
    } catch (err) {
      if (err.name === 'AbortError') {
        // Ignored aborted request
        return;
      }
      setError('Unable to load movies. Please try again.');
    } finally {
      setLoading(false);
    }
  }, []);

  // Trigger fetch when debouncedQuery changes
  useEffect(() => {
    fetchShows(debouncedQuery);

    return () => {
      if (abortControllerRef.current) {
        abortControllerRef.current.abort();
      }
    };
  }, [debouncedQuery, fetchShows]);

  const handleClearSearch = () => {
    setSearchQuery('');
  };

  const handleRetry = () => {
    fetchShows(debouncedQuery);
  };

  return (
    <div className="movies-page container">
      {/* Header */}
      <header className="movies-page-header">
        <h1 className="movies-title">Explore Movies & Shows</h1>
        <p className="movies-description">
          Search and discover your favorite movies and TV shows.
        </p>

        {/* Search Bar */}
        <SearchBar
          query={searchQuery}
          onQueryChange={setSearchQuery}
          onClear={handleClearSearch}
        />
      </header>

      {/* Query status feedback if searching */}
      {debouncedQuery && !loading && !error && (
        <p className="search-status-text">
          Showing {movies.length} result{movies.length === 1 ? '' : 's'} for: <strong>"{debouncedQuery}"</strong>
        </p>
      )}

      {/* Loading state */}
      {loading && (
        <Loading
          message={debouncedQuery ? `Searching for "${debouncedQuery}"...` : 'Loading movies...'}
          skeletonCount={8}
        />
      )}

      {/* Error state */}
      {!loading && error && (
        <ErrorMessage
          message={error}
          onRetry={handleRetry}
        />
      )}

      {/* Grid or Empty Results */}
      {!loading && !error && (
        <MovieGrid
          movies={movies}
          onSelectMovie={setSelectedMovie}
          onClearSearch={debouncedQuery ? handleClearSearch : null}
        />
      )}

      {/* Details Modal */}
      {selectedMovie && (
        <MovieModal
          movie={selectedMovie}
          onClose={() => setSelectedMovie(null)}
        />
      )}
    </div>
  );
};

export default Movies;
