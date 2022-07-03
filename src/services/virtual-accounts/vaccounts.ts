import { FincraCore } from '../../api';
import {
  AxiosStruct,
  BaseError,
  Environment,
  excludeFields,
} from '../../utils';
import {
  CreateVirtualAccountDto,
  CreateIndividualSubAccountDto,
  CreateInstantApprovalVirtualAccountDto,
  CreateCorporateVirtualAccountDto,
  ListSubVirtualAccountsDto,
} from './dto';

/**
 * The virtual account module for handling the virtual account related operations.
 * @class VirtualAccount
 * @extends FincraCore
 * @param {string} publicKey - The public key of the merchant
 * @param {string} secretKey - The secret key of the merchant
 * @param {Environment} environment - The environment of the merchant
 **/
export class VirtualAccount extends FincraCore {
  constructor(publicKey: string, secretKey: string, environment?: Environment) {
    super(publicKey, secretKey, environment);
  }

  public async createVirtualAccount(data: CreateVirtualAccountDto) {
    try {
      const request = this.getBaseUrl();
      const response = await request.post(
        '/profile/virtual-accounts/requests',
        data
      );
      console.log(response.data);
      return response.data;
    } catch (error: any) {
      console.error(error);
      throw new BaseError({ message: error.response.data });
    }
  }

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
      console.log(response.data);
      return response.data;
    } catch (error: any) {
      console.error(error);
      throw new BaseError({ message: error.response.data });
    }
  }

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
      console.log(response.data);
      return response.data;
    } catch (error: any) {
      console.error(error);
      throw new BaseError({ message: error.response.data });
    }
  }

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
      console.log(response.data);
      return response.data;
    } catch (error: any) {
      console.error(error);
      throw new BaseError({ message: error.response.data });
    }
  }

  public async listVirtualAccountRequests() {
    try {
      const request = this.getBaseUrl();
      const response = await request.get('/profile/virtual-accounts/requests');
      console.log(response.data);
      return response.data;
    } catch (error: any) {
      console.error(error);
      throw new BaseError({ message: error.response.data });
    }
  }

  public async fetchVirtualAccountByCurrency(currency: string) {
    try {
      const request = this.getBaseUrl();
      const response = await request.get(
        `/profile/virtual-accounts?currency=${currency}`
      );
      console.log(response.data);
      return response.data;
    } catch (error: any) {
      console.error(error);
      throw new BaseError({ message: error.response.data });
    }
  }

  public async listSubVirtualAccounts(data: ListSubVirtualAccountsDto) {
    try {
      const dataBody = excludeFields(['businessId', 'subAccountId'], data);
      const requestObj: AxiosStruct = {
        method: 'GET',
        url: `/profile/virtual-accounts/business/${data.businessId}/sub-accounts/${data.subAccountId}`,
        data: dataBody,
      };
      const response = await this.useGetRequest(requestObj);
      console.log(response.data);
      return response.data;
    } catch (error: any) {
      console.error(error);
      throw new BaseError({ message: error.response.data });
    }
  }

  public async fetchSingleVirtualAccount(virtualAccountId: string) {
    try {
      const request = this.getBaseUrl();
      const response = await request.get(
        `/profile/virtual-accounts/${virtualAccountId}`
      );
      console.log(response.data);
      return response.data;
    } catch (error: any) {
      console.error(error);
      throw new BaseError({ message: error.response.data });
    }
  }

  //TODO: List merchant virtual accounts
}
