import { CreateBeneficiaryDto } from './';
import { IsNotEmpty, IsString } from 'class-validator';

export class UpdateBeneficiaryDto extends CreateBeneficiaryDto {
    
    @IsNotEmpty()
    @IsString()
    beneficiaryId: string;
}