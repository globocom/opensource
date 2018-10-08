import React, { Component } from 'react'
import Layout from '../components/layout'
import TopBackground from '../components/top-background'
import Button from '../components/button'
import { getOrganizationMembers } from '../services/github'

import styles from './nosso-time.module.css'

class NossoTimePage extends Component {
  state = {
    members: [],
  }

  async componentDidMount() {
    const data = await getOrganizationMembers()
    if (data) {
      this.setState({ members: data.organization.members.nodes })
    }
  }

  render() {
    const { members } = this.state
    return (
      <Layout renderTop={() => <TopBackground skyObject="moon" />}>
        <section className={styles.section}>
          <h1 className={styles.head}>Nosso Time</h1>
          <div className={styles.members}>
            {members.map(member => (
              <div className={styles.member} key={member.id}>
                <div className={styles.memberAnchor}>
                  <img
                    className={styles.memberAvatar}
                    src={member.avatarUrl}
                    alt={member.name}
                    title={member.name}
                  />
                </div>
              </div>
            ))}
          </div>
          <Button
            className={styles.button}
            label="trabalhe conosco"
            url="https://talentos.globo.com/"
          />
        </section>
      </Layout>
    )
  }
}

export default NossoTimePage
