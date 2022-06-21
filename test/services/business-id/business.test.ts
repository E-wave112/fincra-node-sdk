import { Business } from '../../../src/services';
import { keys } from '../../env';

const businessTestInstance = new Business(keys[0], keys[1]);

describe('service that returns the business information of a merchant', () => {
  it('returns the business info of a merchant', async () => {
    try {
      const result = await businessTestInstance.getBusinessId();
      expect(result).toHaveBeenCalled();
      expect(typeof result).toBe('object');
    } catch (error) {
      expect(error).toBeInstanceOf(Error);
    }
  });
});
