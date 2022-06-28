import { FincraCore } from '../../api';
import { BaseError } from '../../utils';
import { CreateConversionDto, FetchConversionDto } from './dto';

/**
 * The conversion module for handling the conversion related operations.
 * @class Conversion
 * @extends FincraCore
 * @param {string} publicKey - The public key of the merchant
 * @param {string} secretKey - The secret key of the merchant
 */
export class Conversion extends FincraCore {
  constructor(publicKey: string, secretKey: string) {
    super(publicKey, secretKey);
  }

  /**
   * This function gets all the conversions for a business
   * @param {string} id - The id of the business you want to get the conversions for.
   * @returns An array of conversions
   */
  public async getBusinessConversions(id: string) {
    try {
      const request = this.getBaseUrl();
      const response = await request.get(`/conversions?business=${id}`);
      return response.data;
    } catch (error: any) {
      throw new BaseError({ message: error.response.data });
    }
  }

  /**
   * It fetches a conversion by id.
   * @param {FetchConversionDto} data - FetchConversionDto
   * @returns The conversion object
   */
  public async fetchConversion(data: FetchConversionDto) {
    try {
      const request = this.getBaseUrl();
      const response = await request.get(
        `/conversions/${data.conversionId}?business=${data.business}`
      );
      return response.data;
    } catch (error: any) {
      console.error(error);
      throw new BaseError({ message: error.response.data });
    }
  }

  /**
   * It creates a conversion for a business.
   * @param {CreateConversionDto} conversion - CreateConversionDto
   * @returns The response from the API which contains the conversion object
   */
  public async createConversion(conversion: CreateConversionDto) {
    try {
      const request = this.getBaseUrl();
      const response = await request.post('/conversions/initiate', conversion);
      return response.data;
    } catch (error: any) {
      throw new BaseError({ message: error.response.data });
    }
  }
}
