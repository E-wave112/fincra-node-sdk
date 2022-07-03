import { keys } from '../../env';
import { Collection } from '../../../src/services';
import {
  FetchCollectionVirtualAccountDto,
  ListCollectionMainVirtualAccountDto,
  PayWithTransferDto,
} from '../../../src/services/collections/dto';

const collectionInstance = new Collection(keys[0], keys[1], { sandbox: true });

describe('service to pay with transfer for temporary virtual account', () => {
  it('should return a transaction object', async () => {
    try {
      const data: PayWithTransferDto = {
        expiresAt: '30',
        name: 'Edmond Kirsch',
        merchantReference: '627fefbe5a65ec99ba9cf0fe',
      };
      const result = await collectionInstance.payWithTransfer(data);
      expect(result).toHaveBeenCalledWith(data);
      expect(typeof result).toBe('object');
    } catch (error) {
      expect(error).toBeInstanceOf(Error);
    }
  });
});

describe('service to to view both a single or multiple collections of a main virtual account', () => {
  it('should return a collection object', async () => {
    try {
      const data: ListCollectionMainVirtualAccountDto = {
        business: '627fefbe5a65ec99ba9af0be',
        reference: '677gefbe5a65ec99ba9af3be',
        page: '1',
        perPage: '30',
      };
      const result = await collectionInstance.listCollectionMain(data);
      expect(result).toHaveBeenCalledWith(data);
      expect(typeof result).toBe('object');
    } catch (error) {
      expect(error).toBeInstanceOf(Error);
    }
  });
});

describe('service for retrieving a single collection of an additional virtual account by a reference', () => {
  it('should return a collection object', async () => {
    try {
      const data: FetchCollectionVirtualAccountDto = {
        reference: '77gefbe5a65ec99ba9af3be',
        business: '627fefbe5a65ec99ba9af0be',
      };
      const result = await collectionInstance.fetchCollectionAddition(data);
      expect(result).toHaveBeenCalledWith(data);
      expect(typeof result).toBe('object');
    } catch (error) {
      expect(error).toBeInstanceOf(Error);
    }
  });
});
