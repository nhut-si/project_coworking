import {
  Controller,
  Post,
  Get,
  Patch,
  Body,
  Param,
  UseGuards,
  Delete,
} from '@nestjs/common';
import { BookingService } from './booking.service';

@Controller('bookings')
export class BookingController {
  constructor(private readonly bookingService: BookingService) {}

  @Post()
  async createBooking(
    @Body('user') user: string,
    @Body('venue') venue: string,
    @Body('date') date: string,
    @Body('time') time: string,
  ) {
    return this.bookingService.createBooking(user, venue, date, time);
  }

  @Get()
  async getBookings() {
    return this.bookingService.getBookings();
  }

  @Patch(':id/status')
  async updateBookingStatus(
    @Param('id') id: string,
    @Body('status') status: string,
  ) {
    return this.bookingService.updateBookingStatus(id, status);
  }
  @Delete(':id')
  async deleteBooking(@Param('id') id: string) {
    await this.bookingService.deleteBooking(id);
  }
}
