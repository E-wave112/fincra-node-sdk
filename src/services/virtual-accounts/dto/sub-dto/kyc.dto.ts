import { AddressDto } from '../../../beneficiaries/dto';
import { PayoutDocumentDto } from '../../../payouts/dto';
import {
  IsOptional,
  IsString,
  IsObject,
  ValidateNested,
} from 'class-validator';

export class KycDto {
  @IsOptional()
  @IsString()
  firstName?: string;

  @IsOptional()
  @IsString()
  lastName?: string;

  @IsOptional()
  @IsString()
  email?: string;

  @IsOptional()
  @IsString()
  businessName?: string;

  @IsOptional()
  @IsString()
  bvn?: string;

  @IsOptional()
  @IsString()
  birthDate?: string;

  @IsOptional()
  @IsString()
  occupation?: string;

  @IsOptional()
  @IsString()
  businessCategory?: string;

  @IsOptional()
  @IsString()
  additionalInfo?: string;

  @IsOptional()
  @IsObject()
  @ValidateNested()
  address?: AddressDto;

  @IsOptional()
  @IsObject()
  @ValidateNested()
  document?: PayoutDocumentDto;
}
