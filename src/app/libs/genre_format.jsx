
  export function formatGenres(genres) {
    if (!genres || genres.length === 0) return 'Genre not specified';
    return genres.map(genre => genre.name).join(', ');
  }