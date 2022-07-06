import axios, { AxiosInstance } from 'axios';
import {
  IAxiosStruct,
  IEnvironment,
  getUrl,
  BaseError,
  excludeFields,
} from './utils';

/**
 * @class Fincra REST api initializer
 */
export class FincraCore {
  public request;

  /**
   * This is a constructor for creating a fincra core instance
   * @param { string } publicKey merchant public key
   * @param { string } secretKey merchant secret key
   * @param { IEnvironment } environment fincra environment
   * @returns { FincraCore } a fincra core instance
   */
  constructor(
    public publicKey: string,
    public secretKey: string,
    public environment?: IEnvironment
  ) {
    this.publicKey = publicKey;
    this.secretKey = secretKey;
    this.environment = environment;
    this.request = axios.create({
      baseURL: getUrl(environment),
      headers: {
        'api-key': secretKey,
        Accept: 'application/json',
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

  public async useGetRequest(req: IAxiosStruct) {
    try {
      const customHeaders = excludeFields(
        ['common', 'delete', 'get', 'head', 'put', 'patch', 'post'],
        this.request.defaults.headers
      );

      const getUrl = this.request.defaults.baseURL;
      const requestInstance = await axios.request({
        url: `${getUrl}${req.url}`,
        method: req.method,
        headers: customHeaders,
        data: req.data,
      });
      return requestInstance;
    } catch (error: any) {
      throw new BaseError({ message: error.response.data });
    }
  }
}
