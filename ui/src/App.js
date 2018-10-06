import React, { Component } from 'react'
import gql from 'graphql-tag'
import { Query } from 'react-apollo'

import Layout from './components/Layout/Layout'

const GET_EVENTS = gql`
  {
    events {
      id
    }
  }
`

class App extends Component {
  render() {
    return (
      <Query query={GET_EVENTS}>
        {({ loading, error, data }) => {
          if (loading) return ''
          if (error) return `Error! ${error.message}`
          return <Layout data={data} />
        }}
      </Query>
    )
  }
}

export default App
