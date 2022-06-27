import axios, { AxiosInstance } from 'axios';
import { BaseError } from './utils/errors/error.base';
import { getUrl } from './utils/url';

/**
 * @class Fincra REST api initializer
 */
export class FincraCore {
  publicKey;
  secretKey;
  request;
  /**
   * This is a constructor for creating a fincra core instance
   * @param { string } publicKey merchant public key
   * @param { string } secretKey merchant secret key
   * @returns { FincraCore } a fincra core instance
   */
  constructor(publicKey: string, secretKey: string) {
    this.publicKey = publicKey;
    this.secretKey = secretKey;
    this.request = axios.create({
      baseURL: getUrl(publicKey),
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
