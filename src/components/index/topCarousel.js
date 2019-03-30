import React from 'react'
import { Link } from 'gatsby'
import styled from 'styled-components'
import Slider from 'react-slick'
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

import { colors } from '../../styles'
import Dress from '../../images/cassie_by_Matrai.jpg'
import Dress2 from '../../images/Matrai_dress_front.jpg'

const DressImg = styled.img`
  width: 100%;
  height: auto;
`


const Wrapper = styled.section`
  box-sizing: border-box;
`


const settings = {
  dots: true,
      infinite: true,
      speed: 500,
      slidesToShow: 1,
      slidesToScroll: 1
};

export const TopCarousel = () => (
  <Wrapper>
    <Slider {...settings}>
      <div>
        <DressImg src={Dress} />
      </div>
      <div>
        <DressImg src={Dress2} />
      </div>
      <div>
        <h3>3</h3>
      </div>
      <div>
        <h3>4</h3>
      </div>
      <div>
        <h3>5</h3>
      </div>
      <div>
        <h3>6</h3>
      </div>
    </Slider>

  </Wrapper>
)


export default TopCarousel
