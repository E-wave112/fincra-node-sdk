export interface VerifyBankAccountDto {
  accountNumber: string;
  bankCode: string;

  type?: string;

  iban?: string;
}

export interface BvnResolutionDto {
  bvn: string;

  business: string;
}
