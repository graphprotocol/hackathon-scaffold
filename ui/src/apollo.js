import ApolloClient from 'apollo-client'
import { HttpLink } from 'apollo-link-http'
import { InMemoryCache } from 'apollo-cache-inmemory'
import fetch from 'unfetch'

const endpoints = {
  simple: 'http://localhost:8000/test/graphql'
}

export const apolloClient = new ApolloClient({
  link: new HttpLink({
    uri: endpoints.simple,
    fetch: fetch,
    headers: {
      'Content-Type': 'application/json'
    }
  }),
  cache: new InMemoryCache({ addTypename: false })
})
