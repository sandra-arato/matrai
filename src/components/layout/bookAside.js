import { Link } from 'gatsby'
import React from 'react'
import styled from 'styled-components'

import { colors, headerHeight } from '../../styles'

const Wrapper = styled.aside`
  display: inline-block;
  position: sticky;
  z-index: 500;
  top: ${headerHeight};
  left: 0;
  box-sizing: border-box;
  width: 2rem;
  height: calc(100vh - ${headerHeight});
  background: ${colors.bgDark};
  vertical-align: top;
`



const Book = styled(Link)`
  display: block;
  position: relative;
  top: 40vh;
  left: -3.5rem;
  width: 8rem;
  height: 1.5rem;
  line-height: 1.5rem;
  font-family: Montserrat, sans-serif;
  font-weight: 500;
  font-size: 0.625rem;
  transition: all 200ms ease-in;
  padding: 0.25rem 0.75em;
  text-transform: uppercase;
  color: ${colors.text};
  transform: rotateZ(-90deg);


  &:hover,
  &:focus {
    color: ${colors.accentRust};
    border-color: ${colors.accentRust};
  }
`

export const BookFooter = () => (
  <Wrapper>
    <Book to="/shop">Book appointment</Book>
  </Wrapper>
)


export default BookFooter
