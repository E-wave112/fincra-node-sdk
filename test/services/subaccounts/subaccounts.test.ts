import { keys } from '../../env';
import { Subaccount } from '../../../src/services';
import {
  CreateSubAccountDto,
  FetchSubAccountDto,
  UpdateSubAccountDto,
} from '../../../src/services/subaccounts/dto';

const subaccountInstance = new Subaccount(keys[0], keys[1]);

describe('service to create a subaccount', () => {
  it('should return a subaccount object', async () => {
    try {
      const subaccount: CreateSubAccountDto = {
        name: 'Edmond',
        businessId: '627fefbe5a65ec99ba9af0be',
        email: 'edmond@kirsch.com',
        mobile: '07081927814',
        country: 'NG',
      };

      const result = await subaccountInstance.createSubAccount(subaccount);
      expect(result).toHaveBeenCalledWith(subaccount);
      expect(typeof result).toBe('object');
    } catch (error) {
      expect(error).toBeInstanceOf(Error);
    }
  });
});

describe('service to fetch a subaccount', () => {
  it('should return a subaccount object', async () => {
    try {
      const subaccount: FetchSubAccountDto = {
        businessId: '627fefbe5a65ec99ba9af0be',
        subAccountId: '62ba8f973acaf73df03238aa',
      };

      const result = await subaccountInstance.fetchSubAccount(subaccount);
      expect(result).toHaveBeenCalledWith(subaccount);
      expect(typeof result).toBe('object');
    } catch (error) {
      expect(error).toBeInstanceOf(Error);
    }
  });
});

describe('service to update a subaccount', () => {
  it('should return a subaccount object', async () => {
    try {
      const subaccount: UpdateSubAccountDto = {
        business: '627fefbe5a65ec99ba9af0be',
        subAccountId: '62ba8f973acaf73df03238aa',
        name: 'Eddie',
        email: 'edmond@kirsch.com',
      };
      const result = await subaccountInstance.updateSubAccount(subaccount);
      expect(result).toHaveBeenCalledWith(subaccount);
      expect(typeof result).toBe('object');
    } catch (error) {
      expect(error).toBeInstanceOf(Error);
    }
  });
});

describe('service to list subaccounts linked to a business', () => {
  it('should return a list of subaccount objects', async () => {
    try {
      const businessId = '627fefbe5a65ec99ba9af0be';
      const result = await subaccountInstance.listSubAccounts(businessId);
      expect(result).toHaveBeenCalledWith(businessId);
      expect(typeof result).toBe('object');
    } catch (error) {
      expect(error).toBeInstanceOf(Error);
    }
  });
});
