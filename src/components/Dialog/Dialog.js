import React from "react"
import PropTypes from "prop-types"
import styled from "styled-components"

const Root = styled.div`
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  z-index: 3;
  position: fixed;
`

const Overlay = styled.div`
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  z-index: -1;
  position: fixed;
  background-color: rgba(0, 0, 0, 0.6);
`

const Container = styled.div`
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
`

const Content = styled.div`
  flex: 1;
  max-width: 600px;
  max-height: calc(100% - 40px);
  background-color: #fff;
  text-align: left;
  border-radius: 10px;
  display: flex;
  position: relative;
  flex-direction: column;
  margin: 10px;
  color: #000;
`

export const DialogTitle = styled.div`
  padding: 30px;
  font-weight: 700;
  font-size: 1.5rem;
  color: #000;
`

export const DialogBody = styled.div`
  padding: 20px 30px;
  overflow-y: auto;
  color: #000;
`

export const DialogFooter = styled.div`
  padding: 20px 30px;
  text-align: right;

  * + * {
    margin-left: 20px;
  }
`

export const DialogText = styled.p`
  margin-bottom: 2rem;
`

function Dialog({ children, open, onClose }) {
  if (!open) {
    return null
  }

  return (
    <Root>
      <Overlay>
        <Container>
          <Content>{children}</Content>
        </Container>
      </Overlay>
    </Root>
  )
}

Dialog.propTypes = {
  children: PropTypes.node.isRequired,
  open: PropTypes.bool,
  onClose: PropTypes.func,
}

Dialog.defaultProps = {
  open: false,
}

export default Dialog
