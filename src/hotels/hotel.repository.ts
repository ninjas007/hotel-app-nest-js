import { CreateHotelDTo } from "./dto/create-hotel.dto";
import { HotelStatus } from "./Hotel.model";
import { Repository, DataSource } from 'typeorm';
import { Hotel } from "./hotel.entity";
import { GetHotelsDto } from "./dto/get-hotel.dto";
import { Injectable, NotFoundException } from '@nestjs/common';
import { UpdateHotelDto } from "./dto/update-hotel.dto";

@Injectable()
export class HotelRepository extends Repository<Hotel> {

    constructor(private dataSource: DataSource) {
        super(Hotel, dataSource.createEntityManager());
    }

    async createHotel(data: CreateHotelDTo) : Promise<Hotel> {
        const hotel = this.create({ ...data });
        await this.save(hotel);
        return hotel;
    }

    async getHotels(filters: GetHotelsDto) : Promise<Hotel[]> {
        const { status, search, bintang } = filters;
        const query = this.createQueryBuilder('hotel');

        if(search) {
            query.where('LOWER(hotel.hotel_name) LIKE LOWER(:search) OR LOWER (hotel.description) LIKE LOWER(:search) OR LOWER (hotel.alamat) LIKE LOWER(:search) OR LOWER (hotel.contact_number) LIKE LOWER(:search)', { search: `%${search}%`});
        }

        if(status) {
            query.andWhere('hotel.status = :status', { status });
        }

        if(bintang) {
            query.andWhere('hotel.bintang = :bintang', {bintang});
        }

        const hotels = await query.getMany();
        return hotels;
    }

    async getHotelById(id: string) {
        const hotel = await this.findOneBy({id});

        if(!hotel) {
            throw new NotFoundException('hotel not found');
        }

        return hotel;
    }

    async updateHotel(id: string, data: UpdateHotelDto) {
        await this.update({id}, {...data});
        return await this.getHotelById(id);
    }

    async deleteHotel(id: string) {
        await this.getHotelById(id);

        return await this.delete(id);
    }
}