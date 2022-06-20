import { FincraCore } from '../../api';
import { BaseError } from '../../utils/errors/error.base';

/**
 * The Business module for handling the business related operations.
 * @class Business
 * @extends FincraCore
 */
export class Business extends FincraCore {
  constructor(publicKey: string, secretKey: string) {
    super(publicKey, secretKey);
  }

  /**
   * It gets the business id of the user.
   * @returns The business id of the merchant
   */
  public async getBusinessId() {
    try {
      const request = this.getBaseUrl();
      const response = await request.get(`/profile/merchants/me`);
      console.log(response.data);
      return response.data;
    } catch (error: any) {
      throw new BaseError({ message: error.response.data });
    }
  }
}
