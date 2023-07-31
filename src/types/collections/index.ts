export interface PayWithTransferDto {
  name?: string;

  merchantReference?: string;

  expiresAt: string;
}

export interface ListCollectionMultipleVirtualAccountsDto {
  business: string;

  status: string[];

  sourceCurrency: string;

  destinationCurrency: string;

  subAccount: string;

  page?: string;

  perPage?: string;

  dateFrom: string;

  dateTo: string;
}

export interface ListCollectionMainVirtualAccountDto {
  business?: string;

  reference?: string;

  page?: string;

  perPage?: string;
}

export interface FetchCollectionVirtualAccountDto {
  business?: string;

  reference: string;
}
