// import { FincraCore } from "./api";
import { Conversion } from "./services/conversions/conversion";
// export const Fincra = function (publicKey:string, privateKey:string){

//     this.convert = new Conversion(publicKey, privateKey)
// }

export class Fincra {
    constructor(
        public publicKey:string, 
        public secretKey:string
        ){
        this.publicKey = publicKey;
        this.secretKey = secretKey;
    }
    public convert = new Conversion(this.publicKey, this.secretKey)
}

const fin = new Fincra("pk_NjI3ZmVmYmU1YTY1ZWM5OWJhOWFmMGJlOjoxMjE2NzA=", "hzjMvDeY0dmBrDPSxZH5exnmdNc0aUXy")

console.log(fin.convert.fetchConversion("B-YhsUdg86mu9t"))
