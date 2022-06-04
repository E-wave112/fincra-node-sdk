import { BASE_URL_PROD, BASE_URL } from "./constants";

export const getUrl = (publicKey: string): string => {
    if (publicKey.substring(0,6) === 'pk_test'){
        return BASE_URL
    }
    return BASE_URL_PROD
};
