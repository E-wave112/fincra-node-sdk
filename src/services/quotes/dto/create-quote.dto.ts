import { IsNotEmpty, IsString } from 'class-validator';

/* It's a class that defines the shape of the data that will be sent to the API */
export class CreateQuoteDto {
  @IsString()
  @IsNotEmpty()
  action: string;

  @IsString()
  @IsNotEmpty()
  transactionType: string;

  @IsString()
  @IsNotEmpty()
  feeBearer: string;

  @IsString()
  @IsNotEmpty()
  beneficiaryType: string;

  @IsString()
  @IsNotEmpty()
  sourceCurrency: string;

  @IsString()
  @IsNotEmpty()
  destinationCurrency: string;

  @IsString()
  @IsNotEmpty()
  amount: string;

  @IsString()
  @IsNotEmpty()
  business: string;

  @IsString()
  @IsNotEmpty()
  paymentScheme: string;

  @IsString()
  @IsNotEmpty()
  paymentDestination: string;
}
