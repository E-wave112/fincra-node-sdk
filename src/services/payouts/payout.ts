import { FincraCore } from '../../api';
import { BaseError, IEnvironment } from '../../utils';
import {
  CreatePayoutDto,
  WalletToWalletTransferDto,
  UploadPayoutDto,
} from './dto';

/**
 * The Payout module for handling the payout related operations.
 * @class Payout
 * @extends FincraCore
 * @param {string} publicKey - The public key of the merchant
 * @param {string} secretKey - The secret key of the merchant
 * @param {IEnvironment} environment - The environment of the merchant
 */
export class Payout extends FincraCore {
  constructor(
    publicKey: string,
    secretKey: string,
    environment?: IEnvironment
  ) {
    super(publicKey, secretKey, environment);
  }

  /**
   * It allows a merchant to make a payout
   * @param {CreatePayoutDto} data - CreatePayoutDto
   * @returns The response from the API, which is the transaction object.
   */
  public async createPayout(data: CreatePayoutDto) {
    try {
      const request = this.getBaseUrl();
      const response = await request.post(`/disbursements/payouts`, data);
      return response.data;
    } catch (error: any) {
      console.error(error);
      throw new BaseError({ message: error.response.data });
    }
  }

  /**
   * It allows a merchant to make a transfer to another merchant's wallet.
   * @param {WalletToWalletTransferDto} data - WalletToWalletTransferDto
   * @returns The response from the API, which is the transaction object.
   */
  public async walletToWalletTransfer(data: WalletToWalletTransferDto) {
    try {
      const request = this.getBaseUrl();
      const response = await request.post(
        `/disbursements/payouts/wallets`,
        data
      );
      return response.data;
    } catch (error: any) {
      console.error(error);
      throw new BaseError({ message: error.response.data });
    }
  }

  /**
   * It allows a merchant fetch a payout by it's transaction reference
   * @param {string} reference - The reference of the payout you want to fetch.
   * @returns The transaction object.
   */
  public async fetchPayout(reference: string) {
    try {
      const request = this.getBaseUrl();
      const response = await request.get(
        `/disbursements/payouts/reference/${reference}`
      );
      return response.data;
    } catch (error: any) {
      console.error(error);
      throw new BaseError({ message: error.response.data });
    }
  }

  /**
   * It allows a merchant to fetch a payout by customer reference
   * @param {string} creference - The customer reference of the payout you want to fetch.
   * @returns The response is an object with the following properties:
   */
  public async fetchCustomerPayout(creference: string) {
    try {
      const request = this.getBaseUrl();
      const response = await request.get(
        `/disbursements/payouts/customer-reference/${creference}`
      );
      return response.data;
    } catch (error: any) {
      console.error(error);
      throw new BaseError({ message: error.response.data });
    }
  }

  public async listBanks() {
    try {
      const request = this.getBaseUrl();
      const response = await request.get(`/core/banks?currency=NGN&country=NG`);
      return response.data;
    } catch (error: any) {
      console.error(error);
      throw new BaseError({ message: error.response.data });
    }
  }

  /**
   * this method allows a merchant to upload a payout document
   * @param {UploadPayoutDto} data - UploadPayoutDto
   * @returns The transaction object.
   */
  public async uploadTransactionDocument(data: UploadPayoutDto) {
    try {
      const request = this.getBaseUrl();
      const response = await request.post(`/payouts/documents-upload `, data);
      return response.data;
    } catch (error: any) {
      console.error(error);
      throw new BaseError({ message: error.response.data });
    }
  }
  // TODO: list payouts
}
