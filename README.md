# fincra-node-sdk

> A community supported NodeJS sdk that enables developers to build fintech products securely and seamlessy.

## Getting Started

- To start using this sdk, create an account at https://api.fincra.com or a sandbox account at https://sandboxapi.fincra.com if you haven't already.
- You can then retrieve your API keys from your dashboard either from [here](https://app.fincra.com/) or [here](https://sandbox.fincra.com/dashboard).
- Want to contribute to this project?, please read the [Contributing]() guide!

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

[**1**. **Business**](#business)

- [Get Business details](#get-business-details)

[**2**. **Beneficiaries**](#beneficiaries)

[**3**. **Chargebacks**](#chargebacks)

[**4**. **Collections**](#collections)

[**5**. **Conversions**](#conversions)

[**6**. **Identity-verification**](#identity-verification)

[**7**. **Payouts**](#payouts)

[**8**. **Quotes**](#quotes)

[**9**. **Subaccounts**](#subaccounts)

[**10**. **Virtual-accounts**](#virtual-accounts)

[**11**. **Wallets**](#wallets)

- [Get Wallets](#get-wallets)
<!-- add the business -->

### Business

#### Get business details

<!-- add a description -->

- This service lets you retrieves the unique Identifier of your business and other information such as your email etc.

```ts
const business = fincra.business.getBusinessId();
```

### Wallets

#### Get wallets

- This service lists all wallets belonging to a business.

```ts
const wallets = fincra.wallet.listWallet('627fefbe5a65ec99ba9af0be');
```

#### Parameters supported

| Parameters   | Data type | Required | Description                     |
| ------------ | --------- | -------- | ------------------------------- |
| `businessId` | `string`  | `true`   | ` the business id of the user`. |
