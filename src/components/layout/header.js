import { Link } from 'gatsby'
import React from 'react'
import styled from 'styled-components'

import { colors } from '../../styles'
import LogoImage from '../../images/matrai-exquisite.png'

const HeaderLogo = styled.img.attrs({
  src: LogoImage
})`
  display: flex;
  align-self: center;
  height: 3.5rem;
  width: auto;
`

const HeaderLogoLink = styled(Link)`
  display: inline-flex;
  flex: column;
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
  font-size: 0.75rem;

  &:last-child {
    margin-right: 0;
  }
`

const MenuItemLink = styled(Link)`
  color: ${colors.text};

  &::before,
  &::after {
    display: inline-block;
    content: ' / ';
    padding: 0 0.125rem;
    visibility: hidden;
    color: ${colors.accentRust};
  }

  &:hover,
  &:focus {
    color: ${colors.accentRust};
    outline: none;

    ::before,
    ::after {
      visibility: initial;
    }

  }
`

const Wrapper = styled.header`
  display: flex;
  position: fixed;
  top: 0;
  left: 0;
  z-index: 1000;
  box-sizing: border-box;
  width: 100%;
  height: 6.25rem;
  line-height: 6.25rem;
  margin: 0 auto;
  padding: 0 4rem;
  background: ${colors.bgLight};
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
