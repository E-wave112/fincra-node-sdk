import axios, { AxiosInstance } from "axios";
import { BaseError } from "./utils/errors/error.base";
import { getUrl } from "./utils/url";

/**
 * @class Fincra REST api initializer
 */
export class FincraCore {
    publicKey;
    secretKey;
    request;
    /**
     * This is a constructor for creating a fincra core instance
     * @param { string } publicKey user public key
     * @param { string } secretKey user secret key
     * @returns { FincraCore } a fincra core instance
     */
    constructor(publicKey:string, secretKey:string){
        this.publicKey = publicKey
        this.secretKey = secretKey
        this.request = axios.create({
            baseURL: getUrl(publicKey),
            headers: {
                'api-key': secretKey,
                'Content-Type': 'application/json'
            }
        })
    }
    /**
     * 
     * @returns { AxiosInstance } an axios instance for processing requests
     */
    getBaseUrl(): AxiosInstance{
        try {
            return this.request;
        } catch (error:any) {
            throw new BaseError({message: error.response.data})
        }
    }
    
}

// export default new FincraCore('pk_NjI3ZmVmYmU1YTY1ZWM5OWJhOWFmMGJlOjoxMjE2NzA=', 'hzjMvDeY0dmBrDPSxZH5exnmdNc0aUXy')