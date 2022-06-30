# fincra-node-sdk

> A community supported fincra sdk for developers to use in their NodeJS projects.

## Getting Started

- To start using this sdk, create an account at https://api.fincra.com/ or a sandbox account at https://sandboxapi.fincra.com/ if you haven't already.
- You can then retrieve your API keys from your dashboard [here](https://app.fincra.com/) or [here](https://sandbox.fincra.com/dashboard).

## Installation

```js
npm install fincra-node-sdk
```

### Or with yarn

```js
yarn add fincra-node-sdk
```

## Usage

```js
const Fincra = require('fincra-node-sdk');
```

## Or with Typescript

```ts
import Fincra from 'fincra-node-sdk';
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

- [Business](#business)
- [Beneficiaries](#beneficiaries)
- [Chargebacks](#chargebacks)
- [Collections](#collections)
- [Conversions](#conversions)
- [Identity-verification](#identity-verification)
- [Payouts](#payouts)
- [Quotes](#quotes)
- [Subaccounts](#subaccounts)
- [Virtual-accounts](#virtual-accounts)
- [Wallets](#wallets)

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
