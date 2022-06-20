import { FincraCore } from '../../api';
import { BaseError } from '../../utils/errors/error.base';
import { AcceptChargeBackDto, RejectChargeBackDto } from './dto';

/**
 * The chargeback module for handling the chargeback related operations.
 * @class Chargebacks
 * @extends FincraCore
 */
export class ChargeBacks extends FincraCore {
  constructor(publicKey: string, secretKey: string) {
    super(publicKey, secretKey);
  }

  /**
   * It lists all chargebacks for a business
   * @param {string} id - The id of the business you want to get the chargebacks for.
   * @returns The response.data is being returned.
   */
  public async listChargeBacks(id: string) {
    try {
      const request = this.getBaseUrl();
      const response = await request.get(`/chargebacks?business=${id}`);
      console.log(response.data);
      return response.data;
    } catch (error: any) {
      console.error(error.response);
      throw new BaseError({ message: error.response.data });
    }
  }

  /**
   * This function accepts a chargeback
   * @param {AcceptChargeBackDto} data - AcceptChargeBackDto
   * @returns The response is the chargeback object with the status changed to accepted.
   */
  public async acceptChargeBack(data: AcceptChargeBackDto) {
    try {
      const request = this.getBaseUrl();
      const response = await request.patch(
        `/chargebacks/${data.chargeBackId}/accept?business=${data.businessId}`
      );
      console.log(response.data);
      return response.data;
    } catch (error: any) {
      throw new BaseError({ message: error.response.data });
    }
  }

  /**
   * This function rejects a chargeback
   * @param {RejectChargeBackDto} data - {
   * @returns The response is a JSON object with the following properties:
   */
  public async rejectChargeBack(data: RejectChargeBackDto) {
    try {
      const request = this.getBaseUrl();
      const response = await request.patch(
        `/chargebacks/${data.chargeBackId}/reject?business=${data.businessId}`,
        {
          business_reject_reason: data.reason,
        }
      );
      console.log(response.data);
      return response.data;
    } catch (error: any) {
      throw new BaseError({ message: error.response.data });
    }
  }
}
