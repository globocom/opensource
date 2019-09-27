import React from "react"
import PropTypes from "prop-types"
import styled from "styled-components"
import media from "styled-media-query"

import { Container } from "../styles/grid"

const FooterWrapper = styled.footer`
  height: 7rem;
  background-color: #ffffff;
  position: fixed;
  width: 100%;
  left: 0;
  bottom: 0;

  ${media.greaterThan("large")`
    height: 6.25rem;
  `}
`

const FooterContainer = styled(Container)`
  display: flex;
  flex-direction: column;
  justify-content: flex-start;

  ${media.greaterThan("large")`
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
  `}
`

const FooterLinks = styled.nav`
  padding: 1.5rem 0;

  ul {
    width: 100%;
    display: flex;
    align-items: center;

    ${media.greaterThan("large")`
      width: auto;
    `}
  }

  li + li {
    margin-left: 2.125rem;
  }
`

const FooterLinkWrapper = styled.a`
  font-weight: bold;
`

const FooterRights = styled.div`
  width: 100%;
  ${media.greaterThan("large")`
    width: auto;
  `}
`

function FooterLink({ children, href }) {
  return (
    <FooterLinkWrapper target="_blank" rel="noopener noreferrer" href={href}>
      {children}
    </FooterLinkWrapper>
  )
}

const currentYear = new Date().getFullYear()

function Footer({ dark }) {
  return (
    <FooterWrapper dark={dark}>
      <FooterContainer>
        <FooterLinks>
          <ul>
            <li>
              <FooterLink href="https://github.com/globocom/opensource">
                GitHub
              </FooterLink>
            </li>
            <li>
              <FooterLink href="https://blog.globo.com">Blog</FooterLink>
            </li>
            <li>
              <FooterLink href="https://talentos.globo.com">
                Trabalhe conosco
              </FooterLink>
            </li>
          </ul>
        </FooterLinks>
        <FooterRights>Globo.com {currentYear}</FooterRights>
      </FooterContainer>
    </FooterWrapper>
  )
}

Footer.propTypes = {
  dark: PropTypes.bool,
}

export default Footer
