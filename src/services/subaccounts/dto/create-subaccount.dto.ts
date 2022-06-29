import { IsString, IsOptional, IsNotEmpty, IsEmail } from 'class-validator';

export class CreateSubAccountDto {
  @IsString()
  @IsNotEmpty()
  businessId: string;

  @IsOptional()
  @IsString()
  name?: string;

  @IsOptional()
  @IsString()
  @IsEmail()
  email?: string;

  @IsOptional()
  @IsString()
  mobile?: string;

  @IsOptional()
  @IsString()
  country?: string;
}
