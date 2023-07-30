import { AddressDto } from '../../beneficiaries/sub-dto';

export interface PayoutBeneficiaryDto {
  firstName?: string;

  lastName?: string;

  email?: string;

  type: string;

  accountHolderName: string;

  accountNumber: string;

  mobileMoneyCode?: string;

  country?: string;

  bankCode?: string;

  bankSwiftCode?: string;

  sortCode?: string;

  registrationNumber?: string;

  address?: AddressDto;

  document?: PayoutDocumentDto;
}

export interface PayoutDocumentDto {
  type: string;

  number: string;

  issuedCountryCode: string;

  issuedBy: string;

  issuedDate: string;

  expirationDate?: string;
}
