import { Controller, Get, Query, Post, Body, Param, Delete, Patch } from '@nestjs/common';
import { CreateHotelDTo } from './dto/create-hotel.dto';
import { GetHotelsDto } from './dto/get-hotel.dto';
import { HotelsService } from './hotels.service';
import { UpdateHotelDto } from './dto/update-hotel.dto';

@Controller('hotels')
export class HotelsController {
    constructor(private hotelService: HotelsService) { }

    @Get()
    getHotels(@Query() search: GetHotelsDto) {
        return this.hotelService.getAllHotel(search);
    }

    @Get('/:id')
    getHotelById(@Param('id') id: string) {
        return this.hotelService.getHotelById(id);
    }

    @Post()
    createHotel(@Body() data: CreateHotelDTo) {
        return this.hotelService.createHotel(data);
    }

    @Patch('/:id')
    updateHotel(@Param('id') id: string, @Body() data: UpdateHotelDto) {
        return this.hotelService.updateHotel(id, data);
    }


    @Delete('/:id')
    deleteHotel(@Param('id') id: string) {
        return this.hotelService.deleteHotel(id);
    }
}
