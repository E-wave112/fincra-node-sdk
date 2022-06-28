import { IsString, IsOptional, IsNotEmpty } from 'class-validator';

export class PayoutDocumentDto {
  @IsString()
  @IsNotEmpty()
  type: string;

  @IsString()
  @IsNotEmpty()
  number: string;

  @IsString()
  @IsNotEmpty()
  issuedCountryCode: string;

  @IsString()
  @IsNotEmpty()
  issuedBy: string;

  @IsString()
  @IsNotEmpty()
  issuedDate: string;

  @IsOptional()
  @IsString()
  expirationDate?: string;
}
