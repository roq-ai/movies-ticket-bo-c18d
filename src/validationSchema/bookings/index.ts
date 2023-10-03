import * as yup from 'yup';

export const bookingValidationSchema = yup.object().shape({
  booking_time: yup.date().required(),
  total_seats: yup.number().integer().required(),
  total_price: yup.number().integer().required(),
  user_id: yup.string().nullable().required(),
  show_id: yup.string().nullable().required(),
});
