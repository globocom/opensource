import React, { useState } from "react"
import styled, { css } from "styled-components"
import media from "styled-media-query"
import { Link } from "gatsby"

import { Container } from "../styles/grid"

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
      background-color: #000000;
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
  flex: 1;
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

    a:hover {
      color: #59b8fd;
    }
  }
`

const MenuLink = styled(Link)`
  transition: color 0.3s;
  color: inherit;
  display: block;
  padding: 1rem 1.5rem;

  ${media.greaterThan("large")`
    padding: 0;
  `}

  &.is-active {
    /* font-weight: 800; */
    color: #59b8fd;
  }
`

const MenuLinkHome = styled(MenuLink)`
  ${media.greaterThan("large")`
    display: none;
  `}
`

const Header = ({ dark = false }) => {
  const [open, setOpen] = useState(false)
  const activeClassName = activeClassName

  const handleMenuToggle = () => {
    setOpen(!open)
  }

  return (
    <HeaderWrapper dark={dark}>
      <HeaderContainer>
        <MenuBurguer dark={dark} onClick={handleMenuToggle}>
          <svg width="24" height="24" viewBox="0 0 24 24">
            <title>Menu</title>
            <path d="M3 18h18v-2H3v2zm0-5h18v-2H3v2zm0-7v2h18V6H3z"></path>
          </svg>
        </MenuBurguer>
        <Brand dark={dark}>
          <Link to="/" alt="Globo.com OpenSource">
            <svg width="112" height="28" viewBox="0 0 112 28">
              <path
                d="M91.518 9.152c0-1.28.785-2.133 1.876-2.133.962 0 1.585.534 1.715 1.439.917-1.013 2.112-1.6 3.489-1.6 1.565 0 2.894.667 3.88 1.947 1.04-1.226 2.679-1.948 3.957-1.948 3.043 0 5.125 1.815 5.125 5.172v7.36c0 1.278-.78 2.13-1.874 2.13s-1.874-.852-1.874-2.13v-6.694c0-1.546-.832-2.64-2.185-2.64-1.38 0-2.213 1.094-2.213 2.64v6.692c0 1.278-.779 2.13-1.871 2.13-1.095 0-1.876-.852-1.876-2.13v-6.692c0-1.546-.832-2.64-2.186-2.64-1.535 0-2.211 1.094-2.211 2.64v6.692c0 1.278-.782 2.13-1.876 2.13-1.09 0-1.876-.852-1.876-2.13V9.152zm-78.07 11.086c0 4.614-2.94 6.931-7.21 6.931-1.536 0-5.906-.771-5.906-2.875 0-.72.782-1.683 1.51-1.683 1.196 0 2.525 1.203 4.685 1.203 1.82 0 3.176-1.091 3.176-3.042v-.905h-.056c-.78 1.173-2.054 1.815-3.774 1.815C1.945 21.68.096 18.132.096 14.32c0-3.864 2.396-7.465 6.169-7.465 1.274 0 2.73.587 3.435 1.762.232-1.014.83-1.6 1.873-1.6 1.094 0 1.873.853 1.873 2.133v11.087h.001zM6.76 10.376c-1.952 0-2.915 2.08-2.915 3.866 0 2.053.963 3.92 2.915 3.92 2.002 0 2.942-1.919 2.942-3.786 0-1.866-.887-4-2.942-4zm7.837-7.412c0-1.277.779-2.133 1.873-2.133 1.093 0 1.875.856 1.875 2.133v16.423c0 1.278-.783 2.13-1.875 2.13-1.093 0-1.873-.852-1.873-2.13V2.964zm17.92 11.33c0 4-2.678 7.386-6.713 7.386-4.033 0-6.715-3.387-6.715-7.386 0-3.892 2.76-7.438 6.715-7.438 3.956 0 6.714 3.546 6.714 7.438zm-9.68 0c0 1.841.936 3.866 2.966 3.866 2.03 0 2.966-2.027 2.966-3.866s-.91-3.918-2.966-3.918c-2.057 0-2.967 2.08-2.967 3.918zm10.398-11.33c0-1.277.78-2.133 1.874-2.133s1.871.856 1.871 2.133V8.19a5.365 5.365 0 0 1 3.567-1.334c4.034 0 6.037 3.869 6.037 7.596 0 3.627-2.395 7.228-6.167 7.228-1.272 0-2.732-.587-3.435-1.76-.233 1.013-.83 1.597-1.872 1.597-1.093 0-1.874-.852-1.874-2.13V2.964h-.001zm6.686 15.198c1.953 0 2.918-2.078 2.918-3.866 0-1.813-.965-3.918-2.918-3.918-2.003 0-2.941 1.918-2.941 3.785 0 1.864.885 3.999 2.94 3.999zm20.484-3.868c0 4-2.68 7.386-6.716 7.386-4.033 0-6.713-3.387-6.713-7.386 0-3.892 2.757-7.438 6.713-7.438s6.716 3.546 6.716 7.438zm-9.68 0c0 1.841.934 3.866 2.964 3.866 2.032 0 2.967-2.027 2.967-3.866s-.911-3.918-2.967-3.918c-2.057 0-2.965 2.08-2.965 3.918zm12.757 3.225c1.118 0 2.032.935 2.032 2.083 0 1.144-.914 2.078-2.032 2.078-1.118 0-2.03-.934-2.03-2.078 0-1.148.912-2.083 2.03-2.083zm12.943-6.396c-.941 0-1.772-.745-2.97-.745-2.131 0-3.147 1.944-3.147 3.918 0 1.892 1.119 3.866 3.147 3.866.938 0 2.344-.8 2.785-.8.885 0 1.614.772 1.614 1.676 0 1.977-3.226 2.642-4.58 2.642-4.036 0-6.715-3.387-6.715-7.386 0-3.892 2.758-7.438 6.715-7.438 1.482 0 4.58.56 4.58 2.428 0 .8-.546 1.839-1.43 1.839zm14.38 3.171c0 4-2.681 7.386-6.717 7.386-4.033 0-6.713-3.387-6.713-7.386 0-3.892 2.759-7.438 6.713-7.438 3.957 0 6.718 3.546 6.718 7.438zm-9.682 0c0 1.841.937 3.866 2.964 3.866 2.031 0 2.966-2.027 2.966-3.866s-.91-3.918-2.966-3.918c-2.055 0-2.964 2.08-2.964 3.918z"
                fillRule="evenodd"
              />
            </svg>
            <span>Open Source</span>
          </Link>
        </Brand>
        <Menu dark={dark} open={open}>
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
              <MenuLink activeClassName={activeClassName} to="/nosso-time/">
                Nosso time
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

export default Header
