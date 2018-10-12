import React, { Component } from 'react'
import Layout from '../components/layout'
import Button from '../components/button'
import { getUser } from '../services/api'

import styles from './hacktoberfest.module.css'
import githubIcon from '../images/logo-github-rev.svg'

class HacktoberfestPage extends Component {
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
              Hacktoberfest{' '}
              <span className={styles.sectionTitleLight}>Globo.com</span>
            </h1>
            <h2 className={styles.sectionSubTitle}>
              Contribua e ganhe uma camiseta exclusiva
            </h2>

            {user ? (
              <div>
                <p>
                  Olá <strong>{user.Name}</strong>! Você está participando do
                  evento. Let's hack...
                </p>
              </div>
            ) : (
              <div className={styles.sectionSubscribe}>
                <Button label="participe" url="/login" fill={true} />
              </div>
            )}
          </section>

          <section className={styles.eventInfo}>
            <div className={styles.eventInfoLabel}>Regras</div>
            <div className={styles.eventInfoBody}>
              Contribua com 2 pull requests em qualquer projeto Open Source da
              Globo.com durante o mês de outubro. Os 100 primeiros inscritos que
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
                label="ver issues no github"
                url="https://github.com/search?q=label:hacktoberfest%20user:globocom%20user:tsuru%20user:thumbor%20user:clappr%20state:open%20type:issue"
                icon={githubIcon}
                transparent={true}
                blank={true}
              />
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
