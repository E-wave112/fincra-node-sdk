"use strict";
var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        if (typeof b !== "function" && b !== null)
            throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
exports.__esModule = true;
exports.BaseError = void 0;
/**
 * A custom error class for handling the library related errors.
 * @class BaseError
 */
var BaseError = /** @class */ (function (_super) {
    __extends(BaseError, _super);
    /**
     * The BaseError Constructor.
     * @param {Record<any,any>} options - A configuration object for errors.
     * @param {String} options.message - The error message if any.
     * @constructor BaseError
     */
    function BaseError(options) {
        if (options === void 0) { options = {}; }
        var _this = _super.call(this) || this;
        Error.captureStackTrace(_this, _this.constructor);
        _this.name = _this.constructor.name;
        _this.message = options.message;
        return _this;
    }
    return BaseError;
}(Error));
exports.BaseError = BaseError;
