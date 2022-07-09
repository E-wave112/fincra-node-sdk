# Fincra node SDK

A community suported NodeJS SDK for developers.

## Table of content
- [Getting Started](#getting-started)
- [Installation](#installation)
- [Usage](#usage)
- [Available Services exposed by the SDK](#available-services-exposed-by-the-sdk)

## Getting Started

- To get started with this SDK, create an [account]((https://api.fincra.com/)) on Fincra or a [sandbox account](https://sandboxapi.fincra.com/) if you haven't already.
- You can then retrieve your API keys from your [sandbox dashboard](https://sandbox.fincra.com/dashboard) or [account dashboard.](https://app.fincra.com/).

## Installation
This SDK can be installed with `npm` or `yarn`.

Using `npm`,
``` bash
npm install fincra-node-sdk
```
Using `yarn`,

``` bash
yarn add fincra-node-sdk
```

## Usage
With JavaScript,

```js
const Fincra = require('fincra-node-sdk');  // JavaScript
import Fincra from 'fincra-node-sdk';   // Typescript
```


Instantiate the Fincra class

```js
const fincra = new Fincra(PUBLIC_KEY, PRIVATE_KEY, { sandbox: true });
```

**Note:**

- The sandbox is optional, if you don't specify it, it will default to false, and you will be using the [production(live)](https://api.fincra.com/) API. For example:

```javascript
const fincra = new Fincra(PUBLIC_KEY, PRIVATE_KEY);
```

- For more information about the services exposed by the SDK, please refer to the [documentation](https://docs.fincra.com/docs).
- Be sure to keep your API Credentials securely in [environment variables](https://www.twilio.com/blog/working-with-environment-variables-in-node-js-html).

## Available Services exposed by the SDK
The following methods are available with this SDK

1. [Business](#1-business)

- [Get Business details](#get-business-details)

2. [Beneficiaries](#2-beneficiaries)

- [Create a beneficiary](#create-a-beneficiary)
- [Fetch a beneficiary](#fetch-beneficiaries)
- [List beneficiaries](#list-beneficiaries)
- [Update a beneficiary](#update-a-beneficiary)
- [Delete a beneficiary](#delete-a-beneficiary)

3. [Chargebacks](#3-chargebacks)

- [List chargebacks](#list-chargebacks)
- [Accept a chargeback](#accept-a-chargeback)
- [Reject a chargeback](#reject-a-chargeback)

4. [Collections](#4-collections)

- [Pay With Transfer](#pay-with-transfer)
- [List Collection for a main Virtual Account](#list-collection-for-a-main-virtual-account)
- [Fetch a collection for an additional virtual account](#fetch-a-collection-for-an-additional-virtual-account)

5. [Conversions](#5-conversions)

6. [Payouts](#6-payouts)

7. [Quotes](#7-quotes)

8. [Subaccounts](#8-subaccounts)

9. [Verification](#9-verification)

10. [Virtual-accounts](#10-virtual-accounts)

11. [Wallets](#11-wallets)

- [Get Wallets](#get-wallets)
<!-- add the business -->

### 1. Business

A business represents the merchant or any entity making use of this SDK.

#### Get business details

<!-- add a description -->

This method lets you retrieves the unique Identifier of your business and other information such as your email etc.

The unique identifier(businessId) allows your business to access other services.

```ts
const business = fincra.business.getBusinessId();
```

### 2. Beneficiaries

The beneficiary’s service allows the business to create beneficiaries that can receive payments.
> **NOTE**: Beneficiaries and recipients are used interchangeably in this documentation.

#### Create a beneficiary

This method is used for creating a Beneficiary.

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

#### List beneficiaries

<!-- add a description -->

This method provides the ability to retrieve a list of beneficiaries attached to a business.

```ts
const data = {
  businessId: '617fefbe5a65ec99ba9af0ce',
  page: '1',
  perPage: '10',
};
const listBen = fincra.beneficiary.listBeneficiaries(data);
```

#### Parameters supported

| **Parameters**   | **Data type** | **Required** | **Description**                                         |
| ------------ | --------- | -------- | --------------------------------------------------- |
| `businessId` | string | true  | The business unique identifier.                   |
| `page`       | string  | false  | The current page.                                 |
| `perPage`    | string  | false  | The number of beneficiaries to be viewed per page. |

#### Fetch beneficiaries

<!-- add a description -->

This method is used for retrieving a single beneficiary attached to a business.

```ts
const data = {
  businessId: '617fefbe4a68ec99ba6af0be',
  beneficiaryId: '618fefbe4a68ec99ba5af0be',
};

const fetchBen = fincra.beneficiary.fetchBeneficiary(data);
```

#### Parameters supported

| **Parameters**      | **Data type** | **Required** | **Description**                       |
| --------------- | --------- | -------- | --------------------------------- |
| `businessId`    | string  | true  | The business unique identifier. |
| `beneficiaryId` | string  | true   | The id of the beneficiary       |

#### Update a beneficiary

This method is used for updating a Beneficiary.

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

#### Delete a beneficiary

This method is used for deleting a beneficiary.

```ts
const data = {
  businessId: '627fefbe5a65ec99ba9af0be',
  beneficiaryId: '618fefbe4a68ec99ba5af0be',
};

const deleteBen = fincra.beneficiary.deleteBeneficiary(data);
```

#### Parameters supported

| **Parameters**      | **Data type** | **Required** | **Description**                       |
| --------------- | --------- | -------- | --------------------------------- |
| `businessId`    | string` | true   | The business unique identifier. |
| `beneficiaryId` | string  | true   | The id of the beneficiary.      |

### 3. Chargebacks

The chargeback service.

#### List chargebacks

This method lets you list all the chargebacks incurred on your account.

```ts
const businessId = '618fefbe5a65ec99ba9af0de';
const listCharge = fincra.chargebacks.listChargeBacks(businessId);
```

#### Parameters supported

| **Parameters**   | **Data type** | **Required** | **Description**                       |
| ------------ | --------- | -------- | --------------------------------- |
| `businessId` | string  | true   | The business unique identifier. |

#### Accept a chargeback

This service lets you accept a chargeback

```ts
const data = {
  chargeBackId: '62c4bbdd18ec6d3b113fe941',
  businessId: '627fefbe5a65ec99ba9af0be',
};

const acceptCharge = fincra.chargebacks.acceptChargeBack(acceptCharge);
```

#### Parameters supported

| **Parameters**     | **Data type** | **Required** | **Description**                         |
| -------------- | --------- | -------- | ----------------------------------- |
| `businessId`   | string  | true  | The business unique identifier.   |
| `chargeBackId` | string  | true   | The id of the specific chargeback. |

#### Reject a chargeback

This method lets you reject a chargeback

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

### 4. Collections

> The Collections service enables you to perform actions such as viewing all deposits that come into your account etc.

#### `Pay With Transfer`

> This method lets you create a temporary virtual account that can be used to receive payments over a period of time

```ts
const data = {
  expiresAt: '30',
  name: 'Edmond Kirsch',
  merchantReference: '627fefbe5a65ec99ba9cf0fe',
};

const payWithTransfer = fincra.collection.payWithTransfer(data);
```

#### Parameters supported

| **Parameters**          | **Data type** | **Required** | **Description**                                                 |
| ------------------- | --------- | -------- | ----------------------------------------------------------- |
| `expiresAt`         | string  | true   | The expiry of the virtual account in minutes.             |
| `name`              | string | false  | The name that should be on the account.                    |
| `merchantReference` | string  | false | The unique identifier of the transaction on your system . |

#### List Collection for a main Virtual Account

This service can be used to view both a single or multiple collections of a main virtual account

```ts
const data = {
  business: '627fefbe5a65ec99ba9af0be',
  reference: '677gefbe5a65ec99ba9af3be',
  page: '1',
  perPage: '30',
};
const listCollection = fincra.collection.listCollectionMain(data);
```

#### Parameters supported

| **Parameters**  | **Data type** | **Required** | **Description**                                       |
| ----------- | --------- | -------- | ------------------------------------------------- |
| `business`  | string  | true   | The business unique identifier.                 |
| `reference` | string  | false  | The reference of the transaction.               |
| `page`      | string  | false  | The current page.                                |
| `perPage`   | string  | false  | The number of collections to be viewed per page. |

#### Fetch a collection for an additional virtual account

This method is used for retrieving a single collection of an additional virtual account by a reference

```ts
const data = {
  reference: '77gefbe5a65ec99ba9af3be',
  business: '627fefbe5a65ec99ba9af0be',
};
const fetchCollection = fincra.collection.fetchCollectionAddition(data);
```

#### Parameters supported

| **Parameters**  | **Data type** | **Required** | **Description**                               |
| ----------- | --------- | -------- | ----------------------------------------- |
| `reference` | string  | true   | The unique reference of the collection. |
| `business`  | string  | false  | The business unique identifier.         |

### 5. Wallets

The wallet service consists of endpoints that provide information such as account balances, wallet number of a wallet, or wallets for a business. With the wallet service, You can manage the account balance for your business and that of your subaccounts.

#### Get wallets

This method lists all wallets belonging to a business.

```ts
const businessId = '627fefbe5a65ec99ba9af0be';
const wallets = fincra.wallet.listWallet(businessId);
```

#### Parameters supported

| **Parameters**   | **Data type** | **Required** | **Description**                        |
| ------------ | --------- | -------- | ---------------------------------- |
| `businessId` | string  | true   | The business unique identifier. |

#### Get wallets of specific merchants
This method lists the wallets od a specified merchant.

#### Parameters supported

| **Parameters**   | **Data type** | **Required** | **Description**                        |
| ------------ | --------- | -------- | ---------------------------------- |
| `businessId` | string  | true   | The business unique identifier. |

#### Return a wallet object details 
This method returns a wallet object of a specified wallet.

#### Parameters supported

| **Parameters**   | **Data type** | **Required** | **Description**                        |
| ------------ | --------- | -------- | ---------------------------------- |
| `walletId` | string  | true   | The business unique identifier. |

### 6. Payouts

#### 