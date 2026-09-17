const ErrorMessage = ({
  message = 'Unable to load movies. Please try again.',
  onRetry
}) => {
  return (
    <div className="error-container" role="alert">
      <div className="error-icon" aria-hidden="true">
        ⚠️
      </div>
      <h3 className="error-title">Something Went Wrong</h3>
      <p className="error-message">{message}</p>
      {onRetry && (
        <button
          type="button"
          className="btn-retry"
          onClick={onRetry}
          aria-label="Retry loading movies"
        >
          <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
            <polyline points="1 4 1 10 7 10"></polyline>
            <path d="M3.51 15a9 9 0 1 0 2.13-9.36L1 10"></path>
          </svg>
          <span>Retry</span>
        </button>
      )}
    </div>
  );
};

export default ErrorMessage;
