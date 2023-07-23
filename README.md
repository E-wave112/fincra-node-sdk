# Fincra-node-sdk

[![CircleCI](https://dl.circleci.com/status-badge/img/gh/E-wave112/fincra-node-sdk/tree/main.svg?style=shield)](https://dl.circleci.com/status-badge/redirect/gh/E-wave112/fincra-node-sdk/tree/main)
![npm](https://img.shields.io/npm/v/fincra-node-sdk) ![npm](https://img.shields.io/npm/dt/fincra-node-sdk) ![NPM](https://img.shields.io/npm/l/fincra-node-sdk) ![npm bundle size](https://img.shields.io/bundlephobia/min/fincra-node-sdk)

A community supported NodeJS SDK that enables developers to build fintech products securely and seamlessy leveraging [Fincra's](https://fincra.com/) API.

## Table of content

- [Getting Started](#getting-started)
- [Installation](#installation)
- [Usage](#usage)
- [Available Services exposed by the SDK](#available-services-exposed-by-the-sdk)

## Getting Started

- To get started with this SDK, create an [account](https://app.fincra.com/) on Fincra or a [sandbox account](https://sandbox.fincra.com/) if you haven't already.
- You can then retrieve your API keys from your [sandbox dashboard](https://sandbox.fincra.com/dashboard) or [account dashboard.](https://app.fincra.com/).

#### Want to contribute?

Contributions are welcome! Kindly refer to the [contribution guidelines](https://github.com/E-wave112/fincra-node-sdk/blob/main/CONTRIBUTING.md).

## Installation

This SDK can be installed with `npm` or `yarn`.

Using `npm`,

```
npm install fincra-node-sdk
```

Using `yarn`,

```bash
yarn add fincra-node-sdk
```

## Usage

```js
const { Fincra } = require('fincra-node-sdk'); // JavaScript
import { Fincra } from 'fincra-node-sdk'; // Typescript
```

Instantiate the Fincra class

```js
const fincra = new Fincra(PUBLIC_KEY, PRIVATE_KEY, { sandbox: true });
```

**Note:**

- The sandbox field is optional, if you don't specify it, it will default to false, and you will be using the [production(live)](https://api.fincra.com/) API. For example:

```javascript
const fincra = new Fincra(PUBLIC_KEY, PRIVATE_KEY);
```

- For more information about the services exposed by the SDK, please refer to the [documentation](https://docs.fincra.com/docs).
- Be sure to keep your API Credentials securely in [environment variables](https://www.twilio.com/blog/working-with-environment-variables-in-node-js-html).

## Available Services exposed by the SDK

The following services are available with this SDK

**1**. [**Business**](#1-business)

- [Get Business details](#get-business-details)

**2**. [**Beneficiaries**](#2-beneficiaries)

- [Create a beneficiary](#create-a-beneficiary)
- [Fetch a beneficiary](#fetch-beneficiaries)
- [List beneficiaries](#list-beneficiaries)
- [Update a beneficiary](#update-a-beneficiary)
- [Delete a beneficiary](#delete-a-beneficiary)

**3**. [**Chargebacks**](#3-chargebacks)

- [List chargebacks](#list-chargebacks)
- [Accept a chargeback](#accept-a-chargeback)
- [Reject a chargeback](#reject-a-chargeback)

**4**. [**Collections**](#4-collections)

- [Pay With Transfer](#pay-with-transfer)
- [List Collection for a main Virtual Account](#list-collection-for-a-main-virtual-account)
- [List Collection for Additional Virtual Accounts](#list-collection-for-additional-virtual-accounts)
- [Fetch a collection for an additional virtual account](#fetch-a-collection-for-an-additional-virtual-account)

**5**. [**Conversions**](#5-conversions)

- [Convert a currency](#convert-a-currency)
- [Fetch a conversion](#fetch-a-conversion)
- [List conversions](#list-conversions)

**6**. [**Payouts**](#6-payouts)

- [Wallet to wallet transfer](#wallet-to-wallet-transfer)
- [Create a Payout](#create-a-payout)
- [Upload a payout(transaction) document](#upload-transaction-document)
- [Fetch a payout by reference](#fetch-a-payout-by-reference)
- [Fetch a payout by Customer Reference](#fetch-a-payout-by-customer-reference)
- [List Banks](#list-banks)
- [List Payouts](#list-payouts)

**7**. [**Quotes**](#7-quotes)

- [Create a quote](#create-a-quote)

**8**. [**Subaccounts**](#8-subaccounts)

- [Create a subaccount](#create-a-subaccount)
- [List subaccounts](#list-sub-accounts)
- [Fetch a subaccount](#fetch-a-sub-account)
- [Update a subaccount](#update-a-sub-account)

**9**. [**Verification**](#9-verification)

- [Verify account Number](#verify-account-number)
- [Verify Payment](#verify-payment)
- [Resolve BVN](#resolve-bvn)

**10**. [**Virtual-accounts**](#10-virtual-accounts)

- [Create a virtual account](#create-a-virtual-account)
- [Create Individual virtual account for your sub-account (Instant Approval)](#create-individual-virtual-account-for-your-sub-account-instant-approval)
- [Create individual virtual account for your sub-account](#create-individual-virtual-account-for-your-sub-account)
- [Create corporate virtual account for your sub-account](#create-corporate-virtual-account-for-your-sub-account)
- [List merchant virtual accounts](#list-merchant-virtual-accounts)
- [List virtual account requests](#list-virtual-account-requests)
- [Fetch a virtual account by currency](#fetch-a-virtual-account-by-currency)
- [Fetch a single virtual account](#fetch-a-single-virtual-account)
- [List Sub-account Virtual Accounts](#list-sub-account-virtual-accounts)
- [Deactivate a Virtual Account](#deactivate-a-virtual-account)

**11**. [**Wallets**](#11-wallets)

- [List wallets](#list-wallets)
- [Fetch a wallet](#fetch-a-wallet)
- [List Wallet Logs](#list-wallet-logs)
<!-- add the business -->

### 1. Business

A business represents the merchant or any entity making use of this SDK.

#### Get business details

<!-- add a description -->

This method lets you retrieves the unique Identifier of your business and other information such as your email etc.

The unique identifier(businessId) allows your business to access other services.

```ts
const business = await fincra.business.getBusinessId();
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

const createBen = await fincra.beneficiary.createBeneficiary(data);
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
const listBen = await fincra.beneficiary.listBeneficiaries(data);
```

#### Parameters supported

| **Parameters** | **Data type** | **Required** | **Description**                                    |
| -------------- | ------------- | ------------ | -------------------------------------------------- |
| `businessId`   | string        | true         | The business unique identifier.                    |
| `page`         | string        | false        | The current page.                                  |
| `perPage`      | string        | false        | The number of beneficiaries to be viewed per page. |

#### Fetch beneficiaries

<!-- add a description -->

This method is used for retrieving a single beneficiary attached to a business.

```ts
const data = {
  businessId: '617fefbe4a68ec99ba6af0be',
  beneficiaryId: '618fefbe4a68ec99ba5af0be',
};

const fetchBen = await fincra.beneficiary.fetchBeneficiary(data);
```

#### Parameters supported

| **Parameters**  | **Data type** | **Required** | **Description**                 |
| --------------- | ------------- | ------------ | ------------------------------- |
| `businessId`    | string        | true         | The business unique identifier. |
| `beneficiaryId` | string        | true         | The id of the beneficiary       |

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

const updateBen = await fincra.beneficiary.updateBeneficiary(data);
```

- More details about the parameters for the above method [here](https://docs.fincra.com/reference/update-a-beneficiary)

#### Delete a beneficiary

This method is used for deleting a beneficiary.

```ts
const data = {
  businessId: '627fefbe5a65ec99ba9af0be',
  beneficiaryId: '618fefbe4a68ec99ba5af0be',
};

const deleteBen = await fincra.beneficiary.deleteBeneficiary(data);
```

#### Parameters supported

| **Parameters**  | **Data type** | **Required** | **Description**                 |
| --------------- | ------------- | ------------ | ------------------------------- |
| `businessId`    | string`       | true         | The business unique identifier. |
| `beneficiaryId` | string        | true         | The id of the beneficiary.      |

### 3. Chargebacks

The chargeback service.

#### List chargebacks

This method lets you list all the chargebacks incurred on your account.

```ts
const businessId = '618fefbe5a65ec99ba9af0de';
const listCharge = await fincra.chargebacks.listChargeBacks(businessId);
```

#### Parameters supported

| **Parameters** | **Data type** | **Required** | **Description**                 |
| -------------- | ------------- | ------------ | ------------------------------- |
| `businessId`   | string        | true         | The business unique identifier. |

#### Accept a chargeback

This method lets you accept a chargeback

```ts
const data = {
  chargeBackId: '62c4bbdd18ec6d3b113fe941',
  businessId: '627fefbe5a65ec99ba9af0be',
};

const acceptCharge = await fincra.chargebacks.acceptChargeBack(acceptCharge);
```

#### Parameters supported

| **Parameters** | **Data type** | **Required** | **Description**                    |
| -------------- | ------------- | ------------ | ---------------------------------- |
| `businessId`   | string        | true         | The business unique identifier.    |
| `chargeBackId` | string        | true         | The id of the specific chargeback. |

#### Reject a chargeback

This method lets you reject a chargeback

```ts
const data = {
  businessId: '9cc51d7f-4357-460d-bbe7-2554d3dd6986',
  chargeBackId: '08228fb8-b24f-4217-b2e5-73287b5fcb6e',
  reason: 'suspected duplicate chargeback',
};

const rejectCharge = await fincra.chargebacks.rejectChargeBack(data);
```

#### Parameters supported

| Parameters     | Data type | Required | Description                       |
| -------------- | --------- | -------- | --------------------------------- |
| `businessId`   | `string`  | `true`   | `the business unique identifier`. |
| `chargeBackId` | `string`  | `true`   | `the current page`                |
| `reason`       | `string`  | `true`   | `the reason for the chargeback`   |

### 4. Collections

The Collections service enables you to perform actions such as viewing all deposits that come into your account etc.

#### `Pay With Transfer`

This method lets you create a temporary virtual account that can be used to receive payments over a period of time

```ts
const data = {
  expiresAt: '30',
  name: 'Edmond Kirsch',
  merchantReference: '627fefbe5a65ec99ba9cf0fe',
};

const payWithTransfer = await fincra.collection.payWithTransfer(data);
```

#### Parameters supported

| **Parameters**      | **Data type** | **Required** | **Description**                                           |
| ------------------- | ------------- | ------------ | --------------------------------------------------------- |
| `expiresAt`         | string        | true         | The expiry of the virtual account in minutes.             |
| `name`              | string        | false        | The name that should be on the account.                   |
| `merchantReference` | string        | false        | The unique identifier of the transaction on your system . |

#### List Collection for a main Virtual Account

This service can be used to view both a single or multiple collections of a main virtual account

```ts
const data = {
  business: '627fefbe5a65ec99ba9af0be',
  reference: '677gefbe5a65ec99ba9af3be',
  page: '1',
  perPage: '30',
};
const listCollection = await fincra.collection.listCollectionMain(data);
```

#### Parameters supported

| **Parameters** | **Data type** | **Required** | **Description**                                  |
| -------------- | ------------- | ------------ | ------------------------------------------------ |
| `business`     | string        | true         | The business unique identifier.                  |
| `reference`    | string        | false        | The reference of the transaction.                |
| `page`         | string        | false        | The current page.                                |
| `perPage`      | string        | false        | The number of collections to be viewed per page. |

#### List Collection for Additional Virtual Accounts

This method is used for getting all collections of an additional virtual account for a business

```ts
const data = {
  status: ['processing'],
  business: '627fefbe5a65ec99ba9af0be',
  sourceCurrency: 'NGN',
  destinationCurrency: 'EUR',
  subAccount: '62ba8f973acaf73df03238aa',
  page: '1',
  perPage: '15',
  dateFrom: '2022-08-19T00:00:00.000Z',
  dateTo: '2022-08-30T00:00:00.000Z',
};
const listAdditional = await fincra.collection.listCollectionAdditional(data);
```

#### Parameters supported

| **Parameters**        | **Data type** | **Required** | **Description**                                                         |
| --------------------- | ------------- | ------------ | ----------------------------------------------------------------------- |
| `business`            | string        | true         | The business unique identifier.                                         |
| `status`              | array         | true         | The status of the collection e.g ["processing", "failed", "successful]. |
| `sourceCurrency`      | string        | true         | The currency the payments was sent in.                                  |
| `destinationCurrency` | string        | true         | The currency the recipient receives.                                    |
| `subAccount`          | string        | true         | The ID of the subAccount.                                               |
| `page`                | string        | false        | Specify exactly what page you want to retrieve.                         |
| `perPage`             | string        | false        | How many records you want to retrieve per page.                         |
| `dateFrom`            | string        | true         | The start date. This must be in ISO 8601 date format(YYYY-MM-DD).       |
| `dateTo`              | string        | true         | The end date.This must be in ISO 8601 date format(YYYY-MM-DD).          |

#### Fetch a collection for an additional virtual account

This method is used for retrieving a single collection of an additional virtual account by a reference

```ts
const data = {
  reference: '77gefbe5a65ec99ba9af3be',
  business: '627fefbe5a65ec99ba9af0be',
};
const fetchCollection = await fincra.collection.fetchCollectionAddition(data);
```

#### Parameters supported

| **Parameters** | **Data type** | **Required** | **Description**                         |
| -------------- | ------------- | ------------ | --------------------------------------- |
| `reference`    | string        | true         | The unique reference of the collection. |
| `business`     | string        | false        | The business unique identifier.         |

### 5. Conversions

The Conversions service provides methods that can be used to initiate conversion between two different currencies and also fetch conversions previously generated.

#### Convert a currency

This method can convert one currency to another provided that it's a supported conversion currency e.g NGN to USD.

```ts
const data = {
  business: '62c5c5876805783477ef9f7a',
  quoteReference: '123456789',
};

const createConvert = await fincra.conversion.createConversion(data);
```

#### Parameters supported

| **Parameters**   | **Data type** | **Required** | **Description**                                |
| ---------------- | ------------- | ------------ | ---------------------------------------------- |
| `business`       | string        | true         | The business unique identifier.                |
| `quoteReference` | string        | true         | This is the reference generated for the quote. |

#### Fetch a conversion

This method fetches a specific conversion performed by a parent Business or sub account.

```ts
const conversionId = '62c5c5876805783477ef9f7a';
const fetchConvert = await fincra.conversion.fetchConversion(conversionId);
```

#### Parameters supported

| **Parameters** | **Data type** | **Required** | **Description**                  |
| -------------- | ------------- | ------------ | -------------------------------- |
| `conversionId` | string        | true         | The id of a specific conversion. |

#### List conversions

This method provides a list of all conversions performed by a business.

```ts
const businessId = '62c5c5876805783477ef9f7a';
const listBusinessConversions = await fincra.conversion.getBusinessConversions(
  businessId
);
```

#### Parameters supported

| **Parameters** | **Data type** | **Required** | **Description**                 |
| -------------- | ------------- | ------------ | ------------------------------- |
| `businessId`   | string        | true         | The business unique identifier. |

### 6. Payouts

The payout service can be used to initiate payouts to supported payment destinations.

#### Create a Payout

This method lets you make payouts to bank accounts and mobile money wallets

```ts
const data = {
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
      issuedBy: 'SEC',
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
  business: '62c5c5876805783477ef9f7a',
  description: 'monthly payout',
  customerReference: '00x123ab',
  paymentScheme: 'sepa',
  quoteReference: 'wwwqqereqa',
};

const createPayout = await fincra.payouts.createPayout(data);
```

- More details about the parameters for the above method [here](https://docs.fincra.com/reference/payout-1)

#### Wallet to wallet transfer

This method lets you transfer funds from your wallet to the wallet of another user on our platform

```ts
const data = {
  amount: '4000',
  business: '62c5c5876805783477ef9f7a',
  customerReference: '677gefbe5a65ec99ba9af3be',
  description: 'For the month',
  beneficiaryWalletNumber: '11234568943',
};
const walletToWallet = await fincra.payouts.walletToWalletTransfer(data);
```

#### Parameters Supported

| **Parameters**            | **Data type** | **Required** | **Description**                                                                  |
| ------------------------- | ------------- | ------------ | -------------------------------------------------------------------------------- |
| `amount`                  | string        | true         | The value that is to be transferred from the source currency wallet.             |
| `business`                | string        | true         | The business unique identifier.                                                  |
| `customerReference`       | string        | true         | The reference of the transaction.                                                |
| `description`             | string        | true         | The purpose of payment.                                                          |
| `beneficiaryWalletNumber` | string        | true         | This is the unique wallet number of the beneficiary you want to make payment to. |

#### List payouts

This method lets a business view all her payouts and that of her subaccounts

```ts
const data = {
  status: ['processing'],
  business: '627fefbe5a65ec99ba9af0be',
  sourceCurrency: 'NGN',
  destinationCurrency: 'EUR',
  subAccount: '62ba8f973acaf73df03238aa',
  page: '1',
  perPage: '15',
  dateFrom: '2022-08-19T00:00:00.000Z',
  dateTo: '2022-08-30T00:00:00.000Z',
};

const allPayout = await fincra.payouts.listPayouts(data);
```

#### Parameters supported

| **Parameters**        | **Data type** | **Required** | **Description**                                                         |
| --------------------- | ------------- | ------------ | ----------------------------------------------------------------------- |
| `business`            | string        | true         | The business unique identifier.                                         |
| `status`              | array         | true         | The status of the collection e.g ["processing", "failed", "successful]. |
| `sourceCurrency`      | string        | true         | The currency the payments was sent in.                                  |
| `destinationCurrency` | string        | true         | The currency the recipient receives.                                    |
| `subAccount`          | string        | true         | The ID of the subAccount.                                               |
| `page`                | string        | false        | Specify exactly what page you want to retrieve.                         |
| `perPage`             | string        | false        | How many records you want to retrieve per page.                         |
| `dateFrom`            | string        | true         | The start date. This must be in ISO 8601 date format(YYYY-MM-DD).       |
| `dateTo`              | string        | true         | The end date.This must be in ISO 8601 date format(YYYY-MM-DD).          |

#### Upload transaction document

This method lets you process a payout that requires the upload of a document.

```ts
const data = {
  name: 'salaried',
  type: 'transaction',
  reference: '29012939483828ej',
  file: 'data:text/html;name=Zoom%20Clone.html;base64,PGh0bWwgbGFuZz0iZW4iPjxoZWFkPgo8bWV0YSBodHRwLWVxdWl2PSJjb250ZW50LXR5cGUiIGNvbnRlbnQ9InRleHQvaHRtbDsgY2hhcnNldD1VVEYtOCI+CiAgICA8bWV0YSBjaGFyc2V0PSJVVEYtOCI+CiAgICA8bWV0YSBuYW1lPSJ2aWV3cG9ydCIgY29udGVudD0id2lkdGg9ZGV2aWNlLXdpZHRoLCBpbml0aWFsLXNjYWxlPTEuMCI+CiAgICA8bGluayByZWw9InN0eWxlc2hlZXQiIGhyZWY9Ilpvb20lMjBDbG9uZV9maWxlcy9zdHlsZS5jc3MiPgogICAgPHRpdGxlPlpvb20gQ2xvbmU8L3RpdGxlPgogICAgPHNjcmlwdCBzcmM9Ilpvb20lMjBDbG9uZV9maWxlcy9zb2NrZXQuanMiPjwvc2NyaXB0PgogICAgPHNjcmlwdCBzcmM9Ilpvb20lMjBDbG9uZV9maWxlcy9wZWVyanMuanMiPjwvc2NyaXB0PgogICAgPHNjcmlwdD4KICAgICAgICBjb25zdCBST09NX0lEID0gIjZiNzk5ZTUxLWE1MDUtNDlmYi04ZGViLTgxMDRhOGU5Y2QwYyIKICAgIDwvc2NyaXB0Pgo8L2hlYWQ+Cjxib2R5PgogICAKICAgIAogICAgPCEtLSBtYWluIHNlY3Rpb24gZm9yIG1ldGEgdmlkZW8gZGF0YSAtLT4KICAgIDxkaXYgY2xhc3M9Im1haW4iIHN0eWxlPSJoZWlnaHQiPgogICAgICAgIAogICAgPGRpdiBjbGFzcz0ibWFpbl9fbGVmdCI+CiAgICAgICAgPGRpdiBjbGFzcz0ibWFpbl9fdmlkZW9zIj4KICAgICAgICA8ZGl2IGlkPSJ2aWRlby1ncmlkIj4KICAgICAgICAgPHZpZGVvPjwvdmlkZW8+PC9kaXY+CiAgICA8L2Rpdj4KICAgIDxkaXYgY2xhc3M9Im1haW5fX2NvbnRyb2xzIj4KICAgICAgICAKCgogICAgPC9kaXY+CjwvZGl2PgoKICAgIDxkaXYgY2xhc3M9Im1haW5fX3JpZ2h0Ij4KICAgICAgICA8ZGl2IGNsYXNzPSJtYWluX19oZWFkZXIiPjwvZGl2PgogICAgICAgIDxoNj5DaGF0PC9oNj4KICAgIDwvZGl2Pgo8L2Rpdj4KICAgIDxzY3JpcHQgc3JjPSJab29tJTIwQ2xvbmVfZmlsZXMvc2NyaXB0LmpzIj48L3NjcmlwdD4KCjwvYm9keT48L2h0bWw+',
};
const uploadPayout = await fincra.payouts.uploadTransactionDocument(data);
```

#### Parameters Supported

| **Parameters** | **Data type** | **Required** | **Description**                                                                                                                                                       |
| -------------- | ------------- | ------------ | --------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| `name`         | string        | true         | The name of the document.                                                                                                                                             |
| `type`         | string        | true         | The type of document required to complete the transaction. After the payout has been initiated, this can be obtained from the response object of the payout response. |
| `reference`    | string        | true         | This is the unique reference generated for the payout.                                                                                                                |
| `file`         | string        | true         | The document required encoded to a base64 format.                                                                                                                     |

#### Fetch a payout by reference

This method lets you retrieve and view a specific payout.

```ts
const transactionReference = '29012939483828ej';
const fetchPayout = await fincra.payouts.fetchPayout(transactionReference);
```

#### Parameters Supported

| Parameters             | Data type | Required | Description                         |
| ---------------------- | --------- | -------- | ----------------------------------- |
| `transactionReference` | string    | true     | The unique reference of the payout. |

#### Fetch a payout by Customer Reference

This method lets you retrieve and view a specific payout by the customer reference

```ts
const customerReference = '677gefbe5a65ec99ba9af3be';
const fetchCustomer = await fincra.payouts.fetchCustomerPayout(
  customerReference
);
```

#### Parameters Supported

| **Parameters**      | **Data type** | **Required** | **Description**                                     |
| ------------------- | ------------- | ------------ | --------------------------------------------------- |
| `customerReference` | string        | true         | The transaction's unique identifier on your system. |

#### List Banks

This method lets you view a list of banks and mobile money wallet providers, together with their details such as code, swiftCode, and Bic.

```ts
const banks = await fincra.payouts.listBanks();
```

### 7. Quotes

The Quotes service provides a method that allows you to generate quotes for Real-time transactions occurring on your integration.

#### Create a quote

This method is used for generating a quote.

```ts
const data = {
  action: 'payment',
  amount: '2000',
  beneficiaryType: 'next-of-kin',
  business: '62c5c5876805783477ef9f7a',
  destinationCurrency: 'NGN',
  feeBearer: 'customer',
  paymentDestination: 'bank_account',
  paymentScheme: '',
  sourceCurrency: 'NGN',
  transactionType: 'conversion',
};

const newQuote = await fincra.quote.createQuote(data);
```

#### Parameters Supported

| **Parameters**        | **Data type** | **Required** | **Description**                                                                                                                                                                     |
| --------------------- | ------------- | ------------ | ----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| `action`              | string        | true         | This value can only be "send" for conversions and disbursement.                                                                                                                     |
| `amount`              | string        | true         | The amount you want to send or convert.                                                                                                                                             |
| `beneficiaryType`     | string        | true         | The beneficiary type e.g individual or corporate. This is necessary in order to generate quotes for all African currencies.                                                         |
| `business`            | string        | true         | This is the ID of the business.                                                                                                                                                     |
| `destinationCurrency` | string        | true         | The currency in which the recipient will be receiving funds.                                                                                                                        |
| `feeBearer`           | string        | true         | The bearer of the fees. it is usually one of conversion or business.                                                                                                                |
| `paymentDestination`  | string        | true         | The payment destination. it is one of bank_accounts, fliqpay_wallet, mobile_money_wallet.                                                                                           |
| `paymentScheme`       | string        | true         | This is the valid payment scheme for the destination currency you want to generate a quote for. This is only required when the transaction type is disbursement and not conversion. |
| `sourceCurrency`      | string        | true         | The currency which is used to fund a currency conversion or payout.                                                                                                                 |
| `transactionType`     | string        | true         | The transaction type. It is usually one of conversion or disbursement.                                                                                                              |

### 8. SubAccounts

A subaccount is a user created under your account. The service empowers you to handle various aspects of subaccount logistics: manage accounts, creation of virtual accounts, and so on.

#### Create a subaccount

This method lets you create a sub-account.

```ts
const data = {
  name: 'Edmond',
  businessId: '62c5c5876805783477ef9f7a',
  email: 'edmond@kirsch.com',
  mobile: '07081927814',
  country: 'NG',
};

const newSubAcct = await fincra.subacct.createSubAccount(data);
```

#### Parameters Supported

| **Parameters** | **Data type** | **Required** | **Description**                                                                 |
| -------------- | ------------- | ------------ | ------------------------------------------------------------------------------- |
| `name`         | string        | true         | The name of your customer.                                                      |
| `businessId`   | string        | true         | The ID of the parent business.                                                  |
| `email`        | string        | true         | The email of your customer.                                                     |
| `mobile`       | string        | true         | The mobile number of your customer.                                             |
| `country`      | string        | true         | The country code of your customer according to ISO 3166-1 alpha-2 codes e.g GB. |

#### List sub-accounts

This method lets you view a list of sub-accounts for a business.

```ts
const businessId = '62c5c5876805783477ef9f7a';
const subAccounts = await fincra.subacct.listSubAccounts(businessId);
```

#### Parameters Supported

| **Parameters** | **Data type** | **Required** | **Description**                |
| -------------- | ------------- | ------------ | ------------------------------ |
| `businessId`   | string        | true         | The ID of the parent business. |

#### Fetch a sub-account

This method is used in retrieving one subaccount

```ts
const data = {
  businessId: '62c5c5876805783477ef9f7a',
  subAccountId: '62c631d3118b23e56849c97a',
};

const fetchSub = await fincra.subacct.fetchSubAccount(data);
```

#### Parameters Supported

| **Parameters** | **Data type** | **Required** | **Description**                |
| -------------- | ------------- | ------------ | ------------------------------ |
| `businessId`   | string        | true         | The ID of the parent business. |
| `subAccountId` | string        | true         | The ID of the subaccount.      |

#### Update a sub-account

This method is used to update a subaccount.

```ts
const data = {
  business: '62c5c5876805783477ef9f7a',
  subAccountId: '62c631d3118b23e56849c97a',
  name: 'Eddie',
  email: 'edmond@kirsch.com',
  mobile: '+23470745477514',
};

const updateSub = await fincra.subacct.updateSubAccount(data);
```

#### Parameters Supported

| **Parameters** | **Data type** | **Required** | **Description**                     |
| -------------- | ------------- | ------------ | ----------------------------------- |
| `business`     | string        | true         | The ID of the parent business.      |
| `subAccountId` | string        | true         | The ID of the subaccount.           |
| `name`         | string        | false        | The name of your customer.          |
| `email`        | string        | false        | The email of your customer.         |
| `mobile`       | string        | false        | The mobile number of your customer. |

### 9. Verification

This service lets you make kyc verification, payment verification, and account verification.

#### Verify account number

This method lets you verify a bank account.

```ts
const data = {
  accountNumber: '0410809624',
  bankCode: '011',
  type: 'iban',
  iban: 'GB29 NWBK 6016 1331 9268 19',
};

const verifyBank = await fincra.verify.verifyBankAccount(data);
```

#### Parameters Supported

| **Parameters**  | **Data type** | **Required** | **Description**                                                                                        |
| --------------- | ------------- | ------------ | ------------------------------------------------------------------------------------------------------ |
| `accountNumber` | string        | true         | The account number of the bank.                                                                        |
| `bankCode`      | string        | true         | The bank Code. This is required for NUBAN accounts.                                                    |
| `type`          | string        | false        | The type of the account. It is either iban(international bank accounts) nuban(Nigerian bank accounts). |
| `iban`          | string        | false        | The international bank account number. it is required when type is iban.                               |

#### Verify Payment

This method lets you verify the status of the transaction on the checkout API

```ts
const reference = 'a323f8f8f8f8f8f8';
const verifyPay = await fincra.verify.verifyPayment(reference);
```

#### Parameters Supported

| **Parameters** | **Data type** | **Required** | **Description**                                          |
| -------------- | ------------- | ------------ | -------------------------------------------------------- |
| `reference`    | string        | true         | The unique reference for the transaction on your system. |

#### Resolve BVN

This method lets you verify a bank verification number(BVN)

```ts
const data = {
  bvn: '09292929221',
  business: '627fefbe5a65ec99ba9af0be',
};
const verifyBvn = await fincra.verify.resolveBvn(data);
```

#### Parameters Supported

| **Parameters** | **Data type** | **Required** | **Description**                                                                  |
| -------------- | ------------- | ------------ | -------------------------------------------------------------------------------- |
| `bvn`          | string        | true         | The bank verification number . Must be 11 digits.                                |
| `business`     | string        | true         | The unique identifier or business ID of the parent business or it's sub account. |

### 10. Virtual Accounts

The Virtual account service allows the merchant to create and maintain a foreign currency account also known as the virtual account, which can be used to perform international transactions. Multiple virtual accounts can be requested for the same currency by a merchant.

#### Create a virtual account

This method lets you create a singlevirtual account.

```ts
const data = {
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
    additionalInfo: '',
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

const createVirtual = await fincra.virtualAccount.createVirtualAccount(data);
```

- More details about the parameters for the above method [here](https://docs.fincra.com/reference/request-virtual-accounts)

#### Create Individual virtual account for your sub-account (Instant Approval)

This method lets you create a single virtual account for your sub account.

```ts
const data = {
  currency: 'EUR',
  channel: 'vfd',
  accountType: 'individual',
  businessId: '62c5c5876805783477ef9f7a',
  subAccountId: '62c631d3118b23e56849c97a',
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

const createInstantApproval =
  await fincra.virtualAccount.createInstantApprovalVirtualAccount(data);
```

- More details about the parameters for the above method [here](https://docs.fincra.com/reference/request-individual-virtual-account-for-a-sub-account-1)

#### Create individual virtual account for your sub-account

This method lets you create a single virtual account for your sub account

```ts
const data = {
  currency: 'EUR',
  channel: 'vfd',
  accountType: 'individual',
  businessId: '62c5c5876805783477ef9f7a',
  subAccountId: '62c631d3118b23e56849c97a',
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
const createIndividual =
  await fincra.virtualAccount.createIndividualSubVirtualAccount(data);
```

- More details about the parameters for the above method [here](https://docs.fincra.com/reference/request-individual-virtual-account-for-a-sub-account)

#### Create corporate virtual account for your sub-account

This method lets you create a single corporate virtual account for your sub account

```ts
const createCorporateVirtualAccountObj = {
  businessId: '62c5c5876805783477ef9f7a',
  subAccountId: '62c631d3118b23e56849c97a',
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
    additionalInfo: 'Nada',
    incorporationDate: '2020-09-04',
    businessActivityDescription: 'Tech',
  },
  monthlyVolume: '900',
  entityName: 'Kirsch corp',
  reason: 'cross border payments',
  paymentFlowDescription: 'EURO to GPB',
  channel: 'vfd',
};

const createCorporate =
  await fincra.virtualAccount.createCorporateSubVirtualAccount(data);
```

- More details about the parameters for the above method [here](https://docs.fincra.com/reference/request-virtual-account-for-a-sub-account)

#### List merchant virtual accounts

This method fetches all virtual accounts belonging to a merchant

```ts
const data = {
  currency: 'NGN',
  businessName: 'The Learning Bulletin',
  issuedDate: '2021-10-03',
  requestedDate: '2021-09-03',
  accountNumber: '0234521090',
  status: 'approved',
};
const listMerchant = await fincra.virtualAccount.listMerchantVirtual(data);
```

#### Parameters Supported

| **Parameters**  | **Data type** | **Required** | **Description**                                                                                                                                               |
| --------------- | ------------- | ------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| `currency`      | string        | true         | The virtual account currency.it is usually one of EUR, GPB or NGN.                                                                                            |
| `businessName`  | string        | true         | Specify the name of the business or subaccount you want to retrieve.                                                                                          |
| `issuedDate`    | string        | false        | The date the virtual account was issued . It must be in ISO 8601 date format e.g 2020-07-10 15:00:00.000, which represents the 10th of July 2020 at 3 p.m.    |
| `requestedDate` | string        | false        | The date the virtual account was requested . It must be in ISO 8601 date format e.g 2020-07-10 15:00:00.000, which represents the 10th of July 2020 at 3 p.m. |
| `accountNumber` | string        | false        | The account number of the virtual account.                                                                                                                    |
| `status`        | string        | false        | The status of the virtual account. It can be one of the following: approved, pending, or declined.                                                            |

#### List virtual account requests

This method is used for getting all virtual account requests belonging to a merchant

```ts
const virtualAccountRequests =
  await fincra.virtualAccount.listVirtualAccountRequests();
```

#### Fetch a virtual account by currency

This method is used for retrieving a virtual account that is belongs to a merchant by currency

```ts
const currency = 'NGN';
const fetchVirtualAccount =
  await fincra.virtualAccount.fetchVirtualAccountByCurrency(currency);
```

#### Parameters Supported

| **Parameters** | **Data type** | **Required** | **Description**                                                    |
| -------------- | ------------- | ------------ | ------------------------------------------------------------------ |
| `currency`     | string        | true         | The virtual account currency.it is usually one of EUR, GPB or NGN. |

#### Fetch a single virtual account

This method is used for retrieving a virtual account attached to a merchant.

```ts
const virtualAccountId = '62c1be78a14d91ca07297cfd';
const fetchSingle = await fincra.virtualAccount.fetchSingleVirtualAccount(
  virtualAccountId
);
```

#### Parameters Supported

| **Parameters**     | **Data type** | **Required** | **Description**                |
| ------------------ | ------------- | ------------ | ------------------------------ |
| `virtualAccountId` | string        | true         | The ID of the virtual account. |

#### List Sub-account Virtual Accounts

This method allows you to get a list of virtual accounts that belongs to a subaccount.

```ts
const data = {
  businessId: '62c5c5876805783477ef9f7a',
  subAccountId: '62c631d3118b23e56849c97a',
  page: '1',
  perPage: '20',
};
const listSubVirtualAcct = await fincra.virtualAccount.listSubVirtualAccounts(
  data
);
```

#### Parameters Supported

| **Parameters** | **Data type** | **Required** | **Description**                 |
| -------------- | ------------- | ------------ | ------------------------------- |
| `businessId`   | string        | true         | The ID of the parent business.  |
| `subAccountId` | string        | true         | The ID of the subaccount.       |
| `page`         | string        | false        | The page number.                |
| `perPage`      | string        | false        | The number of records per page. |

#### Deactivate a Virtual Account

This method lets you de-activate a Naira(NGN) virtual account

```ts
const virtualAccountId = '62c1be78a14d91ca07297cfd';
const deactivated = await fincra.virtualAccount.deactivateVirtualAccount(
  virtualAccountId
);
```

#### Parameters Supported

| **Parameters**     | **Data type** | **Required** | **Description**                |
| ------------------ | ------------- | ------------ | ------------------------------ |
| `virtualAccountId` | string        | true         | The ID of the virtual account. |

### 11. Wallets

The wallet service consists of services that provide information such as account balances, wallet number of a wallet, or wallets for a business. With the wallet service, You can manage the account balance for your business and that of your subaccounts.

#### List wallets

This method lists all wallets belonging to a business.

```ts
const businessId = '62c5c5876805783477ef9f7a';
const wallets = await fincra.wallet.listWallet(businessId);
```

#### Parameters Supported

| **Parameters** | **Data type** | **Required** | **Description**         |
| -------------- | ------------- | ------------ | ----------------------- |
| `businessId`   | string        | true         | The ID of the business. |

#### Fetch a wallet

This method provides information to the merchant about wallet balance, numbers, etc regarding a specific wallet.

```ts
const walletId = '62c1be78a14d91ca07297cfd';
const getWallet = await fincra.wallet.getWallet(walletId);
```

#### Parameters Supported

| **Parameters** | **Data type** | **Required** | **Description**       |
| -------------- | ------------- | ------------ | --------------------- |
| `walletId`     | string        | true         | The ID of the wallet. |

#### List Wallet Logs

This method retreives the wallet logs of a merchant's wallet.

```ts
const data = {
  business: '627fefbe5a65ec99ba9af0be',
  amount: '200',
  action: 'credit',
  page: '1',
  perPage: '10',
};
const walletLogs = await fincra.wallet.listWalletLogs(data);
```

#### Parameters Supported

| **Parameters** | **Data type** | **Required** | **Description**                                                    |
| -------------- | ------------- | ------------ | ------------------------------------------------------------------ |
| `business`     | string        | true         | The ID of the business.                                            |
| `amount`       | string        | false        | The amount of the transaction.                                     |
| `action`       | string        | false        | The action of the transaction.it is usually one of credit or debit |
| `page`         | string        | false        | The page number.                                                   |
| `perPage`      | string        | false        | The number of records per page.                                    |
