declare namespace NodeJS {
  interface ProcessEnv {
    NODE_ENV: string;
    FINCRA_SECRET_KEY: string;
    FINCRA_PUBLIC_KEY: string;
  }
}
