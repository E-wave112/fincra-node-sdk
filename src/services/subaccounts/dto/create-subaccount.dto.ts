import { IsString, IsOptional, IsNotEmpty } from 'class-validator';

export class CreateSubAccountDto {
  @IsString()
  @IsNotEmpty()
  businessId: string;

  @IsOptional()
  @IsString()
  name?: string;

  @IsOptional()
  @IsString()
  email?: string;

  @IsOptional()
  @IsString()
  mobile?: string;

  @IsOptional()
  @IsString()
  country?: string;
}
