import { IsNotEmpty, IsOptional, IsString } from 'class-validator';

export class VerifyBankAccountDto {
  @IsString()
  @IsNotEmpty()
  accountNumber: string;

  @IsString()
  @IsNotEmpty()
  bankCode: string;

  @IsOptional()
  @IsString()
  type?: string;

  @IsOptional()
  @IsString()
  iban?: string;
}
