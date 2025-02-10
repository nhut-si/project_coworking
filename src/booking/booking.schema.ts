import { Schema } from 'mongoose';

export const BookingSchema = new Schema({
  user: { type: Schema.Types.ObjectId, ref: 'User' },
  venue: { type: Schema.Types.ObjectId, ref: 'Venue' },
  date: String,
  time: String,
  status: {
    type: String,
    enum: ['pending', 'confirmed', 'canceled'],
    default: 'pending',
  },
});
