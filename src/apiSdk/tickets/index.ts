import queryString from 'query-string';
import { TicketInterface, TicketGetQueryInterface } from 'interfaces/ticket';
import { fetcher } from 'lib/api-fetcher';
import { GetQueryInterface, PaginatedInterface } from '../../interfaces';

export const getTickets = async (query?: TicketGetQueryInterface): Promise<PaginatedInterface<TicketInterface>> => {
  return fetcher('/api/tickets', {}, query);
};

export const createTicket = async (ticket: TicketInterface) => {
  return fetcher('/api/tickets', { method: 'POST', body: JSON.stringify(ticket) });
};

export const updateTicketById = async (id: string, ticket: TicketInterface) => {
  return fetcher(`/api/tickets/${id}`, { method: 'PUT', body: JSON.stringify(ticket) });
};

export const getTicketById = async (id: string, query?: GetQueryInterface) => {
  return fetcher(`/api/tickets/${id}${query ? `?${queryString.stringify(query)}` : ''}`, {});
};

export const deleteTicketById = async (id: string) => {
  return fetcher(`/api/tickets/${id}`, { method: 'DELETE' });
};
