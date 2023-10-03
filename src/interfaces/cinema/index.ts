import { ShowInterface } from 'interfaces/show';
import { UserInterface } from 'interfaces/user';
import { GetQueryInterface } from 'interfaces';

export interface CinemaInterface {
  id?: string;
  description?: string;
  location?: string;
  total_seats?: number;
  opening_time?: any;
  closing_time?: any;
  name: string;
  created_at?: any;
  updated_at?: any;
  user_id: string;
  tenant_id: string;
  show?: ShowInterface[];
  user?: UserInterface;
  _count?: {
    show?: number;
  };
}

export interface CinemaGetQueryInterface extends GetQueryInterface {
  id?: string;
  description?: string;
  location?: string;
  name?: string;
  user_id?: string;
  tenant_id?: string;
}
