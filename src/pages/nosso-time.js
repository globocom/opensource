import React, { Component } from 'react'
import Layout from '../components/Layout'
import TopBackground from '../components/top-background'
import Button from '../components/button'
import Spinner from '../components/spinner'
import { getOrgMembers } from '../services/github'

import styles from './nosso-time.module.css'

class NossoTimePage extends Component {
  state = {
    members: [],
    isLoading: true,
  }

  async componentDidMount() {
    const members = await getOrgMembers()
    this.setState({
      members,
      isLoading: false,
    })
  }

  render() {
    const { members, isLoading } = this.state
    return (
      <Layout renderTop={() => <TopBackground skyObject="moon" />}>
        <section className={styles.section}>
          <h1 className={styles.head}>Nosso Time</h1>
          {isLoading && <Spinner message="Carregando membros ..." />}
          <div className={styles.members}>
            {members.map(member => (
              <div className={styles.member} key={member.id}>
                <div className={styles.memberAnchor}>
                  <a
                    href={member.url}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <img
                      className={styles.memberAvatar}
                      src={member.avatarUrl}
                      alt={member.name || member.login}
                      title={member.name || member.login}
                    />
                  </a>
                </div>
              </div>
            ))}
          </div>
          <Button
            className={styles.button}
            url="https://talentos.globo.com/"
            blank={true}
          >
            Trabalhe conosco
          </Button>
        </section>
      </Layout>
    )
  }
}

export default NossoTimePage
