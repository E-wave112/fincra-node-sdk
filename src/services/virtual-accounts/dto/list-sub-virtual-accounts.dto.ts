import { IsString, IsNotEmpty, IsOptional } from 'class-validator';

export class ListSubVirtualAccountsDto {
  @IsNotEmpty()
  @IsString()
  businessId: string;

  @IsNotEmpty()
  @IsString()
  subAccountId: string;

  @IsOptional()
  @IsString()
  page?: string;

  @IsOptional()
  @IsString()
  perPage?: string;
}
