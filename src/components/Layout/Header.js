import React, { useState, useRef, useEffect } from "react"
import PropTypes from "prop-types"
import styled, { css } from "styled-components"
import media from "styled-media-query"
import { Link } from "gatsby"

import Container from "./Container"
import MenuBurguerIcon from "@icons/MenuBurguer"
import GloboComIcon from "@icons/GloboCom"
import Colors from "@constants/colors"

const HeaderWrapper = styled.header`
  height: 3.75rem;
  display: flex;
  align-items: center;

  ${media.greaterThan("large")`
    height: 7.625rem;
  `}

  ${props =>
    props.dark &&
    css`
      background-color: unset;
    `}
`

const HeaderContainer = styled(Container)`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding-left: 0;
  padding-right: 3.75rem;
  width: 100%;
  height: 100%;
`

const MenuBurguer = styled.button`
  display: flex;
  align-items: center;
  background: none;
  border: none;
  padding: 1rem 1.5rem;
  height: 100%;
  margin: 0;
  cursor: pointer;
  white-space: nowrap;
  outline: 0;
  -webkit-appearance: none;
  -webkit-tap-highlight-color: transparent;

  ${media.greaterThan("large")`
    display: none;
  `}

  svg {
    width: 24px;
    height: 24px;
    fill: ${props => (props.dark ? "#ffffff" : "#000000")};
  }
`

const Brand = styled.div`
  font-weight: 300;
  letter-spacing: -0.025rem;
  display: flex;
  justify-content: center;
  flex: 1;

  ${media.greaterThan("large")`
    justify-content: flex-start;
  `}

  a {
    display: flex;
    align-items: center;
    color: ${props => (props.dark ? "#ffffff" : "#000000")};

    svg {
      fill: ${props => (props.dark ? "#ffffff" : "#000000")};
      width: 80px;
    }

    span {
      margin-bottom: 0.125rem;
      margin-left: 0.5rem;
    }
  }
`

const Menu = styled.nav`
  flex: 2;
  font-size: 1rem;
  line-height: normal;
  letter-spacing: normal;
  position: fixed;
  top: 0;
  left: 0;
  width: 260px;
  height: 100%;
  background-color: #000000;
  padding-top: 3rem;
  overflow-y: auto;
  z-index: 1200;
  transition: transform 225ms cubic-bezier(0, 0, 0.2, 1) 0ms;

  ${props =>
    props.open
      ? css`
          transform: none;
        `
      : css`
          transform: translateX(-280px);
          pointer-events: none;
          visibility: hidden;
        `}

  ${media.greaterThan("large")`
    font-size: 1.25rem;
    position: relative;
    top: unset;
    left: unset;
    width: auto;
    height: auto;
    background-color: transparent;
    padding-top: 0;
    z-index: unset;
    visibility: visible;
    pointer-events: unset;
    transform: none;
  `}

  ul {
    display: flex;
    justify-content: flex-end;
    flex-direction: column;

    ${media.greaterThan("large")`
      flex-direction: row;
    `}

    li {
      color: #ffffff;

      ${media.greaterThan("large")`
        color: ${props => (props.dark ? "#ffffff" : "#000000")};
        margin-left: 2.5rem;
      `}
    }
  }
`

const MenuLink = styled(Link)`
  color: inherit;
  display: block;
  padding: 1rem 1.5rem;

  ${media.greaterThan("large")`
    padding: 0;
  `}

  &.is-active {
    /* font-weight: 800; */
    color: ${Colors.PRIMARY_COLOR};
  }
`

const MenuLinkHome = styled(MenuLink)`
  ${media.greaterThan("large")`
    display: none;
  `}
`

function Header({ dark }) {
  const node = useRef()
  const [open, setOpen] = useState(false)
  const activeClassName = "is-active"

  const handleMenuOpen = () => {
    setOpen(true)
  }

  const handleMenuCloseOutside = event => {
    if (node.current.contains(event.target)) {
      return
    }
    setOpen(false)
  }

  useEffect(() => {
    document.addEventListener("mousedown", handleMenuCloseOutside)
    return () => {
      document.removeEventListener("mousedown", handleMenuCloseOutside)
    }
  }, [])

  return (
    <HeaderWrapper dark={dark} data-testid="header">
      <HeaderContainer>
        <MenuBurguer dark={dark} onClick={handleMenuOpen}>
          <MenuBurguerIcon />
        </MenuBurguer>
        <Brand dark={dark}>
          <Link to="/" alt="Globo OpenSource">
            <GloboComIcon />
            <span>Open Source</span>
          </Link>
        </Brand>
        <Menu dark={dark} open={open} ref={node}>
          <ul>
            <li>
              <MenuLinkHome activeClassName={activeClassName} to="/">
                Home
              </MenuLinkHome>
            </li>
            <li>
              <MenuLink activeClassName={activeClassName} to="/projetos/">
                Projetos
              </MenuLink>
            </li>
            <li>
              <MenuLink activeClassName={activeClassName} to="/coders/">
                Coders
              </MenuLink>
            </li>
            <li>
              <MenuLink activeClassName={activeClassName} to="/rules/">
                Regras &amp; Valores
              </MenuLink>
            </li>
            <li>
              <MenuLink activeClassName={activeClassName} to="/hacktoberfest/">
                Hacktoberfest
              </MenuLink>
            </li>
          </ul>
        </Menu>
      </HeaderContainer>
    </HeaderWrapper>
  )
}

Header.propTypes = {
  dark: PropTypes.bool,
}

export default Header
