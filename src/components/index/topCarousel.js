import React from 'react'
import { Link } from 'gatsby'
import styled from 'styled-components'
import Slider from 'react-slick'
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

import { headerHeight, colors, arrows } from '../../styles'
import Dress from '../../images/cassie_by_Matrai.jpg'
import Dress2 from '../../images/Matrai_dress_front.jpg'
import Dress3 from '../../images/Matrai_dress_back.jpg'
import HeroSlide from './heroSlide';

const DressImg = styled.img`
  width: 100%;
  height: auto;
`


const Wrapper = styled.section`
  box-sizing: border-box;
  margin-top: ${headerHeight};
`

const Slide = styled.div`
  width: 100%;
  height: calc(100vh - ${headerHeight});
`

const Prev = styled.button`
  border: none;
  font-size: 0.75rem;
  text-decoration: uppercase;
  position: absolute;
  top: calc(100vh - ${headerHeight} - 18rem);
  left: 4rem;
  z-index: 500;
  font-family: Montserrat;
  font-weight: 400;
  text-transform: uppercase;
  letter-spacing: 0.075rem;
  color: ${colors.primary};
`

const Next = styled(Prev)`
  top: calc(100vh - ${headerHeight} - 15rem);
`

const Arrow = styled.span`
  position: relative;
  display: block;
  vertical-align: middle;
  box-sizing: border-box;
  &:after, &:before {
    content: "";
    box-sizing: border-box;
  }

  ${props => arrows(props.direction)}
`

const PrevArrow = ({ onClick }) => (
  <Prev onClick={onClick}>Prev <Arrow direction="left" /></Prev>
)

const NextArrow = ({ onClick }) => (
  <Next onClick={onClick}>Next <Arrow direction="right" /></Next>
)

const settings = {
  dots: false,
  infinite: true,
  speed: 500,
  slidesToShow: 1,
  slidesToScroll: 1,
  nextArrow: <NextArrow />,
  prevArrow: <PrevArrow />
};

export const TopCarousel = () => (
  <Wrapper>
    <Slider {...settings}>
      <Slide>
        <HeroSlide primary={Dress2} secondary={Dress3} title="Perfect Romance" description="Designed for the wild & romantic, Milla reflects the soft elegance with effortless and captivating features on the bespoke handmade dress." />
      </Slide>
      <Slide>
        <HeroSlide primary={Dress2} secondary={Dress3} title="Perfect Romance" description="Designed for the wild & romantic, Milla reflects the soft elegance with effortless and captivating features on the bespoke handmade dress." />        <DressImg src={Dress3} />
      </Slide>
      <Slide>
        <HeroSlide primary={Dress2} secondary={Dress3} title="Perfect Romance" description="Designed for the wild & romantic, Milla reflects the soft elegance with effortless and captivating features on the bespoke handmade dress." />

      </Slide>
    </Slider>

  </Wrapper>
)


export default TopCarousel
