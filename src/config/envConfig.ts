import { Constants } from '../constants/index';

interface Config {
  apiUrl: string;
}

export const getConfig = (env: keyof typeof Constants.ENVIRONMENT): Config => {
  switch (env) {
    case Constants.ENVIRONMENT.DEV:
      return {
        apiUrl: 'https://api.dev.reactstarterkit.com',
      };
    case Constants.ENVIRONMENT.UAT:
      return {
        apiUrl: 'https://api.uat.reactstarterkit.com',
      };
    case Constants.ENVIRONMENT.PROD:
      return {
        apiUrl: 'https://api.prod.reactstarterkit.com',
      };
    default:
      throw new Error(`Unsupported environment: ${env}`);
  }
};
