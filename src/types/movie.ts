export interface Movie {
  id: number;
  title: string;
  description: string;
  releaseDate: string;
  rating: number;
  image: string;
  duration: string; 
  trailerYoutubeId?: string;
  genre?: string[];
  director?: string;
  cast?: string[];
  language?: string;
  production?: string;
}