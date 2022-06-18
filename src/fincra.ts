import { Conversion } from "./services/conversions/conversion";
import { Business } from "./services/business-id/business";
import { ChargeBacks } from "./services/chargebacks/chargeback";
import { Quote } from "./services/quotes/quote";
import { VerifyBankAccount } from "./services/identity-verification/verify-bank";
import { Wallet } from "./services/wallets/wallet";

/**
 * The Fincra class is the main class that is used to access the other classes
 * @class Fincra
 * @param {string} publicKey - The public key of the merchant
 * @param {string} privateKey - The private key of the merchant
 * @returns The Fincra class
 * @example
 * const fincra = new Fincra('pk_NjI3ZmVmYmU1YTY1ZWM5OWJhOWFmMGJlOjoxMjE2NzA=', 'hzjMvDeY0dmBrDPSxZH5exnmdNc0aUXy')
 **/
export class Fincra {
    constructor(
        public publicKey:string, 
        public secretKey:string
        ){
        this.publicKey = publicKey;
        this.secretKey = secretKey;
    }
    public convert = new Conversion(this.publicKey, this.secretKey)
    public business = new Business(this.publicKey, this.secretKey)
    public chargebacks = new ChargeBacks(this.publicKey, this.secretKey)
    public quote = new Quote(this.publicKey, this.secretKey)
    public verify = new VerifyBankAccount(this.publicKey, this.secretKey)
    public wallet = new Wallet(this.publicKey, this.secretKey)
}

const fin = new Fincra("pk_NjI3ZmVmYmU1YTY1ZWM5OWJhOWFmMGJlOjoxMjE2NzA=", "hzjMvDeY0dmBrDPSxZH5exnmdNc0aUXy")

// let result = fin.convert.getBusinessConversions("627fefbe5a65ec99ba9af0be")
// console.log(result)

let result = fin.chargebacks.listChargeBacks("627fefbe5a65ec99ba9af0be")
console.log(result)
// console.log(fin.business.getBusinessId())
