import { Link } from 'gatsby'
import React from 'react'
import styled from 'styled-components'

import { colors } from '../../styles'


const Wrapper = styled.section`
  display: flex;
  width: 100%;
  padding: 2.4rem 5rem 2.4rem 6.4rem;
  background: ${colors.bgGrey};
  box-sizing: border-box;
  font-size: 1.2rem;
`

export const VideoContent = () => (
  <Wrapper>
      <p>hello world</p>
  </Wrapper>
)


export default VideoContent
