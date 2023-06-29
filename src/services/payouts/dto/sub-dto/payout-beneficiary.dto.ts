import {
  IsString,
  IsOptional,
  IsNotEmpty,
  IsEmail,
  IsObject,
  ValidateNested,
} from 'class-validator';
import { AddressDto } from '../../../beneficiaries/dto';
import { PayoutDocumentDto } from './payout-document.dto';
export class PayoutBeneficiaryDto {
  @IsOptional()
  @IsString()
  firstName?: string;

  @IsOptional()
  @IsString()
  lastName?: string;

  @IsOptional()
  @IsString()
  @IsEmail()
  email?: string;

  @IsString()
  @IsNotEmpty()
  type: string;

  @IsString()
  @IsNotEmpty()
  accountHolderName: string;

  @IsString()
  @IsNotEmpty()
  accountNumber: string;

  @IsOptional()
  @IsString()
  mobileMoneyCode?: string;

  @IsOptional()
  @IsString()
  country?: string;

  @IsOptional()
  @IsString()
  bankCode?: string;

  @IsOptional()
  @IsString()
  bankSwiftCode?: string;

  @IsOptional()
  @IsString()
  sortCode?: string;

  @IsOptional()
  @IsString()
  registrationNumber?: string;

  @IsOptional()
  @IsObject()
  @ValidateNested()
  address?: AddressDto;

  @IsOptional()
  @IsObject()
  @ValidateNested()
  document?: PayoutDocumentDto;
}
