import React from "react"
import PropTypes from "prop-types"
import styled from "styled-components"

import GlobalStyle from "../styles/global"
import Header from "./Header"
import Footer from "./Footer"

const Main = styled.main`
  margin: 2rem 0;
`

function Layout({ children, darkHeader, darkFooter }) {
  return (
    <React.Fragment>
      <GlobalStyle />
      <Header dark={darkHeader} />
      <Main>{children}</Main>
      <Footer dark={darkFooter} />
    </React.Fragment>
  )
}

Layout.propTypes = {
  children: PropTypes.node.isRequired,
  darkHeader: PropTypes.bool,
  darkFooter: PropTypes.bool,
}

Layout.defaultProps = {
  darkHeader: false,
  darkFooter: false,
}

export default Layout
