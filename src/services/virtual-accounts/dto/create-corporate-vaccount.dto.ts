import { KycCorporateDto } from './sub-dto';
import {
  IsOptional,
  IsNotEmpty,
  IsString,
  IsObject,
  ValidateNested,
} from 'class-validator';

export class CreateCorporateVirtualAccountDto {
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
  KYCInformation: KycCorporateDto;

  @IsOptional()
  @IsString()
  entityName?: string;

  @IsOptional()
  @IsString()
  reason?: string;

  @IsOptional()
  @IsString()
  monthlyVolume?: string;

  @IsOptional()
  @IsString()
  paymentFlowDescription?: string;

  @IsOptional()
  @IsString()
  channel?: string;
}
