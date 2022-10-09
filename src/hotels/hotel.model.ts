export interface HotelModel {
    id: string;
    hotel_name: string;
    contact_number: string;
    alamat: string;
    bintang: HotelBintang;
    status: HotelStatus;
    description: string;
}

export enum HotelBintang {
    BINTANG_1 = '1',
    BINTANG_2 = '2',
    BINTANG_3 = '3',
    BINTANG_4 = '4',
    BINTANG_5 = '5'
}

export enum HotelStatus {
    SWASTA = 'SWASTA',
    BUMN = 'BUMN'
}