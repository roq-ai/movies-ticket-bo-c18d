import queryString from 'query-string';
import { ShowInterface, ShowGetQueryInterface } from 'interfaces/show';
import { fetcher } from 'lib/api-fetcher';
import { GetQueryInterface, PaginatedInterface } from '../../interfaces';

export const getShows = async (query?: ShowGetQueryInterface): Promise<PaginatedInterface<ShowInterface>> => {
  return fetcher('/api/shows', {}, query);
};

export const createShow = async (show: ShowInterface) => {
  return fetcher('/api/shows', { method: 'POST', body: JSON.stringify(show) });
};

export const updateShowById = async (id: string, show: ShowInterface) => {
  return fetcher(`/api/shows/${id}`, { method: 'PUT', body: JSON.stringify(show) });
};

export const getShowById = async (id: string, query?: GetQueryInterface) => {
  return fetcher(`/api/shows/${id}${query ? `?${queryString.stringify(query)}` : ''}`, {});
};

export const deleteShowById = async (id: string) => {
  return fetcher(`/api/shows/${id}`, { method: 'DELETE' });
};
