import { FincraCore } from '../../api';
import { BaseError, Environment } from '../../utils';

/**
 * The Collection module for handling the collection related operations.
 * @class Collection
 * @extends FincraCore
 * @param {string} publicKey - The public key of the merchant
 * @param {string} secretKey - The secret key of the merchant
 * @param {Environment} environment - The environment of the merchant
 **/
export class VirtualAccount extends FincraCore {
  constructor(publicKey: string, secretKey: string, environment?: Environment) {
    super(publicKey, secretKey, environment);
  }
}
