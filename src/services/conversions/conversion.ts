import  {FincraCore}  from "../../api";
import { BaseError } from "../../utils/errors/error.base";

/**
 * The conversion module for handling the conversion related operations.
 * @class Conversion
 */
export class Conversion extends FincraCore {
    constructor(publicKey:string, secretKey:string) {
        super(publicKey, secretKey);
    }

    public async getBusinessConversions(id:string){
        try {
            const request = this.getBaseUrl()
            const response = await request.get(`/conversions?business=${id}`)
            return response.data
        } catch (error:any) {
            throw new BaseError({message: error.response.data})
        }
    }

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

const conv = new Conversion('pk_NjI3ZmVmYmU1YTY1ZWM5OWJhOWFmMGJlOjoxMjE2NzA=', 'hzjMvDeY0dmBrDPSxZH5exnmdNc0aUXy')
const getId = conv.fetchConversion('B-YhsUdg86mu9t')
console.log(getId)