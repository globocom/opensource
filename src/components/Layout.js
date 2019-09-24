import React from "react"
import PropTypes from "prop-types"
import styled from "styled-components"

import GlobalStyle from "../styles/global"
import Header from "./Header"

const Main = styled.main`
  margin: 2rem 0;
`

const Layout = ({ children, dark }) => (
  <React.Fragment>
    <GlobalStyle />
    <Header dark={dark} />
    <Main>{children}</Main>
  </React.Fragment>
)

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Layout
