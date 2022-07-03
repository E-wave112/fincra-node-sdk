import { KycDto } from './sub-dto';
import {
  IsOptional,
  IsNotEmpty,
  IsString,
  IsObject,
  ValidateNested,
  IsArray,
} from 'class-validator';

export class CreateVirtualAccountDto {
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
  reason?: string;

  @IsOptional()
  @IsString()
  paymentFlowDescription?: string;

  @IsOptional()
  @IsString()
  monthlyVolume?: string;

  @IsOptional()
  @IsString()
  entityName?: string;

  @IsOptional()
  @IsString()
  attachments?: string;

  @IsOptional()
  @IsString()
  channel?: string;
}
