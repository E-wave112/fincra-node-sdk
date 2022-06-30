import { BASE_URL_PROD, BASE_URL } from './constants';
import { Environment } from './interfaces';

/**
 * If the public key starts with pk_prod, return the production URL, otherwise return the sandbox URL
 * @param {string} publicKey - Your public key.
 * @returns The base url for the public key
 */
export const getUrl = (env: Environment = { sandbox: false }): string => {
  if (env.sandbox) {
    return BASE_URL;
  }
  return BASE_URL_PROD;
};
