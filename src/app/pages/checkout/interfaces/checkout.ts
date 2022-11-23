import { Payment } from './payment';
import { User } from './user';

export interface Checkout {
  user: User,
  payment: Payment
}
