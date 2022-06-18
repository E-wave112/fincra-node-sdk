import { FincraCore } from '../../api';
import { BaseError } from '../../utils/errors/error.base';
import { WalletLogsDto } from './dto';

/**
 * The wallet module for handling the wallet related operations.
 * @class Wallet
 * @extends FincraCore
 * @param {string} publicKey - The public key of the merchant
 * @param {string} secretKey - The secret key of the merchant
 */
export class Wallet extends FincraCore {
  constructor(publicKey: string, secretKey: string) {
    super(publicKey, secretKey);
  }

  // public async listWalletLogs(data:WalletLogsDto){
  //     try {
  //         const request = this.getBaseUrl()
  //         const response = await request.get(`/wallets/logs`, data)
  //         console.log(response.data)
  //         return response.data
  //     } catch (error:any) {
  //         throw new BaseError({message: error.response.data})
  //     }
  // }

  public async listWallet(id: string) {
    try {
      const request = this.getBaseUrl();
      const response = await request.get(`/wallets/?businessID=${id}`);
      console.log(response.data);
      return response.data;
    } catch (error: any) {
      throw new BaseError({ message: error.response.data });
    }
  }

  public async getWallet(id: string) {
    try {
      const request = this.getBaseUrl();
      const response = await request.get(`/wallets/${id}`);
      console.log(response.data);
      return response.data;
    } catch (error: any) {
      throw new BaseError({ message: error.response.data });
    }
  }
}
