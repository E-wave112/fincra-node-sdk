import { FincraCore } from '../../api';
import { BaseError, handleErrors, IEnvironment } from '../../utils';
import { AcceptChargeBackDto, RejectChargeBackDto } from './dto';

/**
 * The chargeback module for handling the chargeback related operations.
 * @class Chargebacks
 * @extends FincraCore
 * @param {string} publicKey - The public key of the merchant
 * @param {string} secretKey - The secret key of the merchant
 * @param {IEnvironment} environment - The environment of the merchant
 */
export class ChargeBacks extends FincraCore {
  constructor(
    publicKey: string,
    secretKey: string,
    environment?: IEnvironment
  ) {
    super(publicKey, secretKey, environment);
  }

  /**
   * It lists all chargebacks for a business
   * @param {string} id - The id of the business you want to get the chargebacks for.
   * @returns The response.data is being returned.
   */
  public async listChargeBacks(id: string) {
    try {
      const request = this.getBaseUrl();
      const response = await request.get(
        `/collections/chargebacks?business=${id}`
      );
      return response.data;
    } catch (error) {
      throw new BaseError({ message: handleErrors(error) });
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
        `/collections/chargebacks/${data.chargeBackId}/accept?business=${data.businessId}`
      );
      return response.data;
    } catch (error) {
      throw new BaseError({ message: handleErrors(error) });
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
        `/collections/chargebacks/${data.chargeBackId}/reject?business=${data.businessId}`,
        {
          business_reject_reason: data.reason,
        }
      );
      return response.data;
    } catch (error) {
      throw new BaseError({ message: handleErrors(error) });
    }
  }
}
