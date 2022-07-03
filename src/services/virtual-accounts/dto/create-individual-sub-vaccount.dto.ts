import { KycDto } from './sub-dto';
import {
  IsString,
  IsNotEmpty,
  IsArray,
  IsOptional,
  IsObject,
  ValidateNested,
} from 'class-validator';

export class CreateIndividualSubAccountDto {
  @IsString()
  @IsNotEmpty()
  currency: string;

  @IsString()
  @IsNotEmpty()
  accountType: string;

  @IsString()
  @IsNotEmpty()
  businessId: string;

  @IsString()
  @IsNotEmpty()
  subAccountId: string;

  @IsOptional()
  @IsArray()
  meansOfId?: string[];

  @IsOptional()
  @IsString()
  utilityBill?: string;

  @IsOptional()
  @IsString()
  channel?: string;

  @IsOptional()
  @IsObject()
  @ValidateNested()
  KYCInformation?: KycDto;
}
