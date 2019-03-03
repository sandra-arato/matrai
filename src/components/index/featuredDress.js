import React from 'react'
import { Link } from 'gatsby'
import styled from 'styled-components'

import { colors } from '../../styles'
import Dress from '../../images/cassie_by_Matrai.jpg'

const DressImg = styled.img`
  width: 100%;
  height: auto;
`


const Wrapper = styled.section`
  position: relative;
  box-sizing: border-box;
`

const Title = styled.p`
  display: inline-block;
  position: absolute;
  top: 12vw;
  left: 10%;
  font-family: Doulus, serif;
  font-size: 4rem;
  line-height: 1.25em;
  text-align: right;
`

const ShopLink = styled(Link)`
  display: block;
  font-family: Montserrat;
  font-weight: 500;
  text-transform: uppercase;
  text-decoration: underline;
  font-size: 1.25rem;
  color: ${colors.text};
`

export const FeaturedDress = () => (
  <Wrapper>
      <DressImg src={Dress} />
      <Title>
        Cassie Gown
        <ShopLink to="/">Shop now</ShopLink>
      </Title>
  </Wrapper>
)


export default FeaturedDress
