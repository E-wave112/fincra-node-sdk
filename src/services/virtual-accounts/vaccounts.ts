import { FincraCore } from '../../api';
import {
  IAxiosStruct,
  BaseError,
  IEnvironment,
  excludeFields,
  handleAxiosError,
  handleErrors,
} from '../../utils';
import {
  CreateVirtualAccountDto,
  CreateIndividualSubAccountDto,
  CreateInstantApprovalVirtualAccountDto,
  CreateCorporateVirtualAccountDto,
  ListSubVirtualAccountsDto,
  ListMerchantVirtualAccountsDto,
} from './dto';

/**
 * The virtual account module for handling the virtual account related operations.
 * @class VirtualAccount
 * @extends FincraCore
 * @param {string} publicKey - The public key of the merchant
 * @param {string} secretKey - The secret key of the merchant
 * @param {IEnvironment} environment - The environment of the merchant
 **/
export class VirtualAccount extends FincraCore {
  constructor(
    publicKey: string,
    secretKey: string,
    environment?: IEnvironment
  ) {
    super(publicKey, secretKey, environment);
  }
  /**
   * this method creates a virtual account
   * @param { CreateVirtualAccountDto} data - the data to be sent to the server
   * @returns a virtual account object
   */
  public async createVirtualAccount(data: CreateVirtualAccountDto) {
    try {
      const request = this.getBaseUrl();
      const response = await request.post(
        '/profile/virtual-accounts/requests',
        data
      );
      return response.data;
    } catch (error) {
      throw new BaseError({ message: handleErrors(error) });
    }
  }
  /**
   * this method creates an individual sub virtual account
   * @param {CreateIndividualSubAccountDto} data - the data to be sent to the server
   * @returns a virtual account object
   */
  public async createIndividualSubVirtualAccount(
    data: CreateIndividualSubAccountDto
  ) {
    try {
      const request = this.getBaseUrl();
      const dataBody = excludeFields(['businessId', 'subAccountId'], data);
      const response = await request.post(
        `/profile/virtual-accounts/business/${data.businessId}/sub-accounts/${data.subAccountId}/requests`,
        dataBody
      );
      return response.data;
    } catch (error) {
      throw new BaseError({ message: handleErrors(error) });
    }
  }

  /**
   * this method creates an instant approval virtual account
   * @param {CreateInstantApprovalVirtualAccountDto} data - the data to be sent to the server
   * @returns a virtual account object
   */
  public async createInstantApprovalVirtualAccount(
    data: CreateInstantApprovalVirtualAccountDto
  ) {
    try {
      const request = this.getBaseUrl();
      const dataBody = excludeFields(['businessId', 'subAccountId'], data);
      const response = await request.post(
        `/profile/virtual-accounts/business/${data.businessId}/sub-accounts/${data.subAccountId}/requests/auto`,
        dataBody
      );
      return response.data;
    } catch (error) {
      throw new BaseError({ message: handleErrors(error) });
    }
  }
  /**
   * this method creates a corporate virtual account
   * @param {CreateCorporateVirtualAccountDto} data - the data to be sent to the server
   * @returns a virtual account object
   */
  public async createCorporateSubVirtualAccount(
    data: CreateCorporateVirtualAccountDto
  ) {
    try {
      const request = this.getBaseUrl();
      const dataBody = excludeFields(['businessId', 'subAccountId'], data);
      const response = await request.post(
        `/profile/virtual-accounts/business/${data.businessId}/sub-accounts/${data.subAccountId}/requests`,
        dataBody
      );
      return response.data;
    } catch (error) {
      throw new BaseError({ message: handleErrors(error) });
    }
  }
  /**
   * this method lists all the requests for a virtual account made by the merchant
   * @returns a list of virtual account requests
   */
  public async listVirtualAccountRequests() {
    try {
      const request = this.getBaseUrl();
      const response = await request.get('/profile/virtual-accounts/requests');
      return response.data;
    } catch (error) {
      throw new BaseError({ message: handleErrors(error) });
    }
  }

  /**
   * this method fetches a virtual account by its currency
   * @param {string} currency - the currency of the virtual account
   * @returns a virtual account object
   */
  public async fetchVirtualAccountByCurrency(currency: string) {
    try {
      const request = this.getBaseUrl();
      const response = await request.get(
        `/profile/virtual-accounts?currency=${currency}`
      );
      return response.data;
    } catch (error) {
      throw new BaseError({ message: handleErrors(error) });
    }
  }

  /**
   * this method lists all the virtual accounts for a sub account
   * @param {ListSubVirtualAccountsDto} data - the data to be sent to the server
   * @returns a list of virtual account objects
   */
  public async listSubVirtualAccounts(data: ListSubVirtualAccountsDto) {
    try {
      const dataBody = excludeFields(['businessId', 'subAccountId'], data);
      const requestObj: IAxiosStruct = {
        method: 'GET',
        url: `/profile/virtual-accounts/business/${data.businessId}/sub-accounts/${data.subAccountId}`,
        data: dataBody,
      };
      const response = await this.useGetRequest(requestObj);
      return response.data;
    } catch (error) {
      throw new BaseError({ message: handleAxiosError(error) });
    }
  }
  /**
   * this method fetches a single virtual account by its id
   * @param {string} virtualAccountId - the id of the virtual account
   * @returns a virtual account object
   */
  public async fetchSingleVirtualAccount(virtualAccountId: string) {
    try {
      const request = this.getBaseUrl();
      const response = await request.get(
        `/profile/virtual-accounts/${virtualAccountId}`
      );
      return response.data;
    } catch (error) {
      throw new BaseError({ message: handleErrors(error) });
    }
  }

  //TODO: List merchant virtual accounts done
  /**
   * this method lists all the virtual accounts for a merchant
   * @param {ListMerchantVirtualAccountsDto} data - the data to be sent to the server
   * @returns a list of virtual account objects
   */
  public async listMerchantVirtual(data: ListMerchantVirtualAccountsDto) {
    try {
      const requestObj: IAxiosStruct = {
        method: 'GET',
        url: `/profile/virtual-accounts`,
        data,
      };
      const response = await this.useGetRequest(requestObj);
      return response.data;
    } catch (error) {
      throw new BaseError({ message: handleAxiosError(error) });
    }
  }
}
