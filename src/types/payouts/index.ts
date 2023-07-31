import { ListCollectionMultipleVirtualAccountsDto } from '../collections';
import { PayoutBeneficiaryDto } from './sub-dto/payouts-sub';

export interface WalletToWalletTransferDto {
  amount: string;

  beneficiaryWalletNumber: string;

  business: string;

  customerReference: string;

  description: string;
}

export interface UploadPayoutDto {
  name?: string;

  type?: string;

  file?: string;

  reference: string;
}

export interface CreatePayoutDto {
  sourceCurrency: string;

  destinationCurrency: string;

  amount: string;

  business: string;

  description: string;

  customerReference?: string;

  beneficiary?: PayoutBeneficiaryDto;

  paymentDestination?: string;

  paymentScheme?: string;

  quoteReference?: string;
}

export interface ListPayoutDto
  extends ListCollectionMultipleVirtualAccountsDto {}
