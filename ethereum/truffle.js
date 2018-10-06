require('babel-register')
require('babel-polyfill')

module.exports = {
  networks: {
    development: {
      host: '127.0.0.1',
      port: 8545,
      network_id: '*', // Match any network id,
    },
    parity: {
      host: '127.0.0.1',
      port: 8545,
      network_id: '*',
      gas: 6000000,
      from: '0x115175A43a06Ca83aE31beDD780b1DE53F46550A',
    },
  },
}
