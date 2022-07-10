import { FincraCore } from '../../api';
import { BaseError, handleErrors, IEnvironment } from '../../utils';

/**
 * The Business module for handling the business related operations.
 * @class Business
 * @extends FincraCore
 * @param {string} publicKey - The public key of the merchant
 * @param {string} secretKey - The secret key of the merchant
 * @param {IEnvironment} environment - The environment of the merchant
 */
export class Business extends FincraCore {
  constructor(
    publicKey: string,
    secretKey: string,
    environment?: IEnvironment
  ) {
    super(publicKey, secretKey, environment);
  }

  /**
   * It gets the business id of the merchant.
   * @returns The business id of the merchant
   */
  public async getBusinessId() {
    try {
      const request = this.getBaseUrl();
      const response = await request.get(`/profile/merchants/me`);
      return response.data;
    } catch (error) {
      throw new BaseError({ message: handleErrors(error) });
    }
  }
}
