import { Schema } from 'mongoose';

export const VenueSchema = new Schema({
  name: String,
  location: String,
  capacity: Number,
  available: { type: Boolean, default: true },
});
