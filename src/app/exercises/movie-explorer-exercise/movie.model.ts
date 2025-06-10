export interface Movie {
  id: number;
  title: string;
  description: string;
  posterImage: string;
  imdbLink: string;
  durationMinutes: number;
  genre: string[];
  rating: number;
}
