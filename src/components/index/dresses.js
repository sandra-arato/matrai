import React from 'react'
import styled from 'styled-components'
import Slider from 'react-slick'
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

import { colors } from '../../styles'

import Cassie from '../../images/cassie_by_Matrai.jpg'
import Phoebe from '../../images/phoebe_by_Matrai.jpg'
import Mia from '../../images/mia_by_Matrai.jpg'

const Wrapper = styled.section`
  box-sizing: border-box;
  width: calc(100% - 2rem);
  font-family: Doulos, serif;
  margin-bottom: 10rem;
}

`
const Title = styled.h2`
    font-size: 1.375rem;
    font-weight: 500;
    font-family: Montserrat, sans-serif;
    letter-spacing: 0.025em;
    line-height: 1.5;
    margin: 3.5rem auto;
    text-align: center;
    text-transform: uppercase;
`

const Slide = styled.div`
  height: 25rem;
  text-align: right;
  position: relative;
  padding-bottom: 4rem;
`

const DressImg = styled.img`
    && {
        display: inline-block;
        margin: 0 1rem;
        height: 100%;
        width: calc(100% - 2rem);
        object-fit: cover;
    }
`
const Figcaption = styled.p`
    position: absolute;
    bottom: 2rem;
    box-sizing: border-box;
    text-align: center;
    width: 100%;
`

const Name = styled.span`
    display: block;
    box-sizing: border-box;
    font-size: 1.125rem;
    line-height: 1.5;
    font-weight: 600;
    text-transform: uppercase;
    font-family: Montserrat, sans-serif;
    background: ${colors.bgLight};
    width: 85%;
    margin: 0 auto;
    padding: 0.5rem 1rem;
`

const Sub = styled.span`
    display: block;
    font-family: sans-serif;
    box-sizing: border-box;
    font-style: italic;
    font-size: 0.875rem;
    line-height: 1rem;
    height: 1rem;
    background: ${colors.bgLight};
    color: ${colors.dateColor};
    width: 85%;
    margin: 0 auto;
    font-weight: 400;
    text-transform: none;
`

const settings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 2,
    slidesToScroll: 2
};

export const Dresses = () => (
  <Wrapper>
      <Title><span aria-hidden="true">/</span> Featured dresses <span aria-hidden="true">/</span></Title>
    <div>
        <Slider {...settings}>
            <Slide>
                <DressImg src={Mia}  alt="The gorgeous handcrafted Mia gown"/>
                <Figcaption>
                    <Name>The gorgeous handcrafted Mia gown
                    <Sub>February, 2019 by Matrai</Sub>
                    </Name>
                    
                </Figcaption>
            </Slide>
            <Slide>
                <DressImg src={Phoebe}  alt="The stunning beaded Phoebe bridal gown"/>
                <Figcaption>
                    <Name>The stunning beaded Phoebe bridal gown
                        <Sub>February, 2019 by Matrai</Sub>
                    </Name>
                </Figcaption>
            </Slide>
            <Slide>
                <DressImg src={Cassie} />
            </Slide>
        </Slider>
    </div>

  </Wrapper>
)


export default Dresses
