import { IsString, IsOptional } from 'class-validator';

export class AddressDto {
    @IsOptional()
    @IsString()
    Country?:string;

    @IsOptional()
    @IsString()
    State?:string;

    @IsOptional()
    @IsString()
    zip?:string;

    @IsOptional()
    @IsString()
    city?:string;

    @IsOptional()
    @IsString()
    street?:string;
}