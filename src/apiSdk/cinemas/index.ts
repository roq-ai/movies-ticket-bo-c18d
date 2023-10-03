import queryString from 'query-string';
import { CinemaInterface, CinemaGetQueryInterface } from 'interfaces/cinema';
import { fetcher } from 'lib/api-fetcher';
import { GetQueryInterface, PaginatedInterface } from '../../interfaces';

export const getCinemas = async (query?: CinemaGetQueryInterface): Promise<PaginatedInterface<CinemaInterface>> => {
  return fetcher('/api/cinemas', {}, query);
};

export const createCinema = async (cinema: CinemaInterface) => {
  return fetcher('/api/cinemas', { method: 'POST', body: JSON.stringify(cinema) });
};

export const updateCinemaById = async (id: string, cinema: CinemaInterface) => {
  return fetcher(`/api/cinemas/${id}`, { method: 'PUT', body: JSON.stringify(cinema) });
};

export const getCinemaById = async (id: string, query?: GetQueryInterface) => {
  return fetcher(`/api/cinemas/${id}${query ? `?${queryString.stringify(query)}` : ''}`, {});
};

export const deleteCinemaById = async (id: string) => {
  return fetcher(`/api/cinemas/${id}`, { method: 'DELETE' });
};
