import { BookingInterface } from 'interfaces/booking';
import { MovieInterface } from 'interfaces/movie';
import { CinemaInterface } from 'interfaces/cinema';
import { GetQueryInterface } from 'interfaces';

export interface ShowInterface {
  id?: string;
  movie_id: string;
  cinema_id: string;
  show_time: any;
  seat_price: number;
  available_seats: number;
  created_at?: any;
  updated_at?: any;
  booking?: BookingInterface[];
  movie?: MovieInterface;
  cinema?: CinemaInterface;
  _count?: {
    booking?: number;
  };
}

export interface ShowGetQueryInterface extends GetQueryInterface {
  id?: string;
  movie_id?: string;
  cinema_id?: string;
}
