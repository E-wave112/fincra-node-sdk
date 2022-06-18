import { FincraCore } from "../../api";
import { BaseError } from "../../utils/errors/error.base";
import { WalletLogsDto } from "./dto";

export class Wallet extends FincraCore {
    constructor(publicKey:string, secretKey:string) {
        super(publicKey, secretKey);
    }

    // public async listWalletLogs(data:WalletLogsDto){
    //     try {
    //         const request = this.getBaseUrl()
    //         const response = await request.get(`/wallets/logs`, data)
    //         console.log(response.data)
    //         return response.data
    //     } catch (error:any) {
    //         throw new BaseError({message: error.response.data})
    //     }
    // }

    public async listWallet(id:string){
        try {
            const request = this.getBaseUrl()
            const response = await request.get(`/wallets/?business=${id}`)
            console.log(response.data)
            return response.data
        } catch (error:any) {
            throw new BaseError({message: error.response.data})
        }
    }

    public async getWallet(id:string){
        try {
            const request = this.getBaseUrl()
            const response = await request.get(`/wallets/${id}`)
            console.log(response.data)
            return response.data
        } catch (error:any) {
            throw new BaseError({message: error.response.data})
        }
    }

}