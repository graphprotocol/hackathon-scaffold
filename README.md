# Hackathon scaffold project

This project consists of three parts:

- Example Solidity contract
- Subgraph
- UI (dApp)

## Subgraph

Follow the instructions in our [Getting Started Guide](https://github.com/graphprotocol/graph-node/blob/master/docs/getting-started.md) to learn more about subgraphs and how to create one.

## UI

- This project is set up using `react-scripts`
- We use [Prisma](https://www.prisma.io/) to mock a GraphQL server. Connection to the Prisma endpoint is achieved though Apollo Client in [`src/apollo.js`](src/apollo.js).
- Example components can be found in [`src/components/`](src/components/)
- An example GraphQL schema can be found in [`src/domain/schema.graphql`](src/domain/schema.graphql)

## Installation

In order to run this project and get events from the blockchain, we need to install a couple of tools.

1.  [Truffle](https://truffleframework.com/docs/truffle/overview):

    - `$ npm install -g truffle@beta` (or `$ yarn global add truffle@beta`)

2.  [Ganache](https://truffleframework.com/docs/ganache/overview)

    - `$ npm install -g ganache-cli` (or `$ yarn global add ganache-cli`)

3.  [IPFS](https://docs.ipfs.io/introduction/install/) - please follow instructions in their docs

4.  [PostgreSQL](https://www.postgresql.org/download/) - install Postgres and create a database for this project by running:

    - `createdb scaffold`

## Development

Open 7 terminal tabs, and follow the steps in each tab:

1.  Run `$ ganache-cli`

2.  Make sure you are inside of the ethereum folder and run `$ truffle compile` followed by `$ truffle migrate`

3.  Make sure you are inside of the ui folder and then you can run the following:

    - `yarn` to install dependencies
    - `yarn start` to serve the UI code on http://localhost:3000

4.  Run `$ ipfs daemon`

5.  Clone the `graph-node` repository from [here](https://github.com/graphprotocol/graph-node)

6.  Go to the `graph-node` repo that you cloned, and pull from the newest `master` branch. Run the following command using the subgraph ID from the previous step:

```
cargo run -p graph-node --release -- \
  --postgres-url postgresql://<USERNAME>@localhost:5432/scaffold \
  --ethereum-rpc <NETWORK_NAME>:http://127.0.0.1:8545 \
  --ipfs 127.0.0.1:5001 \
  --debug
```

**Note:** Try your OS username as `<USERNAME>` and anything except for the mainnet as `<NETWORK_NAME>` (for example, `ganache` or `testnet`)

This will spin up a GraphQL interface at `http://localhost:8000` so you can run your queries against the blockchain.

7.  Make sure you are inside of the subgraph folder, and run `yarn` followed by `yarn deploy`. It will deploy the subgraph to `graph-node` and watch for changes.

## License

Copyright © 2018 Graph Protocol, Inc.

Licensed under the [MIT License](LICENSE).
