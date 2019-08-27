import React from 'react'
import Layout from '../components/Layout'
import FeaturedProjects from '../components/featured-projects'
import Button from '../components/button'

import styles from './index.module.css'

const TopBackground = () => (
  <section className={styles.heroSection}>
    <div className={styles.landingBgCornerTop} />
    <div className={styles.landingBgCornerBottom} />
    <div className={styles.heroSectionContent}>
      <div className={styles.moon} />
      <div className={styles.saturn} />
      <div className={styles.asteroid} />
      <div className={styles.venus} />
      <div className={styles.rocket} />
      <div className={styles.astronaut} />
      <div>
        <h1 className={styles.heroSectionCall}>Addicted Developers</h1>
        <h2 className={styles.heroSectionSubCall}>Unidos pelo código.</h2>
        <span className={styles.heroSectionLink}>Let's code</span>
      </div>
    </div>
  </section>
)

const IndexPage = () => (
  <Layout topClassName={styles.topBg} renderTop={() => <TopBackground />}>
    <section className={styles.section}>
      <div className={styles.sectionContent}>
        <h2 className={styles.sectionTitle}>Nossos projetos</h2>
        <FeaturedProjects />
        <Button url="/projetos/" className={styles.sectionButton}>
          ver todos
        </Button>
      </div>
    </section>
    <section className={styles.sectionBottom}>
      <div className={styles.sectionBottomContent}>
        <div className={styles.sectionBottomData}>
          <div className={styles.sectionBottomTitle}>Trabalhe conosco</div>
          <div className={styles.sectionBottomSubTitle}>
            Você nasceu pra isso!
          </div>
          <div className={styles.sectionBottomLink}>
            <Button
              url="https://talentos.globo.com"
              className={styles.sectionButton}
              variant="transparent"
              blank={true}
            >
              Venha nos conhecer
            </Button>
          </div>
        </div>
      </div>
    </section>
  </Layout>
)

export default IndexPage
