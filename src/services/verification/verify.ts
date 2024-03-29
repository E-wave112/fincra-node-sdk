import { FincraCore } from '../../api';
import { BaseError, handleErrors, IEnvironment } from '../../utils';
import { VerifyBankAccountDto, BvnResolutionDto } from './dto';

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
      return response.data;
    } catch (error) {
      throw new BaseError({ message: handleErrors(error) });
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
      return response.data;
    } catch (error) {
      throw new BaseError({ message: handleErrors(error) });
    }
  }

  /**
   * This methods helps resolves and validates a bvn
   * @param {BvnResolutionDto} data - The data object that will be sent to the API.
   * @returns The user details linked to the bvn
   */
  public async resolveBvn(data: BvnResolutionDto) {
    try {
      const request = this.getBaseUrl();
      const response = await request.post(`/core/bvn-verification`, data);
      return response.data;
    } catch (error) {
      throw new BaseError({ message: handleErrors(error) });
    }
  }
}
