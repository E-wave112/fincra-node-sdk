import { FincraCore } from '../../api';
import { BaseError } from '../../utils/errors/error.base';
import { VerifyBankAccountDto } from './dto';

/**
 * The verify module for handling the verification and kyc related operations.
 * @class VerifyBankAccount
 * @extends FincraCore
 * @param {string} publicKey - The public key of the merchant
 * @param {string} secretKey - The secret key of the merchant
 *
 */
export class VerifyBankAccount extends FincraCore {
  constructor(publicKey: string, secretKey: string) {
    super(publicKey, secretKey);
  }

  /**
   * It verifies a bank account
   * @param {VerifyBankAccountDto} data - The data object that will be sent to the API.
   * @returns The response is a JSON object with the following properties:
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
}
