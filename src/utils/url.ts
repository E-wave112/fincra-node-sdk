import { BASE_URL_PROD, BASE_URL } from './constants';

export const getUrl = (publicKey: string): string => {
  if (publicKey.substring(0, 6) === 'pk_prod') {
    return BASE_URL_PROD;
  }
  return BASE_URL;
};
