import { FincraCore } from '../../api';
import { BaseError, IEnvironment } from '../../utils';
import { VerifyBankAccountDto } from './dto';

/**
 * The verify module for handling the verification and kyc related operations.
 * @class VerifyBankAccount
 * @extends FincraCore
 * @param {string} publicKey - The public key of the merchant
 * @param {string} secretKey - The secret key of the merchant
 * @param {IEnvironment} environment - The environment of the merchant
 *
 */
export class VerifyCreds extends FincraCore {
  constructor(
    publicKey: string,
    secretKey: string,
    environment?: IEnvironment
  ) {
    super(publicKey, secretKey, environment);
  }

  /**
   * It verifies a bank account
   * @param {VerifyBankAccountDto} data - The data object that will be sent to the API.
   * @returns The bank account object.
   */
  public async verifyBankAccount(data: VerifyBankAccountDto) {
    try {
      const request = this.getBaseUrl();
      const response = await request.post(`/core/accounts/resolve`, data);
      console.log(response.data);
      return response.data;
    } catch (error: any) {
      throw new BaseError({ message: error.response.data });
    }
  }
  /**
   * It verifies a successful transaction
   * @param reference - The reference of the payout you want to fetch.
   * @returns The transaction object.
   */
  public async verifyPayment(reference: string) {
    try {
      const request = this.getBaseUrl();
      const response = await request.get(
        `/checkout/payments/merchant-reference/${reference}`
      );
      console.log(response.data);
      return response.data;
    } catch (error: any) {
      console.error(error);
      throw new BaseError({ message: error.response.data });
    }
  }
}
