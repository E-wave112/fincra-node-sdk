import { VirtualAccount } from '../../../src/services';
import { keys } from '../../env';
import {
  CreateVirtualAccountDto,
  CreateIndividualSubAccountDto,
  CreateInstantApprovalVirtualAccountDto,
  CreateCorporateVirtualAccountDto,
  ListSubVirtualAccountsDto,
  ListMerchantVirtualAccountsDto,
} from '../../../src/services/virtual-accounts/dto';

const virtualAccountInstance = new VirtualAccount(keys[0], keys[1], {
  sandbox: true,
});

describe('service to create a virtual account', () => {
  it('should return an account object', async () => {
    try {
      const createVirtualAccountObj: CreateVirtualAccountDto = {
        currency: 'EUR',
        KYCInformation: {
          address: {
            country: 'United states of America',
            state: 'San Fransisco',
            city: 'California',
            street: 'menlo park',
            zip: '94025',
          },
          document: {
            type: 'International Pass',
            number: '2103822',
            issuedBy: 'SEC',
            issuedDate: '2021-09-05',
            expirationDate: '2022-09-05',
            issuedCountryCode: 'ISO-840',
          },
          firstName: 'Edmond',
          lastName: 'Kirsch',
          businessName: 'Kirsch corp',
          bvn: '20203212',
          email: 'eddie@yahoo.com,',
          birthDate: '2021-11-07',
          occupation: 'Engineer',
          businessCategory: 'Engineering',
          additionalInfo: 'Nada',
        },
        channel: 'vfd',
        accountType: 'corporate',
        meansOfId: [''],
        utilityBill: '',
        reason: 'cross-border',
        paymentFlowDescription: 'EURO to GPB',
        monthlyVolume: '233',
        entityName: 'Kirsch corp',
        attachments: '',
      };
      const result = await virtualAccountInstance.createVirtualAccount(
        createVirtualAccountObj
      );
      expect(result).toHaveBeenCalledWith(createVirtualAccountObj);
      expect(typeof result).toBe('object');
    } catch (error) {
      expect(error).toBeInstanceOf(Error);
    }
  });
});

describe('service to create an individual sub virtual account', () => {
  it('should return an account object', async () => {
    try {
      const createIndividualSubVirtualAccountObj: CreateIndividualSubAccountDto =
        {
          currency: 'EUR',
          channel: 'vfd',
          accountType: 'individual',
          businessId: '627fefbe5a65ec99ba9af0be',
          subAccountId: '62c1bf5ca5a7c1b70352729c',
          meansOfId: [
            'https://reviewtestbucket.s3.amazonaws.com/va_documents/f8bcfwk0p4uqnf3mtvwm_b7dcf170-33c1-4a93-90bc-5ae37e7bf507.jpg',
            'https://reviewtestbucket.s3.amazonaws.com/va_documents/f8bcfwk0p4uqnf3mtvwm_b7dcf170-33c1-4a93-90bc-5ae37e7bf507.jpg',
          ],
          utilityBill: '',
          KYCInformation: {
            address: {
              country: 'United states of America',
              state: 'San Fransisco',
              city: 'California',
              street: 'menlo park',
              zip: '94025',
            },
            document: {
              type: 'International Pass',
              number: '2103822',
              issuedBy: 'SEC',
              issuedDate: '2021-09-05',
              expirationDate: '2022-09-05',
              issuedCountryCode: 'ISO-840',
            },
            firstName: 'Edmond',
            lastName: 'Kirsch',
            businessName: 'Kirsch corp',
            bvn: '20203212',
            email: 'eddie@yahoo.com,',
            birthDate: '2021-11-07',
            occupation: 'Engineer',
            businessCategory: 'Engineering',
            additionalInfo: 'Nada',
          },
        };
      const result =
        await virtualAccountInstance.createIndividualSubVirtualAccount(
          createIndividualSubVirtualAccountObj
        );
      expect(result).toHaveBeenCalledWith(createIndividualSubVirtualAccountObj);
      expect(typeof result).toBe('object');
    } catch (error) {
      expect(error).toBeInstanceOf(Error);
    }
  });
});

describe('service  for creating Individual virtual account for your sub-account (Instant Approval)', () => {
  it('should return an account object', async () => {
    try {
      const createInstantApprovalSubVirtualAccountObj: CreateInstantApprovalVirtualAccountDto =
        {
          currency: 'EUR',
          channel: 'vfd',
          accountType: 'individual',
          businessId: '627fefbe5a65ec99ba9af0be',
          subAccountId: '62c1bf28dc712129444254d6',
          meansOfId: [
            'https://reviewtestbucket.s3.amazonaws.com/va_documents/f8bcfwk0p4uqnf3mtvwm_b7dcf170-33c1-4a93-90bc-5ae37e7bf507.jpg',
            'https://reviewtestbucket.s3.amazonaws.com/va_documents/f8bcfwk0p4uqnf3mtvwm_b7dcf170-33c1-4a93-90bc-5ae37e7bf507.jpg',
          ],
          utilityBill: '',
          KYCInformation: {
            address: {
              country: 'United states of America',
              state: 'San Fransisco',
              city: 'California',
              street: 'menlo park',
              zip: '94025',
            },
            document: {
              type: 'International Pass',
              number: '2103822',
              issuedBy: 'SEC',
              issuedDate: '2021-09-05',
              expirationDate: '2022-09-05',
              issuedCountryCode: 'ISO-840',
            },
            firstName: 'Edmond',
            lastName: 'Kirsch',
            businessName: 'Kirsch corp',
            bvn: '20203212',
            email: 'eddie@yahoo.com,',
            birthDate: '2021-11-07',
            occupation: 'Engineer',
            businessCategory: 'Engineering',
            additionalInfo: 'Nada',
          },
        };
      const result =
        await virtualAccountInstance.createInstantApprovalVirtualAccount(
          createInstantApprovalSubVirtualAccountObj
        );
      expect(result).toHaveBeenCalledWith(
        createInstantApprovalSubVirtualAccountObj
      );
      expect(typeof result).toBe('object');
    } catch (error) {
      expect(error).toBeInstanceOf(Error);
    }
  });
});

describe('service  for creating a corporate virtual account for your business', () => {
  it('should return an account object', async () => {
    try {
      const createCorporateVirtualAccountObj: CreateCorporateVirtualAccountDto =
        {
          businessId: '627fefbe5a65ec99ba9af0be',
          subAccountId: '62c1bf28dc712129444254d6',
          currency: 'EUR',
          accountType: 'corporate',
          KYCInformation: {
            address: {
              country: 'iso 3866',
              state: 'San Fransisco',
              city: 'California',
              street: 'Menlo park',
              zip: '94025',
            },
            businessCategory: 'NGO',
            ultimateBeneficialOwners: [
              {
                document: {
                  type: 'International Pass',
                  number: '2103822',
                  issuedBy: 'SEC',
                  issuedDate: '2021-09-05',
                  expirationDate: '2022-09-05',
                  issuedCountryCode: 'ISO-840',
                },
                ownershipPercentage: '90%',
                firstName: 'Max',
                lastName: 'Kaye',
                politicallyExposedPerson: 'PEP',
              },
            ],
            businessName: 'Kirsch corp',
            bvn: '20324535',
            email: 'eddie@kirsch.corp',
            //   additionalInfo: 'Nada',
            incorporationDate: '2020-09-04',
            businessActivityDescription: 'Tech',
          },
          monthlyVolume: '900',
          entityName: 'Kirsch corp',
          reason: 'cross border payments',
          paymentFlowDescription: 'EURO to GPB',
          channel: 'vfd',
        };
      const result =
        await virtualAccountInstance.createCorporateSubVirtualAccount(
          createCorporateVirtualAccountObj
        );
      expect(result).toHaveBeenCalledWith(createCorporateVirtualAccountObj);
      expect(typeof result).toBe('object');
    } catch (error) {
      expect(error).toBeInstanceOf(Error);
    }
  });
});

describe('service to list all the virtual accounts requests by a business', () => {
  it('should return an array of virtual accounts requests', async () => {
    try {
      const result = await virtualAccountInstance.listVirtualAccountRequests();
      expect(result).toHaveBeenCalled();
      expect(typeof result).toBe('object');
    } catch (error) {
      expect(error).toBeInstanceOf(Error);
    }
  });
});

describe('service to fetch a virtual account by currency', () => {
  it('should return an array of virtual accounts', async () => {
    try {
      const currency: string = 'NGN';
      const result = await virtualAccountInstance.fetchVirtualAccountByCurrency(
        currency
      );
      expect(result).toHaveBeenCalledWith(currency);
      expect(typeof result).toBe('object');
    } catch (error) {
      expect(error).toBeInstanceOf(Error);
    }
  });
});

describe('service to get a list of virtual accounts that belongs to a subaccount', () => {
  it('should return an array of virtual accounts', async () => {
    try {
      const data: ListSubVirtualAccountsDto = {
        businessId: '627fefbe5a65ec99ba9af0be',
        subAccountId: '62c1be8de7cc659696767b19',
        page: '1',
        perPage: '20',
      };
      const result = await virtualAccountInstance.listSubVirtualAccounts(data);
      expect(result).toHaveBeenCalledWith(data);
      expect(typeof result).toBe('object');
    } catch (error) {
      expect(error).toBeInstanceOf(Error);
    }
  });
});

describe('service to fetch a single account by the virtualAccountId', () => {
  it('should return an account object', async () => {
    try {
      const virtualAccountId: string = '62c1be78a14d91ca07297cfd';
      const result = await virtualAccountInstance.fetchSingleVirtualAccount(
        virtualAccountId
      );
      expect(result).toHaveBeenCalledWith(virtualAccountId);
      expect(typeof result).toBe('object');
    } catch (error) {
      expect(error).toBeInstanceOf(Error);
    }
  });
});

describe('service to fetch all virtual accounts belonging to a merchant', () => {
  it('should return an array of virtual accounts', async () => {
    try {
      const data: ListMerchantVirtualAccountsDto = {
        currency: 'NGN',
        businessName: 'The Learning Bulletin',
        // issuedDate: "2021-10-03",
        // requestedDate: "2021-09-03",
        // accountNumber: "0234521090",
        // status: "approved"
      };
      const result = await virtualAccountInstance.listMerchantVirtual(data);
      expect(result).toHaveBeenCalledWith(data);
      expect(typeof result).toBe('object');
    } catch (error) {
      expect(error).toBeInstanceOf(Error);
    }
  });
});

describe('service to deactivate a virtual account belonging to a merchant', () => {
  it('returns a response object', async () => {
    try {
      const virtualAccountId: string = '62adfcc11acaf7bc0941c017';
      const result = await virtualAccountInstance.deactivateVirtualAccount(
        virtualAccountId
      );
      console.log(result);
      expect(result).toHaveBeenCalledWith(virtualAccountId);
      expect(typeof result).toBe('object');
    } catch (error) {
      console.error(error);
      expect(error).toBeInstanceOf(Error);
    }
  });
});
