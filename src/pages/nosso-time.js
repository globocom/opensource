import React, { Component } from 'react'
import Layout from '../components/layout'
import TopBackground from '../components/topBackground'

// import gql from 'graphql-tag'
// import { ApolloProvider } from 'react-apollo'
// import { Query } from 'react-apollo'

import { getOrganizationMembers } from '../services/github'

import styles from '../components/layout.module.css'

class NossoTimePage extends Component {
  state = {
    members: [],
  }

  async componentDidMount() {
    const data = await getOrganizationMembers()
    // this.setState({ members: data.organization.members })
    console.log(members)
  }

  render() {
    const { members } = this.state
    return (
      <Layout renderTop={() => <TopBackground skyObject="moon" />}>
        <h1>Nosso Time</h1>
        {members.map(member => (
          <span>{member.name}</span>
        ))}
      </Layout>
    )
  }
}

export default NossoTimePage
