import axios, { AxiosInstance } from 'axios';
import { Environment } from './utils';
import { BaseError } from './utils/errors/error.base';
import { getUrl } from './utils/url';

/**
 * @class Fincra REST api initializer
 */
export class FincraCore {
  public request;

  /**
   * This is a constructor for creating a fincra core instance
   * @param { string } publicKey merchant public key
   * @param { string } secretKey merchant secret key
   * @param { Environment } environment fincra environment
   * @returns { FincraCore } a fincra core instance
   */
  constructor(public publicKey: string, public secretKey: string, public environment?: Environment) {
    this.publicKey = publicKey;
    this.secretKey = secretKey;
    this.environment = environment;
    this.request = axios.create({
      baseURL: getUrl(environment),
      headers: {
        'api-key': secretKey,
        'Content-Type': 'application/json',
      },
    });
  }

  /**
   * It returns an AxiosInstance object for making requests to fincra api
   * @returns An AxiosInstance
   */
  public getBaseUrl(): AxiosInstance {
    try {
      return this.request;
    } catch (error: any) {
      throw new BaseError({ message: error.response.data });
    }
  }
}
