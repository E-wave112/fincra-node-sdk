import { IsNotEmpty, IsString } from 'class-validator';

export class FetchDeleteBeneficiaryDto {
    @IsNotEmpty()
    @IsString()
    businessId: string;

    @IsNotEmpty()
    @IsString()
    beneficiaryId: string;
}