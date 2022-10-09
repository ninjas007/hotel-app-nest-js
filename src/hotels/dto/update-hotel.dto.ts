import { IsNotEmpty, IsEnum } from "class-validator";
import { HotelStatus, HotelBintang } from "../hotel.model";

export class UpdateHotelDto {
    @IsNotEmpty()
    hotel_name: string;

    @IsNotEmpty()
    contact_number: string;

    @IsEnum(HotelStatus, {message: 'Harus sesuai enum: BUMN atau SWASTA'})
    status: HotelStatus

    @IsEnum(HotelBintang, {message: 'Harus sesuai enum: 1,2,3,4 atau 5'})
    bintang: HotelBintang
}