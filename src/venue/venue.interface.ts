import { Document } from 'mongoose';

export interface Venue extends Document {
  name: string;
  location: string;
  capacity: number;
  available: boolean;
}
