import { AddressDto, BankDto } from './sub-dto';

export interface CreateBeneficiaryDto {
  businessId: string;

  firstName: string;

  lastName?: string;

  email?: string;

  phoneNumber?: string;

  accountHolderName: string;

  bank?: BankDto;

  address?: AddressDto;

  type: string;

  currency: string;

  paymentDestination: string;

  destinationAddress: string;

  uniqueIdentifier?: string;
}

export interface ListBeneficiaryDto {
  businessId: string;

  page?: string;

  perPage?: string;
}

export interface UpdateBeneficiaryDto extends CreateBeneficiaryDto {
  beneficiaryId: string;
}

export interface FetchDeleteBeneficiaryDto {
  businessId: string;

  beneficiaryId: string;
}
