import {
  Conversion,
  Business,
  ChargeBacks,
  Quote,
  VerifyCreds,
  Wallet,
  Payout,
  Subaccount,
  Collection,
  VirtualAccount,
  Beneficiary,
} from './services';
import { IEnvironment } from './utils';

/**
 * The Fincra class is the main class that is used to access the other classes
 * @class Fincra
 * @param {string} publicKey - The public key of the merchant
 * @param {string} privateKey - The private key of the merchant
 * @param {IEnvironment} environment - The environment to use
 * @returns The Fincra class
 * @example
 * const fincra = new Fincra('pk_NjI3ZmVmYmU1YTY1ZWM5OWJhOWFmMGJlOjoxMjE2NzA=', 'hzjMvDeY0dmBrDPSxZH5exnmdNc0aUXy', {sandbox: true});
 **/
export class Fincra {
  constructor(
    public publicKey: string,
    public secretKey: string,
    public environment?: IEnvironment
  ) {
    this.publicKey = publicKey;
    this.secretKey = secretKey;
    this.environment = environment;
  }
  public conversion = new Conversion(
    this.publicKey,
    this.secretKey,
    this.environment
  );
  public beneficiary = new Beneficiary(
    this.publicKey,
    this.secretKey,
    this.environment
  );
  public business = new Business(
    this.publicKey,
    this.secretKey,
    this.environment
  );
  public chargebacks = new ChargeBacks(
    this.publicKey,
    this.secretKey,
    this.environment
  );
  public quote = new Quote(this.publicKey, this.secretKey, this.environment);
  public verify = new VerifyCreds(
    this.publicKey,
    this.secretKey,
    this.environment
  );
  public wallet = new Wallet(this.publicKey, this.secretKey, this.environment);
  public payouts = new Payout(this.publicKey, this.secretKey, this.environment);
  public subacct = new Subaccount(
    this.publicKey,
    this.secretKey,
    this.environment
  );
  public collection = new Collection(
    this.publicKey,
    this.secretKey,
    this.environment
  );
  public virtualAccount = new VirtualAccount(
    this.publicKey,
    this.secretKey,
    this.environment
  );
}
