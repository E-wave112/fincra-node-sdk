import { IsNotEmpty, IsString, IsOptional } from 'class-validator';

/* It's a class that defines the shape of the data that will be sent to the API */
export class WalletLogsDto {
  @IsString()
  @IsNotEmpty()
  business: string;

  @IsOptional()
  @IsString()
  @IsNotEmpty()
  amount?: string;

  @IsOptional()
  @IsString()
  @IsNotEmpty()
  perPage?: string;

  @IsOptional()
  @IsString()
  @IsNotEmpty()
  page?: string;

  @IsOptional()
  @IsString()
  @IsNotEmpty()
  action?: string;
}
