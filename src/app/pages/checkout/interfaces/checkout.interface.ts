import { Payment } from './payment.interface';
import { User } from './user.interface';

export interface Checkout {
  user: User,
  payment: Payment
}
