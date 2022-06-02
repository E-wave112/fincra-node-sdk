import { BASE_URL_PROD, BASE_URL } from "./constants";

export const getUrl = (publicKey: string): string | boolean => {
    return BASE_URL ? publicKey.substring(0,6) === 'pk_test' : BASE_URL_PROD
};
