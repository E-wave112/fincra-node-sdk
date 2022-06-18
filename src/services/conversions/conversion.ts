import  {FincraCore}  from "../../api";
import { BaseError } from "../../utils/errors/error.base";

/**
 * The conversion module for handling the conversion related operations.
 * @class Conversion
 * @extends FincraCore
 */
export class Conversion extends FincraCore {
    constructor(publicKey:string, secretKey:string) {
        super(publicKey, secretKey);
    }

    /**
     * This function gets all the conversions for a business
     * @param {string} id - The id of the business you want to get the conversions for.
     * @returns An array of conversions
     */
    public async getBusinessConversions(id:string){
        try {
            const request = this.getBaseUrl()
            const response = await request.get(`/conversions?business=${id}`)
            console.log(response.data)
            return response.data
        } catch (error:any) {
            throw new BaseError({message: error.response.data})
        }
    }

    /**
     * It fetches a conversion by id.
     * @param {string} id - The id of the conversion you want to fetch.
     * @returns The conversion object
     */
    public async fetchConversion(id:string){
        try {
            const request = this.getBaseUrl()
            const response = await request.get(`/conversions/${id}`)
            return response.data
        } catch (error:any) {
            console.error(error)
            throw new BaseError({message: error.response.data})
        }
    }
}

// const conv = new Conversion('pk_NjI3ZmVmYmU1YTY1ZWM5OWJhOWFmMGJlOjoxMjE2NzA=', 'hzjMvDeY0dmBrDPSxZH5exnmdNc0aUXy')
// const getId = conv.fetchConversion('B-YhsUdg86mu9t')
// console.log(getId)