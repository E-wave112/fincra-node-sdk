import { Conversion } from '../../../src/services';
import { keys } from '../../env';

const conversionInstance = new Conversion(keys[0], keys[1]);

describe('service to fetch all the conversions performed by a merchant', () => {
  it('returns an array of conversion objects', async () => {
    try {
      const businessId: string = '25fdf110-2c80-4284-bed9-21f428fea3fe';
      const result = await conversionInstance.getBusinessConversions(
        businessId
      );
      expect(result).toHaveBeenCalledWith(businessId);
      expect(typeof result).toBe('object');
    } catch (error) {
      expect(error).toBeInstanceOf(Error);
    }
  });
});

describe('service to fetch the detail of a single conversion', () => {
  it('returns a conversion object', async () => {
    try {
      const conversionId: string = '34513461-7ab8-4f47-b088-3e474f90477f';
      const result = await conversionInstance.fetchConversion(conversionId);
      expect(result).toHaveBeenCalledWith(conversionId);
      expect(typeof result).toBe('object');
    } catch (error) {
      expect(error).toBeInstanceOf(Error);
    }
  });
});
