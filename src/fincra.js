"use strict";
exports.__esModule = true;
exports.Fincra = void 0;
// import { FincraCore } from "./api";
var conversion_1 = require("./services/conversions/conversion");
// export const Fincra = function (publicKey:string, privateKey:string){
//     this.convert = new Conversion(publicKey, privateKey)
// }
var Fincra = /** @class */ (function () {
    function Fincra(publicKey, secretKey) {
        this.publicKey = publicKey;
        this.secretKey = secretKey;
        this.convert = new conversion_1.Conversion(this.publicKey, this.secretKey);
        this.publicKey = publicKey;
        this.secretKey = secretKey;
    }
    return Fincra;
}());
exports.Fincra = Fincra;
var fin = new Fincra("pk_NjI3ZmVmYmU1YTY1ZWM5OWJhOWFmMGJlOjoxMjE2NzA=", "hzjMvDeY0dmBrDPSxZH5exnmdNc0aUXy");
console.log(fin.convert.fetchConversion("B-YhsUdg86mu9t"));
