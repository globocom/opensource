import React, { Component } from 'react'
import Layout from '../components/Layout'
import Button from '../components/Button'
import UserData from '../components/UserData'

import { getUser } from '../services/api'
import { getUserStats } from '../services/github'

import styles from './hacktoberfest.module.css'

class HacktoberfestPage extends Component {
  state = {
    user: null,
    userStats: null,
  }

  async componentDidMount() {
    const user = await getUser()
    const userStats = await getUserStats(user.GithubUser)
    this.setState({ user, userStats })
  }

  render() {
    const { user, userStats } = this.state
    return (
      <Layout
        mainTransparent={true}
        renderTop={() => (
          <>
            <div className={styles.bgCornerTop} />
            <div className={styles.saturn} />
          </>
        )}
      >
        <div className={styles.pageContent}>
          <section className={styles.section}>
            <h1 className={styles.sectionTitle}>
              Hacktoberfest{' '}
              <span className={styles.sectionTitleLight}>Globo.com</span>
            </h1>
            <h2 className={styles.sectionSubTitle}>
              Contribua e ganhe uma camiseta exclusiva
            </h2>
            {user ? (
              <UserData user={user} userStats={userStats} />
            ) : (
              <div className={styles.sectionSubscribe}>
                <Button variant="filled" url="/login">
                  Participe
                </Button>
              </div>
            )}
          </section>

          <section className={styles.eventInfo}>
            <div className={styles.eventInfoLabel}>Regras</div>
            <div className={styles.eventInfoBody}>
              Contribua com 2 pull requests em qualquer projeto Open Source da
              Globo.com durante o mês de outubro. Os 200 primeiros inscritos que
              conseguirem os 2 pull requests e ao menos um ACEITO, ganharão uma
              camiseta exclusiva a ser entregue dentro do território brasileiro.
            </div>
            <p className={styles.eventInfoCall}>De 1 até 31 de outubro</p>
          </section>

          <section className={styles.eventInfo}>
            <div className={styles.eventInfoLabel}>Projetos</div>
            <div className={styles.eventInfoBody}>
              Pull requests podem ser feitos em qualquer{' '}
              <a className={styles.projectLink} href="/projetos/">
                projeto
              </a>{' '}
              da globo.com.
            </div>
            <p className={styles.eventInfoCall}>
              <Button
                url="https://github.com/search?q=label:hacktoberfest%20user:globocom%20user:tsuru%20user:thumbor%20user:clappr%20state:open%20type:issue"
                iconName="github"
                variant="transparent"
                blank={true}
              >
                Ver issues
              </Button>
            </p>
          </section>

          <div className={styles.astronautRocket} />
        </div>
        <div className={styles.bgCornerBottom} />
      </Layout>
    )
  }
}

export default HacktoberfestPage
