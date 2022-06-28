import { ChargeBacks } from '../../../src/services';
import {
  AcceptChargeBackDto,
  RejectChargeBackDto,
} from '../../../src/services/chargebacks/dto';
import { keys } from '../../env';

const chargeBackInstance = new ChargeBacks(keys[0], keys[1]);

describe('this service returns all the chargebacks for a particular chargeback', () => {
  it('returns an array of chargeback objects', async () => {
    try {
      const businessId: string = '627fefbe5a65ec99ba9af0be';
      const result = await chargeBackInstance.listChargeBacks(businessId);
      expect(result).toHaveBeenCalledWith(businessId);
      expect(typeof result).toBe('object');
    } catch (error) {
      expect(error).toBeInstanceOf(Error);
    }
  });
});

describe('this service accepts a specific chargeback occurrence', () => {
  it('returns an object on the status of a chargeback, accepted or not', async () => {
    try {
      const acceptChargeBack = new AcceptChargeBackDto();
      acceptChargeBack.businessId = '9cc51d7f-4357-460d-bbe7-2554d3dd6986';
      acceptChargeBack.chargeBackId = '9f89eb14-7e0d-4168-baef-280549c8bd8a';

      const result = await chargeBackInstance.acceptChargeBack(
        acceptChargeBack
      );
      expect(result).toHaveBeenCalledWith(acceptChargeBack);
      expect(typeof result).toBe('object');
    } catch (error) {
      expect(error).toBeInstanceOf(Error);
    }
  });
});

describe('this service rejects a specific chargeback occurence', () => {
  it('returns an object on the status of chargeback, rejected on not', async () => {
    try {
      const rejectChargeBack = new RejectChargeBackDto();
      rejectChargeBack.businessId = '9cc51d7f-4357-460d-bbe7-2554d3dd6986';
      rejectChargeBack.chargeBackId = '08228fb8-b24f-4217-b2e5-73287b5fcb6e';
      rejectChargeBack.reason = 'suspected duplicate chargeback';

      const result = await chargeBackInstance.rejectChargeBack(
        rejectChargeBack
      );
      expect(result).toHaveBeenCalledWith(rejectChargeBack);
      expect(typeof result).toBe('object');
    } catch (error) {
      expect(error).toBeInstanceOf(Error);
    }
  });
});
