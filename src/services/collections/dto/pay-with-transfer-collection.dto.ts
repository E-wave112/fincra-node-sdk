import { IsString, IsOptional, IsNotEmpty } from 'class-validator';

export class PayWithTransferDto {
  @IsOptional()
  @IsString()
  name?: string;

  @IsOptional()
  @IsString()
  merchantReference?: string;

  @IsNotEmpty()
  @IsString()
  expiresAt: string;
}
