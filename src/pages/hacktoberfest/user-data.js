import React, { Component } from 'react'
import PropTypes from 'prop-types'
import Button from '../../components/button'
import Message from '../../components/message'
import UserForm from './user-form'

import styles from './user-data.module.css'

const Check = ({ checked }) => {
  return <i className={checked ? styles.checked : styles.unchecked} />
}

class UserData extends Component {
  state = {
    modalOpen: false,
    message: null,
  }

  handleOpenModal = event => {
    this.setState({ modalOpen: true })
  }

  handleCloseModal = event => {
    this.setState({ modalOpen: false })
  }

  updateUser = (user, message) => {
    this.setState({ user, message })
    window.scroll({
      top: 0,
      left: 0,
      behavior: 'smooth',
    })
    this.interval = setTimeout(() => this.setState({ message: null }), 3000)
  }

  componentWillUnmount() {
    clearTimeout(this.interval)
  }

  render() {
    const { user, userStats } = this.props
    const { modalOpen, message } = this.state

    const achievedOpenPRs = userStats.opened >= 2
    const achievedMergedPRs = userStats.merged >= 1
    const challengeComplete = achievedOpenPRs && achievedMergedPRs
    const userName = user.Name ? user.Name.split(' ')[0] : user.GithubUser

    return (
      <div>
        <UserForm
          user={user}
          open={modalOpen}
          onClose={this.handleCloseModal}
          onSave={this.updateUser}
        />
        {message && <Message type={message.type}>{message.text}</Message>}
        <p>
          Olá <strong>{userName}</strong>!<br />
          Você está participando do evento. Let's hack...
        </p>
        <section className={styles.section}>
          <div className={styles.title}>Seu progresso</div>
          <div className={styles.body}>
            <div className={styles.rule}>
              <Check checked={achievedOpenPRs} />
              enviar pelo menos 2 pull requests: {userStats.opened} enviado(s)
            </div>
            <div className={styles.rule}>
              <Check checked={achievedMergedPRs} />
              ter pelo menos 1 pull request aceito: {userStats.merged} aceito(s)
            </div>
            {challengeComplete && (
              <div className={styles.completed}>
                <span className={styles.completedTitle}>Parabéns!!!</span>
                <p>
                  Você concluiu o desafio da Hacktoberfest{' '}
                  <span role="img" aria-label="Challenge complete">
                    🏆
                  </span>
                </p>
                <Button onClick={this.handleOpenModal} variant="filled">
                  Cadastrar endereço de envio
                </Button>
              </div>
            )}
          </div>
        </section>
      </div>
    )
  }
}

UserData.propTypes = {
  user: PropTypes.object.isRequired,
  userStats: PropTypes.object.isRequired,
}

export default UserData
