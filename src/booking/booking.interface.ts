import { Document } from 'mongoose';

export interface Booking extends Document {
  user: string;
  venue: string;
  date: string;
  time: string;
  status: 'pending' | 'confirmed' | 'canceled';
}
