import { useMemo } from 'react';

export interface MovieType {
  id: number;
  title: string;
  description: string;
  image: string;
}

export const createSlug = (text: string): string => 
  text.toLowerCase().trim().replace(/[^a-z0-9]+/g, '-').replace(/^-|-$/g, '');

export const findMovieBySlug = (movies: MovieType[], slug: string): MovieType | undefined => 
  movies.find(movie => createSlug(movie.title) === slug);

export const buildUrl = (baseUrl: string, params: Record<string, any>): string => {
  const url = new URL(baseUrl);
  Object.entries(params).forEach(([key, value]) => {
    if (value !== undefined) url.searchParams.append(key, String(value));
  });
  return url.toString();
};
