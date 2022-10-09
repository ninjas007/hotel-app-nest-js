import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { HotelRepository } from './hotel.repository';
import { Hotel } from './hotel.entity';
import { GetHotelsDto } from './dto/get-hotel.dto';
import { CreateHotelDTo } from './dto/create-hotel.dto';
import { UpdateHotelDto } from './dto/update-hotel.dto';

@Injectable()
export class HotelsService {
    constructor(@InjectRepository(HotelRepository) private hotelRepository: HotelRepository) { }

    async getAllHotel(search: GetHotelsDto) : Promise<Hotel[]>{
        return await this.hotelRepository.getHotels(search);
    }

    async getHotelById(id: string) {
        return await this.hotelRepository.getHotelById(id);
    }

    async createHotel(data: CreateHotelDTo): Promise<Hotel> {
        return await this.hotelRepository.createHotel(data);
    }

    async updateHotel(id: string, data: UpdateHotelDto) : Promise<Hotel> {
        return await this.hotelRepository.updateHotel(id, data)
    }

    async deleteHotel(id: string) {
        return await this.hotelRepository.deleteHotel(id);
    }
}
