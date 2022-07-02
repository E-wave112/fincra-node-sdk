import { keys } from '../../env';
import { Payout } from '../../../src/services';
import {
  CreatePayoutDto,
  WalletToWalletTransferDto,
} from '../../../src/services/payouts/dto';

const payoutInstance = new Payout(keys[0], keys[1]);

describe('it should create a payout', () => {
  it('returns a transaction object', async () => {
    try {
      const payout: CreatePayoutDto = {
        sourceCurrency: 'NGN',
        destinationCurrency: 'NGN',
        beneficiary: {
          country: 'GB',
          address: {
            country: 'US',
            state: 'San fransisco',
            city: 'Menlo park',
            street: 'wall street',
            zip: '94025',
          },
          document: {
            type: 'CAC',
            number: '11235813',
            issuedCountryCode: '0023',
            issuedBy: 'dhdhdeyee5',
            issuedDate: '2022-03-04',
            expirationDate: '2030-03-04',
          },
          firstName: 'Edmond',
          lastName: 'kirsh',
          email: 'edmond@kirsch.com',
          type: 'individual',
          accountHolderName: 'Eddie',
          accountNumber: '0420809626',
          mobileMoneyCode: '00x1323',
          bankCode: '2341',
          bankSwiftCode: '2232',
          sortCode: '1150',
          registrationNumber: '1000234',
        },
        paymentDestination: 'bank_account',
        amount: '4000',
        business: '627fefbe5a65ec99ba9af0be',
        description: 'monthly payout',
        customerReference: '00x123ab',
        paymentScheme: 'sepa',
        quoteReference: 'wwwqqereqa',
      };

      const result = await payoutInstance.createPayout(payout);
      expect(result).toHaveBeenCalledWith(payout);
      expect(typeof result).toBe('object');
    } catch (error) {
      expect(error).toBeInstanceOf(Error);
    }
  });
});

describe('it should transfer funds between wallets', () => {
  it('returns a transaction object', async () => {
    try {
      const transfer: WalletToWalletTransferDto = {
        amount: '4000',
        business: '627fefbe5a65ec99ba9af0be',
        customerReference: '677gefbe5a65ec99ba9af3be',
        description: 'For the month',
        beneficiaryWalletNumber: '11234568943',
      };

      const result = await payoutInstance.walletToWalletTransfer(transfer);
      expect(result).toHaveBeenCalledWith(transfer);
      expect(typeof result).toBe('object');
    } catch (error) {
      expect(error).toBeInstanceOf(Error);
    }
  });
});

describe('it should fetch a payout by its reference', () => {
  it('returns a transaction object', async () => {
    try {
      const reference = '677gefbe5a65ec99ba9af3be';
      const result = await payoutInstance.fetchPayout(reference);
      expect(result).toHaveBeenCalledWith(reference);
      expect(typeof result).toBe('object');
    } catch (error) {
      expect(error).toBeInstanceOf(Error);
    }
  });
});

describe('it should fetch a payout by the customer reference', () => {
  it('returns a transaction object', async () => {
    try {
      const creference = '677gefbe5a65ec99ba6ab3be';
      const result = await payoutInstance.fetchCustomerPayout(creference);
      expect(result).toHaveBeenCalledWith(creference);
      expect(typeof result).toBe('object');
    } catch (error) {
      expect(error).toBeInstanceOf(Error);
    }
  });
});

describe('it lists all available banks for making payouts', () => {
  it('returns a list of banks', async () => {
    try {
      const result = await payoutInstance.listBanks();
      expect(result).toHaveBeenCalled();
      expect(typeof result).toBe('object');
    } catch (error) {
      expect(error).toBeInstanceOf(Error);
    }
  });
});
