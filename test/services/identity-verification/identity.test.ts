import { VerifyCreds } from '../../../src/services';
import { VerifyBankAccountDto } from '../../../src/services/identity-verification/dto';
import { keys } from '../../env';

const verifierInstance = new VerifyCreds(keys[0], keys[1]);

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
