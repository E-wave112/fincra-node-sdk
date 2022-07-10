import { FincraCore } from '../../api';
import {
  BaseError,
  excludeFields,
  handleErrors,
  IEnvironment,
} from '../../utils';
import {
  CreateSubAccountDto,
  UpdateSubAccountDto,
  FetchSubAccountDto,
} from './dto';

/**
 * The subaccount module for handling the subaccounts related operations.
 * @class Subaccount
 * @extends FincraCore
 * @param {string} publicKey - The public key of the merchant
 * @param {string} secretKey - The secret key of the merchant
 * @param {IEnvironment} environment - The environment of the merchant
 */
export class Subaccount extends FincraCore {
  constructor(
    publicKey: string,
    secretKey: string,
    environment?: IEnvironment
  ) {
    super(publicKey, secretKey, environment);
  }

  /**
   * It creates a sub account for a business
   * @param {CreateSubAccountDto} data - CreateSubAccountDto
   * @returns The response from the API call, containing the sub account details
   */
  public async createSubAccount(data: CreateSubAccountDto) {
    try {
      const request = this.getBaseUrl();
      const dataBody = excludeFields(['businessId'], data);
      const response = await request.post(
        `/profile/business/${data.businessId}/sub-accounts`,
        dataBody
      );
      return response.data;
    } catch (error) {
      throw new BaseError({ message: handleErrors(error) });
    }
  }

  /**
   * It lists all the sub accounts of a business account.
   * @param {string} id - The id of the business account
   * @returns A list of sub accounts
   */
  public async listSubAccounts(id: string) {
    try {
      const request = this.getBaseUrl();
      const response = await request.get(
        `/profile/business/${id}/sub-accounts`
      );
      return response.data;
    } catch (error) {
      throw new BaseError({ message: handleErrors(error) });
    }
  }

  /**
   * It fetches a sub account from the API
   * @param {FetchSubAccountDto} data - FetchSubAccountDto
   * @returns The response data which contains the sub account details
   */
  public async fetchSubAccount(data: FetchSubAccountDto) {
    try {
      const request = this.getBaseUrl();
      const response = await request.get(
        `/profile/business/${data.businessId}/sub-accounts/${data.subAccountId}`
      );
      return response.data;
    } catch (error) {
      throw new BaseError({ message: handleErrors(error) });
    }
  }

  /**
   * It updates a sub account
   * @param {UpdateSubAccountDto} data - UpdateSubAccountDto
   * @returns The response data, containing the updated sub account details
   */
  public async updateSubAccount(data: UpdateSubAccountDto) {
    try {
      const request = this.getBaseUrl();
      const dataBody = excludeFields(['business', 'subAccountId'], data);
      const response = await request.patch(
        `/profile/business/${data.business}/sub-accounts/${data.subAccountId}`,
        dataBody
      );
      return response.data;
    } catch (error) {
      throw new BaseError({ message: handleErrors(error) });
    }
  }
}
