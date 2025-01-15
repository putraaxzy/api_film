interface MovieType {
  title: string;
  [key: string]: any;
}

export function createSlug(text: string): string {
  return text
    .toLowerCase()
    .replace(/[^a-z0-9]+/g, '-')
    .replace(/^-|-$/g, '');
}

export function getMovieBySlug(movies: MovieType[], slug: string): MovieType | undefined {
  return movies.find(movie => createSlug(movie.title) === slug);
}

type QueryParams = Record<string, string | number | boolean | undefined>;

export const buildUrl = (baseUrl: string, params: QueryParams): string => {
  const url = new URL(baseUrl);
  Object.entries(params).forEach(([key, value]) => {
    if (value !== undefined) {
      url.searchParams.append(key, String(value));
    }
  });
  return url.toString();
};
