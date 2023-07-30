export interface CreateQuoteDto {
  action: string;

  transactionType: string;

  feeBearer: string;

  beneficiaryType: string;

  sourceCurrency: string;

  destinationCurrency: string;

  amount: string;

  business: string;

  paymentScheme: string;

  paymentDestination: string;
}
