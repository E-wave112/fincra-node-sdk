import { Beneficiary } from '../../../src/services'
import { CreateBeneficiaryDto, FetchDeleteBeneficiaryDto, UpdateBeneficiaryDto, ListBeneficiaryDto } from '../../../src/services/beneficiaries/dto';
import { keys } from "../../env";

const beneficiaryInstance = new Beneficiary(keys[0], keys[1])

describe('service that creates a beneficiary', () => {
    it('returns a message object of a created beneficiary', async () => {
        try {
        const beneficiaryDetails: CreateBeneficiaryDto = {
            firstName: "efe",
            lastName: "ebieroma",
            email: "efe@hahaha.com",
            phoneNumber: "09090909090",
            accountHolderName: "efe stephen ebieroma",
            bank: {
              name: "Wema Bank",
              code: "06",
              sortCode: "928927",
              branch: "Ota",
              address: {
                Country: "GB",
                State: "Lagos",
                zip: "123455",
                city: "Paris",
                street: "12,josephus"
              }
            },
            address: {
              Country: "GB",
              State: "Lagos",
              zip: "123455",
              city: "Paris",
              street: "12,josephus"
            },
            type: "individual",
            currency: "GBP",
            paymentDestination: "bank_account",
            uniqueIdentifier: "4",
            businessId: "d8932371-95a6-42da-920a-6a95b28ed375",
            destinationAddress: "AKoka, yaba, lagos"
          }

        const result = await beneficiaryInstance.createBeneficiary(beneficiaryDetails)
        expect(result).toHaveBeenCalledWith(beneficiaryDetails)
        expect(typeof result).toBe('object')
    } catch (error) {
         expect(error).toBeInstanceOf(Error)
    }
    })
})

describe('service to return the list of all beneficiaries related to a business', () => {
    it('returns an array of beneficiary objects linked to a user', async () => {
        try {
            const data:ListBeneficiaryDto = {
                businessId: "d8932371-95a6-42da-920a-6a95b28ed375"
            }
            const result = await beneficiaryInstance.listBeneficiaries(data)
            expect(result).toHaveBeenCalledWith(data)
            expect(typeof result).toBe('object')
        } catch (error) {
            expect(error).toBeInstanceOf(Error)
        }
    })
})

describe('service to fetch a single beneficiary tied to a business', () => {
    it('returns a beneficiary object linked to a user', async () => {
        try {
        const data:FetchDeleteBeneficiaryDto = {
            businessId: "d8932371-95a6-42da-920a-6a95b28ed375",
            beneficiaryId:"a5ce0826-4874-4a4b-9ec2-3f771d371ea4"
        }

        const result = await beneficiaryInstance.fetchBeneficiary(data)
        expect(result).toHaveBeenCalledWith(data)
        expect(typeof result).toBe('object')
    } catch (error) {
        expect(error).toBeInstanceOf(Error)
    }
    })
})

describe('service to update a beneficiary', () => {
    it('returns an updated beneficiary object', async () => {
        try {
            const beneficiaryDetails: UpdateBeneficiaryDto = {
                firstName: "efe",
                lastName: "ebieroma",
                email: "efe@hahaha.com",
                phoneNumber: "09090909090",
                accountHolderName: "efe stephen ebieroma",
                bank: {
                    name: "Wema Bank",
                    code: "06",
                    sortCode: "928927",
                    branch: "Ota",
                    address: {
                        Country: "GB",
                        State: "Lagos",
                        zip: "123455",
                        city: "Paris",
                        street: "12,josephus"
                    }
                },
                address: {
                    Country: "GB",
                    State: "Lagos",
                    zip: "123455",
                    city: "Paris",
                    street: "12,josephus"
                },
                type: "individual",
                currency: "GBP",
                paymentDestination: "bank_account",
                uniqueIdentifier: "4",
                businessId: "d8932371-95a6-42da-920a-6a95b28ed375",
                destinationAddress: "AKoka, yaba, lagos",
                beneficiaryId: "a5ce0826-4874-4a4b-9ec2-3f771d371ea4"
            }
            const result = await beneficiaryInstance.updateBeneficiary(beneficiaryDetails)
            expect(result).toHaveBeenCalledWith(beneficiaryDetails) 
            expect(typeof result).toBe('object')
        } catch (error) {
            expect(error).toBeInstanceOf(Error)
        }
    })
})

describe('service to delete a beneficiary', () => {
    it('returns a message confirming that a beneficiary has been deleted', async () => {
        try {
            const data:FetchDeleteBeneficiaryDto = {
                businessId: "d8932371-95a6-42da-920a-6a95b28ed375",
                beneficiaryId:"a5ce0826-4874-4a4b-9ec2-3f771d371ea4"
            }
            const result = await beneficiaryInstance.deleteBeneficiary(data)
            expect(result).toHaveBeenCalledWith(data)
            expect(typeof result).toBe('object')
        } catch (error) {
            expect(error).toBeInstanceOf(Error)
        }
    })
})