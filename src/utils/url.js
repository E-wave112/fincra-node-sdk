"use strict";
exports.__esModule = true;
exports.getUrl = void 0;
var constants_1 = require("./constants");
var getUrl = function (publicKey) {
    if (publicKey.substring(0, 6) === 'pk_prod') {
        return constants_1.BASE_URL_PROD;
    }
    return constants_1.BASE_URL;
};
exports.getUrl = getUrl;
