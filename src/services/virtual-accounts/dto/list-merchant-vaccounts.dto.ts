import { IsString, IsNotEmpty, IsOptional } from 'class-validator';

export class ListMerchantVirtualAccountsDto {
  @IsNotEmpty()
  @IsString()
  currency: string;

  @IsNotEmpty()
  @IsString()
  businessName: string;

  @IsOptional()
  @IsString()
  issuedDate?: string;

  @IsOptional()
  @IsString()
  requestedDate?: string;

  @IsOptional()
  @IsString()
  accountNumber?: string;

  @IsOptional()
  @IsString()
  status?: string;
}
