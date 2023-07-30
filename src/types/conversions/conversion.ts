export interface FetchConversionDto {
  conversionId: string;

  business?: string;
}

export interface CreateConversionDto {
  business: string;

  quoteReference: string;
}
