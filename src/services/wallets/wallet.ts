import { FincraCore } from '../../api';
import { BaseError } from '../../utils';
// import { WalletLogsDto } from './dto';

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

  // TODO
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

  /**
   * It lists all the wallets of a business.
   * @param {string} id - The id of the business
   * @returns an array of wallet objects.
   */
  public async listWallet(id: string) {
    try {
      const request = this.getBaseUrl();
      const response = await request.get(`/wallets/?businessID=${id}`);
      console.log(response.data);
      return response.data;
    } catch (error: any) {
      console.error(error);
      throw new BaseError({ message: error.response.data });
    }
  }

  /**
   * It gets a wallet by id.
   * @param {string} id - The id of the wallet you want to retrieve.
   * @returns The wallet object
   */
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
