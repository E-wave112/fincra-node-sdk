import { KycDto, UltimateBeneficialOwnersDto } from './';

export interface KycCorporateDto extends Omit<KycDto, 'document'> {
  incorporationDate?: string;
  businessActivityDescription?: string;
  ultimateBeneficialOwners?: UltimateBeneficialOwnersDto[];
}
