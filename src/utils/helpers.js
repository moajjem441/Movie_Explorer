/**
 * Formats a release date (YYYY-MM-DD) to just the 4-digit year.
 * Returns 'N/A' if null or invalid.
 */
export const formatYear = (premieredDate) => {
  if (!premieredDate) return 'N/A';
  const year = premieredDate.toString().split('-')[0];
  return year && year.length === 4 ? year : 'N/A';
};

/**
 * Formats rating average. Returns 'N/A' if null or undefined.
 */
export const formatRating = (rating) => {
  if (rating === null || rating === undefined) return 'N/A';
  if (typeof rating === 'object' && rating.average !== undefined && rating.average !== null) {
    return Number(rating.average).toFixed(1);
  }
  if (typeof rating === 'number') {
    return rating.toFixed(1);
  }
  return 'N/A';
};

/**
 * Safely strips HTML tags from TVMaze summary descriptions.
 */
export const stripHtml = (html) => {
  if (!html) return 'No overview available for this show.';
  // Use browser DOM parser if available
  if (typeof document !== 'undefined') {
    const doc = new DOMParser().parseFromString(html, 'text/html');
    const text = doc.body.textContent || '';
    return text.trim() || 'No overview available for this show.';
  }
  // Fallback regex for non-DOM environments
  return html.replace(/<[^>]*>/g, '').trim() || 'No overview available for this show.';
};

/**
 * SVG Placeholder data URL for shows without a poster.
 */
export const FALLBACK_POSTER =
  "data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='300' height='450' viewBox='0 0 300 450'%3E%3Crect width='300' height='450' fill='%23171f2f'/%3E%3Cpath d='M150 170c-22.09 0-40 17.91-40 40s17.91 40 40 40 40-17.91 40-40-17.91-40-40-40zm0 60c-11.05 0-20-8.95-20-20s8.95-20 20-20 20 8.95 20 20-8.95 20-20 20z' fill='%236366f1' opacity='0.7'/%3E%3Cpath d='M195 190l30-18v76l-30-18v-40z' fill='%236366f1' opacity='0.7'/%3E%3Ctext x='150' y='295' font-family='sans-serif' font-size='15' font-weight='600' fill='%2394a3b8' text-anchor='middle'%3ENo Poster Available%3C/text%3E%3Ctext x='150' y='320' font-family='sans-serif' font-size='12' fill='%2364748b' text-anchor='middle'%3EMovieExplorer%3C/text%3E%3C/svg%3E";

/**
 * Normalizes item whether from /shows (direct show) or /search/shows (wrapped in { show }).
 */
export const normalizeShow = (item) => {
  if (!item) return null;
  return item.show ? item.show : item;
};
