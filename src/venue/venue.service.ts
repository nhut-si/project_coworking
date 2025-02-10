import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { Venue } from './venue.interface';

@Injectable()
export class VenueService {
  constructor(
    @InjectModel('Venue') private readonly venueModel: Model<Venue>,
  ) {}

  async createVenue(
    name: string,
    location: string,
    capacity: number,
  ): Promise<Venue> {
    const newVenue = new this.venueModel({ name, location, capacity });
    return newVenue.save();
  }

  async getVenues(): Promise<Venue[]> {
    return this.venueModel.find().exec();
  }

  async updateVenue(
    id: string,
    name: string,
    location: string,
    capacity: number,
  ): Promise<Venue | null> {
    return this.venueModel
      .findByIdAndUpdate(id, { name, location, capacity }, { new: true })
      .exec();
  }

  async deleteVenue(id: string): Promise<void> {
    await this.venueModel.findByIdAndDelete(id).exec();
  }
}
