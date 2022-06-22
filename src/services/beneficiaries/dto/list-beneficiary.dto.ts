import { IsNotEmpty, IsString, IsOptional } from 'class-validator';

export class ListBeneficiaryDto {
    @IsNotEmpty()
    @IsString()
    businessId: string;

    @IsOptional()
    @IsString()
    page?: string;

    @IsOptional()
    @IsString()
    perPage?: string;
}