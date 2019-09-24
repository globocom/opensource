import React from "react"
import PropTypes from "prop-types"
import styled from "styled-components"
import media from "styled-media-query"

import GlobalStyle from "../styles/global"
import Header from "./Header"

const Main = styled.main`
  margin-top: 2rem;

  ${media.greaterThan("medium")`
    margin-top: 0;
  `}
`

const Layout = ({ children }) => (
  <React.Fragment>
    <GlobalStyle />
    <Header />
    <Main>{children}</Main>
  </React.Fragment>
)

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Layout
