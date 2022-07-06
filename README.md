# fincra-node-sdk
> A community supported NodeJS sdk that enables developers to build fintech products securely and seamlessy.

## Getting Started
- To start using this sdk, create an account at https://api.fincra.com or a sandbox account at https://sandboxapi.fincra.com if you haven't already.
- You can then retrieve your API keys from your dashboard either from [here](https://app.fincra.com/) or [here](https://sandbox.fincra.com/dashboard).
- Want to contribute to this project? please read the [Contributing]() guide!
## Installation
```js
npm install fincra-node
```
### Or with yarn
```js
yarn add fincra-node
```
## Usage
```js
const Fincra = require('fincra-node');
```
### with Typescript
```ts
import Fincra from 'fincra-node';
```

### instantiate the Fincra class

```js
const fincra = new Fincra(PUBLIC_KEY, PRIVATE_KEY, { sandbox: true });
```

**Note:**

- sandbox is optional, if you don't specify it, it will default to false, and you will be using the [production(live)](https://api.fincra.com/) API. for example:

```js
const fincra = new Fincra(PUBLIC_KEY, PRIVATE_KEY);
```

- For more information about the services exposed by the SDK, please refer to the [documentation](https://docs.fincra.com/docs).
- Be sure to keep your API Credentials securely in [environment variables](https://www.twilio.com/blog/working-with-environment-variables-in-node-js-html)

## Available Services exposed by the SDK

<!-- create an hyperlink for easy navigation of the readme file -->

**1**. [**Business**](#business)
- [Get Business details](#get-business-details)

**2**. [**Beneficiaries**](#beneficiaries)
- [Create a beneficiary](#create-a-beneficiary)
- [Fetch a beneficiary](#fetch-beneficiaries)
- [List beneficiaries](#list-beneficiaries)
- [Update a beneficiary](#update-a-beneficiary)
- [Delete a beneficiary](#delete-a-beneficiary)

**3**. [**Chargebacks**](#chargebacks)
- [List chargebacks](#list-chargebacks)
- [Accept a chargeback](#accept-a-chargeback)
- [Reject a chargeback](#reject-a-chargeback)

**4**. [**Collections**](#collections)

**5**. [**Conversions**](#conversions)

**6**. [**Payouts**](#payouts)

**7**. [**Quotes**](#quotes)

**8**. [**Subaccounts**](#subaccounts)

**9**. [**Verification**](#verification)

**10**. [**Virtual-accounts**](#virtual-accounts)

**11**. [**Wallets**](#wallets)

- [Get Wallets](#get-wallets)
<!-- add the business -->

### Business

> A business represents the merchant or any entity making use of this sdk

#### `Get business details`

<!-- add a description -->

> This method lets you retrieves the unique Identifier of your business and other information such as your email etc.

> The unique identifier(businessId) allows your business to access other services.

```ts
const business = fincra.business.getBusinessId();
```

### Beneficiaries

> The beneficiary’s service allows the business to create beneficiaries that can receive payments.
> **NOTE**: Beneficiaries and recipients are used interchangeably in this documentation.

#### `Create a beneficiary`

> This method is used for creating a Beneficiary.

```ts
const data = {
  firstName: 'efe',
  lastName: 'ebieroma',
  email: 'efe@hahaha.com',
  phoneNumber: '09090909090',
  accountHolderName: 'efe stephen ebieroma',
  bank: {
    name: 'Wema Bank',
    code: '06',
    sortCode: '928927',
    branch: 'Ota',
    address: {
      country: 'GB',
      state: 'Lagos',
      zip: '123455',
      city: 'Paris',
      street: '12,josephus',
    },
  },
  address: {
    country: 'GB',
    state: 'Lagos',
    zip: '123455',
    city: 'Paris',
    street: '12,josephus',
  },
  type: 'individual',
  currency: 'GBP',
  paymentDestination: 'bank_account',
  uniqueIdentifier: '4',
  businessId: '627fefbe5a65ec99ba9af0be',
  destinationAddress: 'AKoka, yaba, lagos',
};

const createBen = fincra.beneficiary.createBeneficiary(data);
```

- More details about the parameters for the above method [here](https://docs.fincra.com/reference/create-a-beneficiary)

#### `List beneficiaries`

<!-- add a description -->

> This method provides the ability to retrieve a list of beneficiaries attached to a business

```ts
const data = {
  businessId: '617fefbe5a65ec99ba9af0ce',
  page: '1',
  perPage: '10',
};
const listBen = fincra.beneficiary.listBeneficiaries(data);
```

#### Parameters supported

| Parameters   | Data type | Required | Description                                         |
| ------------ | --------- | -------- | --------------------------------------------------- |
| `businessId` | `string`  | `true`   | `the business unique identifier`.                   |
| `page`       | `string`  | `false`  | `the current page`                                  |
| `perPage`    | `string`  | `false`  | `the number of beneficiaries to be viewed per page` |

#### `Fetch beneficiaries`

<!-- add a description -->

> This method is used for retrieving a single beneficiary attached to a business.

```ts
const data = {
  businessId: '617fefbe4a68ec99ba6af0be',
  beneficiaryId: '618fefbe4a68ec99ba5af0be',
};

const fetchBen = fincra.beneficiary.fetchBeneficiary(data);
```

#### Parameters supported

| Parameters      | Data type | Required | Description                       |
| --------------- | --------- | -------- | --------------------------------- |
| `businessId`    | `string`  | `true`   | `the business unique identifier`. |
| `beneficiaryId` | `string`  | `true`   | `the id of the beneficiary`       |


#### `Update a beneficiary`

> This method is used for updating a Beneficiary.

```ts
const data = {
  firstName: 'efe',
  lastName: 'ebieroma',
  email: 'efe@hahaha.com',
  phoneNumber: '09090909090',
  accountHolderName: 'efe stephen ebieroma',
  bank: {
    name: 'Wema Bank',
    code: '06',
    sortCode: '928927',
    branch: 'Ota',
    address: {
      country: 'GB',
      state: 'Lagos',
      zip: '123455',
      city: 'Paris',
      street: '12,josephus',
    },
  },
  address: {
    country: 'GB',
    state: 'Lagos',
    zip: '123455',
    city: 'Paris',
    street: '12,josephus',
  },
  type: 'individual',
  currency: 'GBP',
  paymentDestination: 'bank_account',
  uniqueIdentifier: '4',
  businessId: '627fefbe5a65ec99ba9af0be',
  destinationAddress: 'AKoka, yaba, lagos',
  beneficiaryId: '618fefbe4a68ec99ba5af0be',
};

const updateBen = fincra.beneficiary.updateBeneficiary(data);
```

- More details about the parameters for the above method [here](https://docs.fincra.com/reference/update-a-beneficiary)

#### `Delete a beneficiary`

> This method is used for deleting a beneficiary.

```ts
const data = {
  businessId: '627fefbe5a65ec99ba9af0be',
  beneficiaryId: '618fefbe4a68ec99ba5af0be',
};

const deleteBen = fincra.beneficiary.deleteBeneficiary(data);
```

#### Parameters supported

| Parameters      | Data type | Required | Description                       |
| --------------- | --------- | -------- | --------------------------------- |
| `businessId`    | `string`  | `true`   | `the business unique identifier`. |
| `beneficiaryId` | `string`  | `true`   | `the id of the beneficiary`       |


### Chargebacks

> the chargeback service

#### `List chargebacks`

> This method lets you list all the chargebacks incurred on your account

```ts
const businessId = '618fefbe5a65ec99ba9af0de';
const listCharge = fincra.chargebacks.listChargeBacks(businessId);
```

#### Parameters supported

| Parameters   | Data type | Required | Description                       |
| ------------ | --------- | -------- | --------------------------------- |
| `businessId` | `string`  | `true`   | `the business unique identifier`. |


#### `Accept a chargeback`

> This service lets you accept a chargeback

```ts
const data = {
  chargeBackId: '62c4bbdd18ec6d3b113fe941',
  businessId: '627fefbe5a65ec99ba9af0be',
};

const acceptCharge = fincra.chargebacks.acceptChargeBack(acceptCharge);
```

#### Parameters supported

| Parameters     | Data type | Required | Description                         |
| -------------- | --------- | -------- | ----------------------------------- |
| `businessId`   | `string`  | `true`   | `the business unique identifier`.   |
| `chargeBackId` | `string`  | `true`   | `the id of the specific chargeback` |


#### `Reject a chargeback`

> This method lets you reject a chargeback

```ts
const data = {
  businessId: '9cc51d7f-4357-460d-bbe7-2554d3dd6986',
  chargeBackId: '08228fb8-b24f-4217-b2e5-73287b5fcb6e',
  reason: 'suspected duplicate chargeback',
};

const rejectCharge = fincra.chargebacks.rejectChargeBack(data);
```

#### Parameters supported

| Parameters     | Data type | Required | Description                       |
| -------------- | --------- | -------- | --------------------------------- |
| `businessId`   | `string`  | `true`   | `the business unique identifier`. |
| `chargeBackId` | `string`  | `true`   | `the current page`                |
| `reason`       | `string`  | `true`   | `the reason for the chargeback`   |

### Wallets
> The wallet service consists of endpoints that provide information such as account balances, wallet number of a wallet, or wallets for a business. With the wallet service, You can manage the account balance for your business and that of your subaccounts. 
#### `Get wallets`
> This service lists all wallets belonging to a business.

```ts
const businessId = '627fefbe5a65ec99ba9af0be';
const wallets = fincra.wallet.listWallet(businessId);
```

#### Parameters supported

| Parameters   | Data type | Required | Description                        |
| ------------ | --------- | -------- | ---------------------------------- |
| `businessId` | `string`  | `true`   | ` the business unique identifier`. |
