import { Adress } from './adress.interface';

export interface User {
  name: string;
  email: string;
  phone: string;
  adress: Adress;
}
