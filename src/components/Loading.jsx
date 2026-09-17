const Loading = ({ message = 'Loading movies...', showSkeletons = true, skeletonCount = 8 }) => {
  return (
    <div className="loading-wrapper" aria-live="polite" aria-busy="true">
      <div className="loading-container">
        <div className="spinner" aria-hidden="true"></div>
        <p className="loading-text">{message}</p>
      </div>

      {showSkeletons && (
        <div className="movie-grid" aria-hidden="true">
          {Array.from({ length: skeletonCount }).map((_, idx) => (
            <div key={idx} className="skeleton-card">
              <div className="skeleton-poster" />
              <div className="skeleton-content">
                <div className="skeleton-line" />
                <div className="skeleton-line short" />
                <div className="skeleton-line btn" />
              </div>
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default Loading;
