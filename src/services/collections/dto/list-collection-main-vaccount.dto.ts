import { IsString, IsOptional } from 'class-validator';

export class ListCollectionMainVirtualAccountDto {
  @IsOptional()
  @IsString()
  business?: string;

  @IsOptional()
  @IsString()
  reference?: string;

  @IsOptional()
  @IsString()
  page?: string;

  @IsOptional()
  @IsString()
  perPage?: string;
}
