require('babel-register')
require('babel-polyfill')
const HDWalletProvider = require('truffle-hdwallet-provider')

module.exports = {
  networks: {
    development: {
      host: '127.0.0.1',
      port: 8545,
      network_id: '*', // Match any network id,
    },
    ropsten: {
      provider: function() {
        return new HDWalletProvider(
          process.env.MNEMONIC,
          `https://ropsten.infura.io/v3/${process.env.ROPSTEN_INFURA_API_KEY}`
        )
      },
      network_id: '*',
    },
    parity: {
      host: '127.0.0.1',
      port: 8545,
      network_id: '*',
      gas: 6000000,
      from: '0xd49c572ab93dcc58627a70420763de4bdb74d6e8',
    },
  },
}
