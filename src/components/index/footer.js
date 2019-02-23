import { Link } from 'gatsby'
import React from 'react'
import styled from 'styled-components'

import { colors } from '../../styles'

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
  font-size: 1.2rem;

  &:last-child {
    margin-right: 0;
  }
`

const MenuItemLink = styled(Link)`
  color: ${colors.text};
`

const Wrapper = styled.footer`
  display: flex;
  width: 100%;
  padding: 2.4rem 5rem 2.4rem 6.4rem;
  background: ${colors.bgGrey};
  box-sizing: border-box;
  font-size: 1.2rem;
`

export const Footer = () => (
  <Wrapper>
      hello
  </Wrapper>
)


export default Footer
