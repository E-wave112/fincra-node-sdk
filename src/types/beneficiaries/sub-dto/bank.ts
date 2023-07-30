import { AddressDto } from '../sub-dto';

export interface BankDto {
  name?: string;

  code?: string;

  sortCode?: string;

  swiftCode?: string;

  branch?: string;

  address?: AddressDto;
}
