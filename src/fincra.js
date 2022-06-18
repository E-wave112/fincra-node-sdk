"use strict";
exports.__esModule = true;
exports.Fincra = void 0;
var conversion_1 = require("./services/conversions/conversion");
var business_1 = require("./services/business-id/business");
var chargeback_1 = require("./services/chargebacks/chargeback");
var quote_1 = require("./services/quotes/quote");
var verify_bank_1 = require("./services/identity-verification/verify-bank");
var wallet_1 = require("./services/wallets/wallet");
/**
 * The Fincra class is the main class that is used to access the other classes
 * @class Fincra
 * @param {string} publicKey - The public key of the merchant
 * @param {string} privateKey - The private key of the merchant
 * @returns The Fincra class
 * @example
 * const fincra = new Fincra('pk_NjI3ZmVmYmU1YTY1ZWM5OWJhOWFmMGJlOjoxMjE2NzA=', 'hzjMvDeY0dmBrDPSxZH5exnmdNc0aUXy')
 **/
var Fincra = /** @class */ (function () {
    function Fincra(publicKey, secretKey) {
        this.publicKey = publicKey;
        this.secretKey = secretKey;
        this.convert = new conversion_1.Conversion(this.publicKey, this.secretKey);
        this.business = new business_1.Business(this.publicKey, this.secretKey);
        this.chargebacks = new chargeback_1.ChargeBacks(this.publicKey, this.secretKey);
        this.quote = new quote_1.Quote(this.publicKey, this.secretKey);
        this.verify = new verify_bank_1.VerifyBankAccount(this.publicKey, this.secretKey);
        this.wallet = new wallet_1.Wallet(this.publicKey, this.secretKey);
        this.publicKey = publicKey;
        this.secretKey = secretKey;
    }
    return Fincra;
}());
exports.Fincra = Fincra;
var fin = new Fincra('pk_NjI3ZmVmYmU1YTY1ZWM5OWJhOWFmMGJlOjoxMjE2NzA=', 'hzjMvDeY0dmBrDPSxZH5exnmdNc0aUXy');
// let result = fin.convert.getBusinessConversions("627fefbe5a65ec99ba9af0be")
// console.log(result)
var result = fin.wallet.listWallet('627fefbe5a65ec99ba9af0be');
console.log(result);
