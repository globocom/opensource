import React from "react"
import PropTypes from "prop-types"
import styled from "styled-components"
import media from "styled-media-query"

import Container from "./Container"

const FooterWrapper = styled.footer`
  height: 7rem;
  background-color: ${props => (props.dark ? "unset" : "")};
  color: ${props => (props.dark ? "#ffffff" : "#000000")};

  ${media.greaterThan("large")`
    height: 6.25rem;
  `}
`

const FooterContainer = styled(Container)`
  height: 100%;
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

  li {
    color: ${props => (props.dark ? "#ffffff" : "#000000")};
  }

  li + li {
    margin-left: 2.125rem;

    ${media.greaterThan("large")`
      margin-left: 2.5rem;
    `}
  }
`

const FooterLinkWrapper = styled.a`
  font-weight: bold;
  color: inherit;
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
        <FooterLinks dark={dark}>
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
              <FooterLink href="https://www.vempraglobo.com.br/">
                Trabalhe conosco
              </FooterLink>
            </li>
          </ul>
        </FooterLinks>
        <FooterRights>&copy; {currentYear} globo</FooterRights>
      </FooterContainer>
    </FooterWrapper>
  )
}

Footer.propTypes = {
  dark: PropTypes.bool,
}

export default Footer
