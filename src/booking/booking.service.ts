import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { Booking } from './booking.interface';

@Injectable()
export class BookingService {
  constructor(
    @InjectModel('Booking') private readonly bookingModel: Model<Booking>,
  ) {}

  async createBooking(
    user: string,
    venue: string,
    date: string,
    time: string,
  ): Promise<Booking> {
    const newBooking = new this.bookingModel({
      user,
      venue,
      date,
      time,
      status: 'pending',
    });
    return newBooking.save();
  }

  async getBookings(): Promise<Booking[]> {
    return this.bookingModel.find().populate('user').populate('venue').exec();
  }

  async updateBookingStatus(
    id: string,
    status: string,
  ): Promise<Booking | null> {
    return this.bookingModel
      .findByIdAndUpdate(id, { status }, { new: true })
      .exec();
  }

  async deleteBooking(id: string): Promise<void> {
    await this.bookingModel.findByIdAndDelete(id).exec();
  }
}
