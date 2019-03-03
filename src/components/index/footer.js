import { Link } from 'gatsby'
import React from 'react'
import styled from 'styled-components'
import Image from 'gatsby-image';

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
  display:grid;
  grid-template-columns: repeat(5, 1fr);
  width: 100%;
  padding: 2.4rem 5rem 2.4rem 6.4rem;
  background: ${colors.bgGrey};
  box-sizing: border-box;
  font-size: 1.2rem;
`

export const Footer = ({ posts }) => (
  <Wrapper>
    {
      posts.edges.map((item, i) => {
        return item.node.localFile ? <Image fluid={item.node.localFile.childImageSharp.fluid} key={i} caption={item.node.caption}/> : <div></div>;
      })
    }
  </Wrapper>
)


export default Footer
