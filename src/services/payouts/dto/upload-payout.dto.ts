import { IsString, IsNotEmpty, IsOptional } from 'class-validator';

export class UploadPayoutDto {
  @IsOptional()
  @IsString()
  name?: string;

  @IsOptional()
  @IsString()
  type?: string;

  @IsOptional()
  @IsString()
  file?: string;

  @IsNotEmpty()
  @IsString()
  reference: string;
}
