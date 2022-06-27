import { Wallet } from '../../../src/services';
import { keys } from '../../env';

const walletInstance = new Wallet(keys[0], keys[1]);

describe('it should list all the wallets of a specific merchant', () => {
  it('returns an array of wallets', async () => {
    try {
      const businessId: string = '92223bba-6873-4b99-996c-621b1c78ad72';
      const result = await walletInstance.listWallet(businessId);
      expect(result).toHaveBeenCalledWith(businessId);
      expect(typeof result).toBe('object');
    } catch (error) {
      expect(error).toBeInstanceOf(Error);
    }
  });
});

describe('it should return a wallet object details', () => {
  it('returns a wallet object', async () => {
    try {
      const walletId: string = '6b1c53ca-4f58-41f0-9fe3-4dd28a81789d';
      const result = await walletInstance.getWallet(walletId);
      expect(result).toHaveBeenCalledWith(walletId);
      expect(typeof result).toBe('object');
    } catch (error) {
      expect(error).toBeInstanceOf(Error);
    }
  });
});
