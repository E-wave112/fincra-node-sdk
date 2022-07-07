import { Wallet } from '../../../src/services';
import { keys } from '../../env';
import { WalletLogsDto } from '../../../src/services/wallets/dto';

const walletInstance = new Wallet(keys[0], keys[1], { sandbox: true });

describe('it should list all the logs and activities of wallets performed by a business', () => {
  it('returns an array of log objects', async () => {
    try {
      const logs: WalletLogsDto = {
        business: '627fefbe5a65ec99ba9af0be',
        page: '1',
        perPage: '10',
      };
      const result = await walletInstance.listWalletLogs(logs);
      expect(result).toHaveBeenCalledWith(logs);
      expect(typeof result).toBe('object');
    } catch (error) {
      expect(error).toBeInstanceOf(Error);
    }
  });
});

describe('it should list all the wallets of a specific merchant', () => {
  it('returns an array of wallets', async () => {
    try {
      const businessId: string = '627fefbe5a65ec99ba9af0bf';
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
