import { FincraCore } from '../../api';
import { BaseError, handleErrors, IEnvironment } from '../../utils';
import { CreateConversionDto } from './dto';

/**
 * The conversion module for handling the conversion related operations.
 * @class Conversion
 * @extends FincraCore
 * @param {string} publicKey - The public key of the merchant
 * @param {string} secretKey - The secret key of the merchant
 * @param {IEnvironment} environment - The environment of the merchant
 */
export class Conversion extends FincraCore {
  constructor(
    publicKey: string,
    secretKey: string,
    environment?: IEnvironment
  ) {
    super(publicKey, secretKey, environment);
  }

  /**
   * This function gets all the conversions for a business
   * @param {string} id - The id of the business you want to get the conversions for.
   * @returns An array of conversions objects
   */
  public async getBusinessConversions(id: string) {
    try {
      const request = this.getBaseUrl();
      const response = await request.get(`/conversions?business=${id}`);
      return response.data;
    } catch (error) {
      throw new BaseError({ message: handleErrors(error) });
    }
  }

  /**
   * It fetches a conversion by id.
   * @param {string} conversionId - FetchConversionDto
   * @returns The conversion object
   */
  public async fetchConversion(conversionId: string) {
    try {
      const request = this.getBaseUrl();
      const response = await request.get(
        `/conversions/reference/${conversionId}`
      );
      return response.data;
    } catch (error) {
      throw new BaseError({ message: handleErrors(error) });
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
    } catch (error) {
      throw new BaseError({ message: handleErrors(error) });
    }
  }
}
