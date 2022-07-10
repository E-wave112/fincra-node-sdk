import { FincraCore } from '../../api';
import {
  IAxiosStruct,
  BaseError,
  IEnvironment,
  handleAxiosError,
  handleErrors,
} from '../../utils';
import { WalletLogsDto } from './dto';

/**
 * The wallet module for handling the wallet related operations.
 * @class Wallet
 * @extends FincraCore
 * @param {string} publicKey - The public key of the merchant
 * @param {string} secretKey - The secret key of the merchant
 * @param {IEnvironment} environment - The environment of the merchant
 */
export class Wallet extends FincraCore {
  constructor(
    publicKey: string,
    secretKey: string,
    environment?: IEnvironment
  ) {
    super(publicKey, secretKey, environment);
  }

  // TODO done
  /**
   * It lists all the logs and activities of wallets performed by a business
   * @param {WalletLogsDto} data - WalletLogsDto - the data to be sent to the API
   * @returns an array of wallet objects.
   */
  public async listWalletLogs(data: WalletLogsDto) {
    try {
      const reqObj: IAxiosStruct = {
        method: 'GET',
        url: `/wallets/logs`,
        data: data,
      };
      const response = await this.useGetRequest(reqObj);
      return response.data;
    } catch (error) {
      throw new BaseError({ message: handleAxiosError(error) });
    }
  }

  /**
   * It lists all the wallets of a business.
   * @param {string} id - The id of the business
   * @returns an array of wallet objects.
   */
  public async listWallet(id: string) {
    try {
      const request = this.getBaseUrl();
      const response = await request.get(`/wallets/?businessID=${id}`);
      return response.data;
    } catch (error) {
      throw new BaseError({ message: handleErrors(error) });
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
      return response.data;
    } catch (error) {
      throw new BaseError({ message: handleErrors(error) });
    }
  }
}
