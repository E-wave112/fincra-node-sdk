import  {FincraCore}  from "../../api";


export class Conversion extends FincraCore {
    constructor(publicKey:string, secretKey:string) {
        super(publicKey, secretKey);
    }

    public async getConversion(id:string){
        try {
            const request = this.getBaseUrl()
            return await request.post('/conversions/business', {
                businessId: id
            })
        } catch (error) {
            console.error(error)
            throw error
        }
    }
}

const conv = new Conversion('pk_NjI3ZmVmYmU1YTY1ZWM5OWJhOWFmMGJlOjoxMjE2NzA=', 'hzjMvDeY0dmBrDPSxZH5exnmdNc0aUXy')
const getId = conv.getConversion('B-YhsUdg86mu9t')
console.log(getId)