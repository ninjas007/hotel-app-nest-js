import { Entity, Column, PrimaryGeneratedColumn } from 'typeorm';
import { HotelStatus, HotelBintang } from './hotel.model';

@Entity()
export class Hotel {
    @PrimaryGeneratedColumn('uuid')
    id: string

    @Column()
    hotel_name: string

    @Column()
    contact_number: string

    @Column()
    alamat: string

    @Column()
    bintang: HotelBintang

    @Column()
    status: HotelStatus

    @Column()
    description: string
}