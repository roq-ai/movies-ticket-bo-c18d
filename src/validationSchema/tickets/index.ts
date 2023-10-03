import * as yup from 'yup';

export const ticketValidationSchema = yup.object().shape({
  seat_number: yup.number().integer().required(),
  price: yup.number().integer().required(),
  booking_id: yup.string().nullable().required(),
});
