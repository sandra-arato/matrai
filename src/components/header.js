import { Link } from 'gatsby'
import React from 'react'
import styled from 'styled-components'

import { colors } from '../styles'
import LogoImage from '../images/logo.png'

const HeaderLogo = styled.img.attrs({
  src: LogoImage
})`
`

const HeaderLogoLink = styled(Link)`
  color: ${colors.text};
  font-size: 1.5rem;
  text-decoration: none;
  width: 10rem;
`

const HeaderMenu = styled.nav`
  text-align: right;
  width: calc(100% - 10rem);
`

const MenuItem = styled.li`
  display: inline-block;
  margin: 0 1rem;
  text-transform: uppercase;
  font-size: 1.25rem;

  &:last-child {
    margin-right: 0;
  }
`

const MenuItemLink = styled(Link)`
  color: ${colors.text};
`

const Wrapper = styled.div`
  display: flex;
  max-width: 1920px;
  margin: 0 auto;
  padding: 2.4rem 5rem 2.4rem 6.4rem;
  background: ${colors.bgLight};
  box-sizing: border-box;
  font-size: 1.2rem;
`

const Header = ({ title }) => (
  <Wrapper>
      <HeaderLogoLink to="/">
        <HeaderLogo alt={title}/>
      </HeaderLogoLink>
    <HeaderMenu>
      <ul>
        <MenuItem><MenuItemLink to="/">Home</MenuItemLink></MenuItem>
        <MenuItem><MenuItemLink to="/shop">Shop</MenuItemLink></MenuItem>
        <MenuItem><MenuItemLink to="/about">About</MenuItemLink></MenuItem>
        <MenuItem><MenuItemLink to="/our-brides">Our Brides</MenuItemLink></MenuItem>
        <MenuItem><MenuItemLink to="/faq">FAQ</MenuItemLink></MenuItem>
        <MenuItem><MenuItemLink to="/contact">Contact</MenuItemLink></MenuItem>
      </ul>
    </HeaderMenu>
  </Wrapper>
)


export default Header
