export function createSlug(text: string): string {
  return text
    .toLowerCase()
    .replace(/[^a-z0-9]+/g, '-')
    .replace(/^-|-$/g, '');
}

export function getMovieBySlug(movies: any[], slug: string) {
  return movies.find(movie => createSlug(movie.title) === slug);
}
