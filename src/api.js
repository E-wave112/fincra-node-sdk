"use strict";
exports.__esModule = true;
exports.FincraCore = void 0;
var axios_1 = require("axios");
var error_base_1 = require("./utils/errors/error.base");
var url_1 = require("./utils/url");
/**
 * @class Fincra REST api initializer
 */
var FincraCore = /** @class */ (function () {
    /**
     * This is a constructor for creating a fincra core instance
     * @param { string } publicKey user public key
     * @param { string } secretKey user secret key
     * @returns { FincraCore } a fincra core instance
     */
    function FincraCore(publicKey, secretKey) {
        this.publicKey = publicKey;
        this.secretKey = secretKey;
        this.request = axios_1["default"].create({
            baseURL: (0, url_1.getUrl)(publicKey),
            headers: {
                'api-key': secretKey,
                'Content-Type': 'application/json'
            }
        });
    }
    /**
     * It returns an AxiosInstance object for making requests to fincra api
     * @returns An AxiosInstance
     */
    FincraCore.prototype.getBaseUrl = function () {
        try {
            return this.request;
        }
        catch (error) {
            throw new error_base_1.BaseError({ message: error.response.data });
        }
    };
    return FincraCore;
}());
exports.FincraCore = FincraCore;
