import React, { Component } from 'react'
import PropTypes from 'prop-types'

import styles from './modal.module.css'

class Modal extends Component {
  state = {
    open: false,
  }

  componentDidMount() {
    if (this.props.open) {
      this.handleOpen()
    }
  }

  componentDidUpdate(prevProps) {
    if (prevProps.open && !this.props.open) {
      this.handleClose()
    } else if (!prevProps.open && this.props.open) {
      this.handleOpen()
    }
  }

  handleOpen = () => {
    document.documentElement.style.overflow = 'hidden'
  }

  handleClose = () => {
    document.documentElement.style.overflow = ''
  }

  render() {
    const { children, title, footer, open } = this.props
    if (!open) return null

    return (
      <div className={styles.modal}>
        <div className={open ? styles.overlayVisible : styles.overlay} />
        <div className={styles.container}>
          <div className={styles.content}>
            {title && <div className={styles.head}>{title}</div>}
            <div className={styles.body}>{children}</div>
            {footer && <div className={styles.footer}>{footer}</div>}
          </div>
        </div>
      </div>
    )
  }
}

Modal.propTypes = {
  open: PropTypes.bool.isRequired,
  onClose: PropTypes.func.isRequired,
  children: PropTypes.object,
  title: PropTypes.string,
  footer: PropTypes.object,
}

export default Modal
