const mapping: Record<string, string> = {
  bookings: 'booking',
  cinemas: 'cinema',
  movies: 'movie',
  shows: 'show',
  tickets: 'ticket',
  users: 'user',
};

export function convertRouteToEntityUtil(route: string) {
  return mapping[route] || route;
}
