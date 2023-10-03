import { TicketInterface } from 'interfaces/ticket';
import { UserInterface } from 'interfaces/user';
import { ShowInterface } from 'interfaces/show';
import { GetQueryInterface } from 'interfaces';

export interface BookingInterface {
  id?: string;
  user_id: string;
  show_id: string;
  booking_time: any;
  total_seats: number;
  total_price: number;
  created_at?: any;
  updated_at?: any;
  ticket?: TicketInterface[];
  user?: UserInterface;
  show?: ShowInterface;
  _count?: {
    ticket?: number;
  };
}

export interface BookingGetQueryInterface extends GetQueryInterface {
  id?: string;
  user_id?: string;
  show_id?: string;
}
