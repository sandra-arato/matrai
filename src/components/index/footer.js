import { Link } from 'gatsby'
import React from 'react'
import styled from 'styled-components'
import Image from 'gatsby-image';

import { colors } from '../../styles'

const Post = styled(Image)`
  border-width: 0.25rem 0.125rem;
  border-color: ${colors.primary};
  border-style: solid;
  max-width: 16.75rem;

  &:first-child {
    border-left: 0.25rem solid ${colors.primary};
  }

  &:last-child {
    border-right: 0.25rem solid ${colors.primary};
  }
`;
const Wrapper = styled.footer`
  display: grid;
  grid-template-columns: repeat(5, 1fr);
  width: 100%;
  max-width: calc(100% - 4rem);
  padding: 0 2rem 3.625rem 2rem;
  margin: 0 auto;
  box-sizing: border-box;
`

  const Bg = styled.div`
    position: relative;
    padding: 2rem 0;
    background: ${colors.bgGrey};

    &::before {
      content: '';
      display: block;
      position: absolute;
      width: 100%;
      height: calc((100vw - 4rem)/10 + 2rem);
      background: ${colors.primary};
      margin-top: 4rem;
    }
`;

const Heading = styled.h2`
  width: 100%;
  font-weight: 600;
  font-size: 1.625rem;
  text-transform: uppercase;
  text-align: center;
  letter-spacing: 0.125rem;
  line-height: 2rem;
  padding: 1.5rem 0 2rem 0;
  background: ${colors.primary};
`;

export const Footer = ({ posts }) => (
  <Bg>
    <Heading>Follow our daily inspirations @matrai_label</Heading>
    <Wrapper>
      {
        posts.edges.map((item, i) => {
          return item.node.localFile ? <Post fluid={item.node.localFile.childImageSharp.fluid} key={i} caption={item.node.caption}/> : <div></div>;
        })
      }
    </Wrapper>
  </Bg>

)


export default Footer
