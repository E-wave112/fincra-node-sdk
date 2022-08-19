import {
  IsString,
  IsOptional,
  IsNotEmpty,
  IsArray,
  IsISO8601,
} from 'class-validator';

export class ListCollectionMultipleVirtualAccountsDto {
  @IsNotEmpty()
  @IsString()
  business: string;

  @IsNotEmpty()
  @IsArray()
  status: string[];

  @IsNotEmpty()
  @IsString()
  sourceCurrency: string;

  @IsNotEmpty()
  @IsString()
  destinationCurrency: string;

  @IsNotEmpty()
  @IsString()
  subAccount: string;

  @IsOptional()
  @IsString()
  page?: string;

  @IsOptional()
  @IsString()
  perPage?: string;

  @IsNotEmpty()
  @IsISO8601()
  dateFrom: string;

  @IsNotEmpty()
  @IsISO8601()
  dateTo: string;
}
