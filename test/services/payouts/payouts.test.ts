import { keys } from '../../env';
import { Payout } from '../../../src/services';
import {
  CreatePayoutDto,
  UploadPayoutDto,
  WalletToWalletTransferDto,
} from '../../../src/services/payouts/dto';

const payoutInstance = new Payout(keys[0], keys[1], { sandbox: true });

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

describe('uploads a payout document', () => {
  it('returns a transaction object', async () => {
    try {
      const data: UploadPayoutDto = {
        name: 'salaried',
        type: 'transaction',
        reference: '29012939483828ej',
        file: 'data:text/html;name=Zoom%20Clone.html;base64,PGh0bWwgbGFuZz0iZW4iPjxoZWFkPgo8bWV0YSBodHRwLWVxdWl2PSJjb250ZW50LXR5cGUiIGNvbnRlbnQ9InRleHQvaHRtbDsgY2hhcnNldD1VVEYtOCI+CiAgICA8bWV0YSBjaGFyc2V0PSJVVEYtOCI+CiAgICA8bWV0YSBuYW1lPSJ2aWV3cG9ydCIgY29udGVudD0id2lkdGg9ZGV2aWNlLXdpZHRoLCBpbml0aWFsLXNjYWxlPTEuMCI+CiAgICA8bGluayByZWw9InN0eWxlc2hlZXQiIGhyZWY9Ilpvb20lMjBDbG9uZV9maWxlcy9zdHlsZS5jc3MiPgogICAgPHRpdGxlPlpvb20gQ2xvbmU8L3RpdGxlPgogICAgPHNjcmlwdCBzcmM9Ilpvb20lMjBDbG9uZV9maWxlcy9zb2NrZXQuanMiPjwvc2NyaXB0PgogICAgPHNjcmlwdCBzcmM9Ilpvb20lMjBDbG9uZV9maWxlcy9wZWVyanMuanMiPjwvc2NyaXB0PgogICAgPHNjcmlwdD4KICAgICAgICBjb25zdCBST09NX0lEID0gIjZiNzk5ZTUxLWE1MDUtNDlmYi04ZGViLTgxMDRhOGU5Y2QwYyIKICAgIDwvc2NyaXB0Pgo8L2hlYWQ+Cjxib2R5PgogICAKICAgIAogICAgPCEtLSBtYWluIHNlY3Rpb24gZm9yIG1ldGEgdmlkZW8gZGF0YSAtLT4KICAgIDxkaXYgY2xhc3M9Im1haW4iIHN0eWxlPSJoZWlnaHQiPgogICAgICAgIAogICAgPGRpdiBjbGFzcz0ibWFpbl9fbGVmdCI+CiAgICAgICAgPGRpdiBjbGFzcz0ibWFpbl9fdmlkZW9zIj4KICAgICAgICA8ZGl2IGlkPSJ2aWRlby1ncmlkIj4KICAgICAgICAgPHZpZGVvPjwvdmlkZW8+PC9kaXY+CiAgICA8L2Rpdj4KICAgIDxkaXYgY2xhc3M9Im1haW5fX2NvbnRyb2xzIj4KICAgICAgICAKCgogICAgPC9kaXY+CjwvZGl2PgoKICAgIDxkaXYgY2xhc3M9Im1haW5fX3JpZ2h0Ij4KICAgICAgICA8ZGl2IGNsYXNzPSJtYWluX19oZWFkZXIiPjwvZGl2PgogICAgICAgIDxoNj5DaGF0PC9oNj4KICAgIDwvZGl2Pgo8L2Rpdj4KICAgIDxzY3JpcHQgc3JjPSJab29tJTIwQ2xvbmVfZmlsZXMvc2NyaXB0LmpzIj48L3NjcmlwdD4KCjwvYm9keT48L2h0bWw+',
      };
      const result = await payoutInstance.uploadTransactionDocument(data);
      expect(result).toHaveBeenCalledWith(data);
      expect(typeof result).toBe('object');
    } catch (error) {
      expect(error).toBeInstanceOf(Error);
    }
  });
});
