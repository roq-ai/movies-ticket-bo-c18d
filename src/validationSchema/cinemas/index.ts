import * as yup from 'yup';

export const cinemaValidationSchema = yup.object().shape({
  description: yup.string().nullable(),
  location: yup.string().nullable(),
  total_seats: yup.number().integer().nullable(),
  opening_time: yup.date().nullable(),
  closing_time: yup.date().nullable(),
  name: yup.string().required(),
  user_id: yup.string().nullable().required(),
});
