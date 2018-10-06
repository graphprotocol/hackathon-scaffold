const Events = artifacts.require('./Events.sol')
const eventsArtifacts = require('../build/contracts/Events.json')
const contract = require('truffle-contract')

module.exports = async function(deployer) {
  console.log('INITIALIZING...')
  await deployer.deploy(Events)
  const events = await Events.deployed()
  events.trigger('1')
  events.trigger('2')
  events.trigger('3')

  console.log('AUCTION STARTED')
}
