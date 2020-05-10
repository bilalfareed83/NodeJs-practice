require('dotenv').config();

console.log(process.env.NODE_ENV, process.env.MY_PASSWORD);

module.exports = {
  PORT: process.env.PORT || 5001,
  MY_PASSWORD: process.env.MY_PASSWORD,
  NODE_ENV: process.env.NODE_ENV || developement,
};
