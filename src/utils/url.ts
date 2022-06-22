import { BASE_URL_PROD, BASE_URL } from './constants';


/**
 * If the public key starts with pk_prod, return the production URL, otherwise return the sandbox URL
 * @param {string} publicKey - Your public key.
 * @returns The base url for the public key
 */
export const getUrl = (publicKey: string): string => {
  if (publicKey.substring(0, 6) === 'pk_prod') {
    return BASE_URL_PROD;
  }
  return BASE_URL;
};
