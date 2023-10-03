import queryString from 'query-string';
import { MovieInterface, MovieGetQueryInterface } from 'interfaces/movie';
import { fetcher } from 'lib/api-fetcher';
import { GetQueryInterface, PaginatedInterface } from '../../interfaces';

export const getMovies = async (query?: MovieGetQueryInterface): Promise<PaginatedInterface<MovieInterface>> => {
  return fetcher('/api/movies', {}, query);
};

export const createMovie = async (movie: MovieInterface) => {
  return fetcher('/api/movies', { method: 'POST', body: JSON.stringify(movie) });
};

export const updateMovieById = async (id: string, movie: MovieInterface) => {
  return fetcher(`/api/movies/${id}`, { method: 'PUT', body: JSON.stringify(movie) });
};

export const getMovieById = async (id: string, query?: GetQueryInterface) => {
  return fetcher(`/api/movies/${id}${query ? `?${queryString.stringify(query)}` : ''}`, {});
};

export const deleteMovieById = async (id: string) => {
  return fetcher(`/api/movies/${id}`, { method: 'DELETE' });
};
