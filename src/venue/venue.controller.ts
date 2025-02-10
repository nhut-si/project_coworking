import {
  Controller,
  Post,
  Get,
  Patch,
  Delete,
  Body,
  Param,
} from '@nestjs/common';
import { VenueService } from './venue.service';

@Controller('venues')
export class VenueController {
  constructor(private readonly venueService: VenueService) {}

  @Post()
  async createVenue(
    @Body('name') name: string,
    @Body('location') location: string,
    @Body('capacity') capacity: number,
  ) {
    return this.venueService.createVenue(name, location, capacity);
  }

  @Get()
  async getVenues() {
    return this.venueService.getVenues();
  }

  @Patch(':id')
  async updateVenue(
    @Param('id') id: string,
    @Body('name') name: string,
    @Body('location') location: string,
    @Body('capacity') capacity: number,
  ) {
    return this.venueService.updateVenue(id, name, location, capacity);
  }

  @Delete(':id')
  async deleteVenue(@Param('id') id: string) {
    return this.venueService.deleteVenue(id);
  }
}
