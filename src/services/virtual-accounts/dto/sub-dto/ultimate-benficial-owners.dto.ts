import { PayoutDocumentDto } from '../../../payouts/dto';
import {
  IsString,
  IsOptional,
  IsNotEmpty,
  ValidateNested,
  IsObject,
} from 'class-validator';

export class UltimateBeneficialOwnersDto {
  @IsString()
  @IsNotEmpty()
  firstName: string;

  @IsString()
  @IsNotEmpty()
  lastName: string;

  @IsString()
  @IsNotEmpty()
  ownershipPercentage: string;

  @IsString()
  @IsNotEmpty()
  politicallyExposedPerson: string;

  @IsOptional()
  @IsObject()
  @ValidateNested()
  document?: PayoutDocumentDto;
}
