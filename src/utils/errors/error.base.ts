/**
 * A custom error class for handling the library related errors.
 * @class BaseError
 */
export class BaseError extends Error {
  /**
   * The BaseError Constructor.
   * @param {Record<any,any>} options - A configuration object for errors.
   * @param {String} options.message - The error message if any.
   * @constructor BaseError
   */
  constructor(options: Record<any, any> = {}) {
    super();
    Error.captureStackTrace(this, this.constructor);
    this.name = this.constructor.name;
    this.message = options.message;
  }
}
