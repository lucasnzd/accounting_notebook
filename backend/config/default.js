const dotenv = require('dotenv');
dotenv.config();

module.exports = {
  server: {
    server_port: 9090,
    default_time_zone: '-03:00' // This accepts Olson Timezone Identifiers too or UTC values
  },
  jwt: {},
  mail: {},
  db: {},
};
