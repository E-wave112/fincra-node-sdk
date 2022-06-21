import * as path from 'path';
import {config} from 'dotenv';

// Parsing the env file from the root directory of the project
config({ path: path.join(__dirname, '../../.env') });
// dotenv.config({ path: require('find-config')('.env') });

// Interface to load env variables
// Note these variables can possibly be undefined
// as someone could skip these varibales or not setup a .env file at all

interface ENV {
    NODE_ENV: string | undefined;
    FINCRA_SECRET_KEY: string | undefined;
    FINCRA_PUBLIC_KEY: string | undefined;
}

interface Config {
    NODE_ENV: string;
    FINCRA_SECRET_KEY: string;
    FINCRA_PUBLIC_KEY: string;
}

// Loading process.env as ENV interface

const getConfig = (): ENV => {
  return {
    NODE_ENV : process.env.NODE_ENV,
    FINCRA_SECRET_KEY: process.env.FINCRA_SECRET_KEY,
    FINCRA_PUBLIC_KEY: process.env.FINCRA_PUBLIC_KEY,
  };
};

// Throwing an Error if any field was undefined we don't
// want our app to run if it can't connect to DB and ensure
// that these fields are accessible. If all is good return
// it as Config which just removes the undefined from our type
// definition.

const getSanitzedConfig = (configSys: ENV): Config => {
  for (const [key, value] of Object.entries(configSys)) {
    if (value === undefined) {
      throw new Error(`Missing key ${key} in .env`);
    }
  }
  return configSys as Config;
};

const configSys = getConfig();

const sanitizedConfig = getSanitzedConfig(configSys);

export default sanitizedConfig;