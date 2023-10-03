import * as yup from 'yup';

export const showValidationSchema = yup.object().shape({
  show_time: yup.date().required(),
  seat_price: yup.number().integer().required(),
  available_seats: yup.number().integer().required(),
  movie_id: yup.string().nullable().required(),
  cinema_id: yup.string().nullable().required(),
});
