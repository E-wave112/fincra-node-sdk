import { FincraCore } from '../../api';
import { BaseError, Environment } from '../../utils';
import {
  FetchCollectionVirtualAccountDto,
  ListCollectionMainVirtualAccountDto,
  PayWithTransferDto,
} from './dto';

/**
 * The Collection module for handling the collection related operations.
 * @class Collection
 * @extends FincraCore
 * @param {string} publicKey - The public key of the merchant
 * @param {string} secretKey - The secret key of the merchant
 * @param {Environment} environment - The environment of the merchant
 **/
export class Collection extends FincraCore {
  constructor(publicKey: string, secretKey: string, environment?: Environment) {
    super(publicKey, secretKey, environment);
  }

  public async payWithTransfer(data: PayWithTransferDto) {
    try {
      const request = this.getBaseUrl();
      const response = await request.post(
        `/profile/virtual-accounts/transfer`,
        data
      );
      return response.data;
    } catch (error: any) {
      console.error(error);
      throw new BaseError({ message: error.response.data });
    }
  }

  public async listCollectionMain(data: ListCollectionMainVirtualAccountDto) {
    try {
      const request = this.getBaseUrl();
      const response = await request.get(
        `/wallets/topups?business=${data.business}&reference=${data.reference}&page=${data.page}&perPage=${data.perPage}`
      );
      return response.data;
    } catch (error: any) {
      console.error(error);
      throw new BaseError({ message: error.response.data });
    }
  }

  public async fetchCollectionAddition(data: FetchCollectionVirtualAccountDto) {
    try {
      const request = this.getBaseUrl();
      const response = await request.get(
        `/collections/reference/${data.reference}?business=${data.business}`
      );
      return response.data;
    } catch (error: any) {
      console.error(error);
      throw new BaseError({ message: error.response.data });
    }
  }

  // TODO: List collections for additional virtual accounts
}
