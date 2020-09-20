import React from "react"
import PropTypes from "prop-types"
import styled from "styled-components"
import media from "styled-media-query"

import GlobalStyle from "./GlobalStyle"
import Header from "./Header"
import Footer from "./Footer"

const Main = styled.main`
  background-color: ${props => (props.dark ? "#000" : "transparent")};
  padding: ${props => (props.noPadding ? "0" : "2rem 0")};
  min-height: calc(100vh - 3.75rem - 7rem);

  ${media.greaterThan("large")`
    min-height: calc(100vh - 7.625rem - 6.25rem);
  `}
`

function Layout({
  children,
  darkHeader,
  darkFooter,
  darkBody,
  noPadding,
  backgroundImage,
  backgroundColor,
}) {
  return (
    <React.Fragment>
      <div
        style={{
          backgroundImage: `url(${backgroundImage})`,
          backgroundColor: backgroundColor,
        }}
      >
        <GlobalStyle />
        <Header dark={darkHeader} />
        <Main dark={darkBody} noPadding={noPadding}>
          {children}
        </Main>
        <Footer dark={darkFooter} />
      </div>
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
  darkBody: false,
  noPadding: false,
}

export default Layout
