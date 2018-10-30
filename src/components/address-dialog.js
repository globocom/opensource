import React from 'react'
import Button from './button'

import styles from './address-dialog.module.css'

const AddressDialog = ({ open = false, onClose }) => {
  return (
    open && (
      <div className={styles.dialog}>
        <div className={open ? styles.overlayVisible : styles.overlay} />
        <div className={styles.body}>
          <div className={styles.content}>
            <div className={styles.head}>Endereço</div>
            <div className={styles.form}>
              <p>Preencha com o endereço de envio da camiseta.</p>
              <div className={styles.field}>
                <input
                  className={styles.textField}
                  type="text"
                  name="name"
                  placeholder="Nome"
                />
              </div>
              <div className={styles.field}>
                <input
                  className={styles.textField}
                  type="email"
                  name="email"
                  placeholder="E-mail"
                />
              </div>
              <div className={styles.field}>
                <input
                  className={styles.textField}
                  type="text"
                  name="state"
                  placeholder="Estado"
                />
              </div>
              <div className={styles.field}>
                <input
                  className={styles.textField}
                  type="text"
                  name="city"
                  placeholder="Cidade"
                />
              </div>
              <div className={styles.field}>
                <input
                  className={styles.textField}
                  type="text"
                  name="address"
                  placeholder="Endereço"
                />
              </div>
              <div className={styles.field}>
                <input
                  className={styles.textField}
                  type="text"
                  name="postalcode"
                  placeholder="CEP"
                />
              </div>
            </div>
            <div className={styles.footer}>
              <Button
                label="cancelar"
                onClick={onClose}
                className={styles.button}
              />
              <Button label="enviar" fill={true} className={styles.button} />
            </div>
          </div>
        </div>
      </div>
    )
  )
}

export default AddressDialog
