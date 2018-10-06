const Events = artifacts.require('./Events.sol')
const eventsArtifacts = require('../build/contracts/Events.json')
const contract = require('truffle-contract')

module.exports = async function(deployer) {
  await deployer.deploy(Events)
  const events = await Events.deployed()

  const EventsContract = contract(eventsArtifacts)
  EventsContract.setProvider(web3.currentProvider)

  console.log('INITIALIZING...')
  // sausageID = 1234
  // sausageSymbol = 'Bratwurst'
  // description = 'Bratwurst - RARE'
  // auctionAddr = '0xAeB9Ad0EaeE1Ea1B47f181c8C2e7b5927b25106c'
  // SausageInstance = undefined
  // AuctionInstance = undefined
  //

  EventsContract.deployed().then(inst => {
    AuctionInstance = inst
    AuctionInstance.trigger('1')
    AuctionInstance.trigger('2')
    AuctionInstance.trigger('3')
  })

  console.log('AUCTION STARTED')
  // callback()
}
