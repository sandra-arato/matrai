import { Link } from 'gatsby'
import React from 'react'
import styled from 'styled-components'

import { colors } from '../styles'

const HeaderLink = styled(Link)`
  color: ${colors.text};
  font-size: 1.5rem;
  text-decoration: none;
`

const Wrapper = styled.div`
  display: flex;
  width: 100%;
  padding: 2rem;
  background: ${colors.bgDark};
`

const Header = ({ children }) => (
  <Wrapper>
    <HeaderLink to="/">
      {children}
    </HeaderLink>

  </Wrapper>
)


export default Header
