import React from 'react'
import styled from 'styled-components'
import { colors } from '../../styles'

const Wrapper = styled.section`
  box-sizing: border-box;
  width: 100%;
  padding: 4.5 2rem;
  font-family: Doulos, serif;
  margin-top: 5rem;

  &::before {
    content: '';
    display: block;
    width: calc(100% - 4rem);
    height: 1px;
    background: ${colors.text};
    margin: 0 auto;
}

`

const P = styled.p`
    margin: 3.5rem auto 0 auto;
    max-width: 54rem;
    font-size: 1.25rem;
    line-height: 2.25rem;
    letter-spacing: 0.025em;
    text-align: center;

    &::after {
        content: '';
        display: block;
        width: 30rem;
        height: 1px;
        background: ${colors.text};
        margin: 2rem auto;
    }
`

const Bold = styled.p`
    font-size: 1.375rem;
    font-weight: 500;
    font-family: Montserrat, sans-serif;
    letter-spacing: 0.025em;
    line-height: 1.5;
    margin: 3.5rem auto;
    text-align: center;
`

export const Intro = () => (
  <Wrapper>
      <P>
          MATRAI is a world-class luxury bridal and evening bespoke label which is known for its feminine designs, cohesive balance, elegance and a hint of romance within each design. The brand is built up on original philosophy founded with true luxury, fine tailoring and modern sophistication, mastering classical couture.
      </P>
      <Bold>For gown enquiries & personalised styling email hello@matrai.com.au</Bold>
  </Wrapper>
)


export default Intro
