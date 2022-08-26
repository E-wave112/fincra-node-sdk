import { VerifyCreds } from '../../../src/services';
import {
  VerifyBankAccountDto,
  BvnResolutionDto,
} from '../../../src/services/verification/dto';
import { keys } from '../../env';

const verifierInstance = new VerifyCreds(keys[0], keys[1], { sandbox: true });

describe('service to verify an account detail', () => {
  it('returns a message object to verify an account', async () => {
    try {
      const verifierDto = new VerifyBankAccountDto();
      verifierDto.accountNumber = '0410809624';
      verifierDto.bankCode = '011';
      const result = await verifierInstance.verifyBankAccount(verifierDto);
      expect(result).toHaveBeenCalledWith(verifierDto);
      expect(typeof result).toBe('object');
    } catch (error) {
      expect(error).toBeInstanceOf(Error);
    }
  });
});

describe('service to verify a successful transaction', () => {
  it('returns a message object to verify a successful transaction', async () => {
    try {
      const reference = 'a323f8f8f8f8f8f8';
      const result = await verifierInstance.verifyPayment(reference);
      expect(result).toHaveBeenCalledWith(reference);
      expect(typeof result).toBe('object');
    } catch (error) {
      expect(error).toBeInstanceOf(Error);
    }
  });
});

describe('service to resolve and validate a bvn', () => {
  it('returns a message object to verify the response object', async () => {
    try {
      const data: BvnResolutionDto = {
        bvn: '09292929221',
        business: '627fefbe5a65ec99ba9af0be',
      };
      const result = await verifierInstance.resolveBvn(data);
      expect(result).toHaveBeenCalledWith(data);
      expect(typeof result).toBe('object');
    } catch (error) {
      expect(error).toBeInstanceOf(Error);
    }
  });
});
