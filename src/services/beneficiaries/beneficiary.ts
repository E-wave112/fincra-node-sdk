import { FincraCore } from "../../api";
import { BaseError } from "../../utils";
import { CreateBeneficiaryDto , FetchDeleteBeneficiaryDto, UpdateBeneficiaryDto, ListBeneficiaryDto} from "./dto";
import { excludeFields } from "../../utils";

// need docs


/**
 * The Beneficiary module for handling the beneficary related operations.
 * @class Beneficiary
 * @extends FincraCore
 */
export class Beneficiary extends FincraCore {
    constructor(publicKey: string, secretKey: string) {
        super(publicKey, secretKey);
      }

      public async createBeneficiary(data: CreateBeneficiaryDto) {
          try {
              const request = this.getBaseUrl()
              const dataBody = excludeFields(['businessId'], data)
              const response = await request.post(`/profile/beneficiaries/business/${data.businessId}`, dataBody)
              return response.data;
          } catch (error:any) {
            console.error(error);
            throw new BaseError({ message: error.response.data }); 
          }
      }

      public async listBeneficiaries(data:ListBeneficiaryDto) {
        try {
            const request = this.getBaseUrl()
            // const dataBody = excludeFields(['businessId'], data)
            const response = await request.get(`/profile/beneficiaries/business/${data.businessId}`)
            return response.data;
        } catch (error:any) {
          console.error(error);
          throw new BaseError({ message: error.response.data }); 
        }
    }

    public async fetchBeneficiary(data: FetchDeleteBeneficiaryDto) {
        try {
            const request = this.getBaseUrl()
            const response = await request.get(`/profile/beneficiaries/business/${data.businessId}/${data.beneficiaryId}`)
            return response.data;
        } catch (error:any) {
          console.error(error);
          throw new BaseError({ message: error.response.data }); 
        }
    }

    public async updateBeneficiary(data:UpdateBeneficiaryDto) {
        try {
            const request = this.getBaseUrl()
            const dataBody = excludeFields(['businessId', 'beneficiaryId'], data)
            const response = await request.patch(`/profile/beneficiaries/business/${data.businessId}/${data.beneficiaryId}`, dataBody)
            return response.data;
        } catch (error:any) {
          console.error(error);
          throw new BaseError({ message: error.response.data }); 
        }
    }

    public async deleteBeneficiary(data:FetchDeleteBeneficiaryDto) {
        try {
            const request = this.getBaseUrl()
            const response = await request.delete(`/profile/beneficiaries/business/${data.businessId}/${data.beneficiaryId}`)
            return response.data;
        } catch (error:any) {
          console.error(error);
          throw new BaseError({ message: error.response.data }); 
        }
    }
}