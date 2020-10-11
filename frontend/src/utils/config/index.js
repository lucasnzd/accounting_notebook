const env = process.env.REACT_APP_ENVIRONMENT || 'dev';
export const config = require(`./config.${env}.json`);
