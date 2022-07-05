import { Conversion } from '../../../src/services';
import { CreateConversionDto } from '../../../src/services/conversions/dto';
import { keys } from '../../env';

const conversionInstance = new Conversion(keys[0], keys[1], { sandbox: true });

describe('service to fetch all the conversions performed by a merchant', () => {
  it('returns an array of conversion objects', async () => {
    try {
      const businessId: string = '627fefbe5a65ec99ba9af0be';
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
      const conversionId = '34513461';

      const result = await conversionInstance.fetchConversion(conversionId);
      expect(result).toHaveBeenCalledWith(conversionId);
      expect(typeof result).toBe('object');
    } catch (error) {
      expect(error).toBeInstanceOf(Error);
    }
  });
});

describe('service to create a conversion for a merchant', () => {
  it('returns a conversion object', async () => {
    try {
      const conversion: CreateConversionDto = {
        business: '627fefbe5a65ec99ba9af0be',
        quoteReference: '123456789',
      };
      const result = await conversionInstance.createConversion(conversion);
      expect(result).toHaveBeenCalledWith(conversion);
      expect(typeof result).toBe('object');
    } catch (error) {
      expect(error).toBeInstanceOf(Error);
    }
  });
});
