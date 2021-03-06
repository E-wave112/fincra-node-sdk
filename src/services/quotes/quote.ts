import { FincraCore } from '../../api';
import { BaseError, handleErrors, IEnvironment } from '../../utils';
import { CreateQuoteDto } from './dto';

/**
 * The quote module for handling the quote related operations.
 * @class Quote
 * @extends FincraCore
 * @param {string} publicKey - The public key of the merchant
 * @param {string} secretKey - The secret key of the merchant
 * @param {IEnvironment} environment - The environment of the merchant
 *
 */
export class Quote extends FincraCore {
  constructor(
    publicKey: string,
    secretKey: string,
    environment?: IEnvironment
  ) {
    super(publicKey, secretKey, environment);
  }

  /**
   * It takes in a CreateQuoteDto object, makes a post request to the quotes endpoint, and returns the
   * response data
   * @param {CreateQuoteDto} data - The data to be sent to the server.
   * @returns The response from the API; a quote object
   */
  public async createQuote(data: CreateQuoteDto) {
    try {
      const request = this.getBaseUrl();
      const response = await request.post(`/quotes/generate`, data);
      return response.data;
    } catch (error) {
      throw new BaseError({ message: handleErrors(error) });
    }
  }
}
