import { KycDto } from './sub-dto';
import {
  IsOptional,
  IsNotEmpty,
  IsString,
  IsObject,
  IsArray,
  ValidateNested,
} from 'class-validator';

export class CreateInstantApprovalVirtualAccountDto {
  @IsNotEmpty()
  @IsString()
  businessId: string;

  @IsNotEmpty()
  @IsString()
  subAccountId: string;

  @IsNotEmpty()
  @IsString()
  currency: string;

  @IsNotEmpty()
  @IsString()
  accountType: string;

  @IsNotEmpty()
  @IsObject()
  @ValidateNested()
  KYCInformation: KycDto;

  @IsOptional()
  @IsArray()
  meansOfId?: string[];

  @IsOptional()
  @IsString()
  utilityBill?: string;

  @IsOptional()
  @IsString()
  channel?: string;
}
