import { Link } from 'gatsby'
import React from 'react'
import styled from 'styled-components'

import { colors } from '../../styles'
import VideoFile from '../../images/matrai-brand-video.mp4'
import Thumbnail from '../../images/thumbnail-video.jpg'

const Wrapper = styled.section`
  display: flex;
  width: 100%;
  padding: 12.5rem 0 12.5rem 2rem;
  box-sizing: border-box;
  font-size: 1.2rem;
`

const Story = styled.p`
  display: block;
  font-family: Doulus, serif;
  font-size: 1.25rem;
  letter-spacing: 0.025em;
  line-height: 2.25rem;
  max-width: 18rem;
  padding: 1rem 0;
  text-align: right;
`

const Video = styled.video`
  display: flex;
  max-width: calc(100% - 20rem);
  align-self: flex-start;
  margin-left: 2rem;
`

const Shop = styled(Link)`
  display: inline-flex;
  align-self: flex-end;
  border: 1px solid ${colors.text};
  font-family: Montserrat, sans-serif;
  font-weight: 600;
  font-size: 1rem;
  line-height: 1.75rem;
  transition: all 200ms ease-in;
  padding: 0.25rem 0.75em;
  margin-top: 2rem;
  text-transform: uppercase;
  color: ${colors.text};


  &:hover,
  &:focus {
    color: ${colors.accentRust};
    border-color: ${colors.accentRust};
  }
`

export const VideoContent = () => (
  <Wrapper>
    <div>
      <Story>
        "I had the pleasure of following Zsófia around with my camera leading up to her graduation runway show for the Fashion Design Studio. Here's what it looked like, Enjoy - Al "
      </Story>
      <Story>
        Made by Alec Bruce-Mason www.alecbrucemason.com.au
        <Shop to="/shop">Shop all bridal gowns</Shop>
      </Story>
      
    </div>
    <Video width="100%" preload="metadata" muted poster={Thumbnail} controls>
      <source src={VideoFile} type="video/mp4" />
    </Video>
  </Wrapper>
)


export default VideoContent
