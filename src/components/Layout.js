import React from "react"
import PropTypes from "prop-types"
import styled from "styled-components"
import media from "styled-media-query"

import GlobalStyle from "../styles/global"
import Header from "./Header"
import Footer from "./Footer"

const Main = styled.main`
  padding: ${props => (props.noPadding ? "0" : "2rem 0")};
  min-height: calc(100vh - 3.75rem - 7rem);

  ${media.greaterThan("large")`
    min-height: calc(100vh - 7.625rem - 6.25rem);
  `}
`

function Layout({ children, darkHeader, darkFooter, noPadding }) {
  return (
    <React.Fragment>
      <GlobalStyle />
      <Header dark={darkHeader} />
      <Main noPadding={noPadding}>{children}</Main>
      <Footer dark={darkFooter} />
    </React.Fragment>
  )
}

Layout.propTypes = {
  children: PropTypes.node.isRequired,
  darkHeader: PropTypes.bool,
  darkFooter: PropTypes.bool,
  noPadding: PropTypes.bool,
}

Layout.defaultProps = {
  darkHeader: false,
  darkFooter: false,
  noPadding: false,
}

export default Layout
