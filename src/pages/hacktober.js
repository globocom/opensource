import React, { Component } from 'react'
import Layout from '../components/layout'
import Button from '../components/button'
import { getUser } from '../services/api'

import styles from './hacktober.module.css'

class HacktoberPage extends Component {
  state = {
    user: null,
  }

  async componentDidMount() {
    const user = await getUser()
    this.setState({ user })
  }

  render() {
    const { user } = this.state
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
              Hacktober{' '}
              <span className={styles.sectionTitleLight}>Globo.com</span>
            </h1>
            <h2 className={styles.sectionSubTitle}>
              Contribua e ganhe uma camiseta exclusiva
            </h2>
            <div className={styles.sectionSubscribe}>
              {user ? (
                <span>Olá {user.Name}</span>
              ) : (
                <Button label="participe" url="/login" transparent={true} />
              )}
              {/* <span className={styles.sectionSubscriptionInfo}>
                Saiba mais sobre o evento
              </span> */}
            </div>
          </section>

          <section className={styles.event}>
            <div className={styles.eventCall}>Como participar</div>
            <div className={styles.eventDescription}>
              Contribua com 2 pull requests em qualquer projeto Open Source da
              Globo.com durante o mês de outubro. Os 100 primeiros inscritos que
              conseguirem os 2 pull requests e ao menos um ACEITO, ganharão uma
              camiseta exclusiva.
            </div>
            <div className={styles.eventDate}>De 1 até 31 de outubro</div>
            <div className={styles.eventRepository}>
              Pull requests podem ser feitos em qualquer projeto da globo.com.
            </div>
          </section>

          <div className={styles.astronautRocket} />
        </div>
        <div className={styles.bgCornerBottom} />
      </Layout>
    )
  }
}

export default HacktoberPage
