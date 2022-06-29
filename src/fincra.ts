import sanitizedConfig from './config/envconfig';
import {
  Conversion,
  Business,
  ChargeBacks,
  Quote,
  VerifyCreds,
  Wallet,
  Payout,
  Subaccount,
} from './services';

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
  constructor(public publicKey: string, public secretKey: string) {
    this.publicKey = publicKey;
    this.secretKey = secretKey;
  }
  public convert = new Conversion(this.publicKey, this.secretKey);
  public business = new Business(this.publicKey, this.secretKey);
  public chargebacks = new ChargeBacks(this.publicKey, this.secretKey);
  public quote = new Quote(this.publicKey, this.secretKey);
  public verify = new VerifyCreds(this.publicKey, this.secretKey);
  public wallet = new Wallet(this.publicKey, this.secretKey);
  public payouts = new Payout(this.publicKey, this.secretKey);
  public subacct = new Subaccount(this.publicKey, this.secretKey);
}

// const fin = new Fincra(
//   'pk_NjI3ZmVmYmU1YTY1ZWM5OWJhOWFmMGJlOjoxMjE2NzA=',
//   'hzjMvDeY0dmBrDPSxZH5exnmdNc0aUXy'
// );

const fin = new Fincra(
  sanitizedConfig.FINCRA_PUBLIC_KEY,
  sanitizedConfig.FINCRA_SECRET_KEY
);

// let result = fin.convert.getBusinessConversions("627fefbe5a65ec99ba9af0be")
// console.log(result)

let result = fin.wallet.listWallet('627fefbe5a65ec99ba9af0be');
console.log(result);
