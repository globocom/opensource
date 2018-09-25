import React from 'react'
import Layout from '../components/layout'
import Button from '../components/button'

import styles from './hacktober.module.css'
import githubIcon from '../images/logo-github-rev.svg'

const HacktoberPage = () => (
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
          Hacktober <span className={styles.sectionTitleLight}>Globo.com</span>
        </h1>
        <h2 className={styles.sectionSubTitle}>
          Contribua e ganhe uma camisa exclusiva
        </h2>
        <div className={styles.sectionSubscribe}>
          <Button label="participe" transparent={true} />
          <span className={styles.sectionSubscriptionInfo}>
            Saiba mais sobre o evento
          </span>
        </div>
      </section>

      <section className={styles.event}>
        <div className={styles.eventCall}>Como participar</div>
        <div className={styles.eventDescription}>
          Contribua com 2 pull requests em qualquer projeto Open Source da
          Globo.com durante o mês de outubro. Os 100 primeiros inscritos que
          conseguirem os 2 pull requests e ao menos um MERGE, irão ganhar um
          brinde exclusivo.
        </div>
        <div className={styles.eventDate}>1 de outubro até 31 de outubro</div>
        <div className={styles.eventRepository}>
          Pull requests podem ser feitos em qualquer projeto do repositório{' '}
          <a
            className={styles.eventRepositoryLink}
            href="https://github.com/globocom"
          >
            https://github.com/globocom
          </a>
        </div>
        <Button
          label="ver repositório"
          url="https://github.com/globocom"
          transparent={true}
          icon={githubIcon}
          className={styles.eventRepositoryButton}
        />
      </section>

      <div className={styles.astronautRocket} />
    </div>
    <div className={styles.bgCornerBottom} />
  </Layout>
)

export default HacktoberPage
