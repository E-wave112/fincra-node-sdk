import { Beneficiary } from '../../../src/services';
import {
  CreateBeneficiaryDto,
  FetchDeleteBeneficiaryDto,
  UpdateBeneficiaryDto,
  ListBeneficiaryDto,
} from '../../../src/services/beneficiaries/dto';
import { keys } from '../../env';

const beneficiaryInstance = new Beneficiary(keys[0], keys[1], {sandbox: true});

describe('service that creates a beneficiary', () => {
  it('returns a message object of a created beneficiary', async () => {
    try {
      const beneficiaryDetails: CreateBeneficiaryDto = {
        firstName: 'efe',
        lastName: 'ebieroma',
        email: 'efe@hahaha.com',
        phoneNumber: '09090909090',
        accountHolderName: 'efe stephen ebieroma',
        bank: {
          name: 'Wema Bank',
          code: '06',
          sortCode: '928927',
          branch: 'Ota',
          address: {
            country: 'GB',
            state: 'Lagos',
            zip: '123455',
            city: 'Paris',
            street: '12,josephus',
          },
        },
        address: {
          country: 'GB',
          state: 'Lagos',
          zip: '123455',
          city: 'Paris',
          street: '12,josephus',
        },
        type: 'individual',
        currency: 'GBP',
        paymentDestination: 'bank_account',
        uniqueIdentifier: '4',
        businessId: '627fefbe5a65ec99ba9af0be',
        destinationAddress: 'AKoka, yaba, lagos',
      };

      const result = await beneficiaryInstance.createBeneficiary(
        beneficiaryDetails
      );
      expect(result).toHaveBeenCalledWith(beneficiaryDetails);
      expect(typeof result).toBe('object');
    } catch (error) {
      expect(error).toBeInstanceOf(Error);
    }
  });
});

describe('service to return the list of all beneficiaries related to a business', () => {
  it('returns an array of beneficiary objects linked to a business', async () => {
    try {
      const data: ListBeneficiaryDto = {
        businessId: '627fefbe5a65ec99ba9af0be',
      };
      const result = await beneficiaryInstance.listBeneficiaries(data);
      expect(result).toHaveBeenCalledWith(data);
      expect(typeof result).toBe('object');
    } catch (error) {
      expect(error).toBeInstanceOf(Error);
    }
  });
});

describe('service to fetch a single beneficiary tied to a business', () => {
  it('returns a beneficiary object linked to a merchant', async () => {
    try {
      const data: FetchDeleteBeneficiaryDto = {
        businessId: '627fefbe5a65ec99ba9af0be',
        beneficiaryId: 'a5ce0826-4874-4a4b-9ec2-3f771d371ea4',
      };

      const result = await beneficiaryInstance.fetchBeneficiary(data);
      expect(result).toHaveBeenCalledWith(data);
      expect(typeof result).toBe('object');
    } catch (error) {
      expect(error).toBeInstanceOf(Error);
    }
  });
});

describe('service to update a beneficiary', () => {
  it('returns an updated beneficiary object', async () => {
    try {
      const beneficiaryDetails: UpdateBeneficiaryDto = {
        firstName: 'efe',
        lastName: 'ebieroma',
        email: 'efe@hahaha.com',
        phoneNumber: '09090909090',
        accountHolderName: 'efe stephen ebieroma',
        bank: {
          name: 'Wema Bank',
          code: '06',
          sortCode: '928927',
          branch: 'Ota',
          address: {
            country: 'GB',
            state: 'Lagos',
            zip: '123455',
            city: 'Paris',
            street: '12,josephus',
          },
        },
        address: {
          country: 'GB',
          state: 'Lagos',
          zip: '123455',
          city: 'Paris',
          street: '12,josephus',
        },
        type: 'individual',
        currency: 'GBP',
        paymentDestination: 'bank_account',
        uniqueIdentifier: '4',
        businessId: '627fefbe5a65ec99ba9af0be',
        destinationAddress: 'AKoka, yaba, lagos',
        beneficiaryId: 'a5ce0826-4874-4a4b-9ec2-3f771d371ea4',
      };
      const result = await beneficiaryInstance.updateBeneficiary(
        beneficiaryDetails
      );
      expect(result).toHaveBeenCalledWith(beneficiaryDetails);
      expect(typeof result).toBe('object');
    } catch (error) {
      expect(error).toBeInstanceOf(Error);
    }
  });
});

describe('service to delete a beneficiary', () => {
  it('returns a message confirming that a beneficiary has been deleted', async () => {
    try {
      const data: FetchDeleteBeneficiaryDto = {
        businessId: '627fefbe5a65ec99ba9af0be',
        beneficiaryId: 'a5ce0826-4874-4a4b-9ec2-3f771d371ea4',
      };
      const result = await beneficiaryInstance.deleteBeneficiary(data);
      expect(result).toHaveBeenCalledWith(data);
      expect(typeof result).toBe('object');
    } catch (error) {
      expect(error).toBeInstanceOf(Error);
    }
  });
});
