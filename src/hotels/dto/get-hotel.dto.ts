import { IsEnum, IsOptional, IsString } from "class-validator";
import { HotelStatus, HotelBintang } from "../hotel.model";

export class GetHotelsDto {
    @IsOptional()
    @IsEnum(HotelStatus)
    status?: HotelStatus

    @IsOptional()
    @IsEnum(HotelBintang)
    bintang?: HotelBintang

    @IsOptional()
    @IsString()
    search?: string
}