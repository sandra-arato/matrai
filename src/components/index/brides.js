import React from 'react'
import styled from 'styled-components'
import Slider from 'react-slick'
import { lighten } from 'polished'
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

import { colors } from '../../styles'
import Bride from '../../images/bride_Matrai.jpg'

const Wrapper = styled.section`
    position: relative;
  box-sizing: border-box;
  font-family: Doulos, serif;
  margin: 5rem 0;
}

`
const Title = styled.h2`
    font-size: 1.375rem;
    font-weight: 500;
    font-family: Montserrat, sans-serif;
    letter-spacing: 0.025em;
    line-height: 1.5;
    margin: 3.5rem auto 0 auto;
    text-align: center;
    text-transform: uppercase;
    &::after {
        content: '';
        display: block;
        width: 13rem;
        height: 1px;
        background: ${colors.bgDark};
        margin: 0 auto;
    }
`

const Slide = styled.div`
    box-sizing: border-box;
    padding: 2rem 2.5rem;
    max-width: 100%;
    line-height: 1.5;
    background: ${colors.bgGrey};
    border: 2rem solid ${colors.bgLight};

    p {
        margin-bottom: 1.5rem;
    }
`

const BrideImg = styled.img`
    position: absolute;
    width: 50%;
    height: auto;
`

const Quote = styled.div`
    width: 60%;
    background: ${colors.bgLight};
    margin-left: 40%;
    z-index: 500;

    &::before {
        content: '';
        display: block;
        width: calc(100% - 4rem);
        height: 1px;
        background: ${lighten('0.7', colors.text)};
        margin: 0 auto;
    }
    &::after {
        content: '';
        display: block;
        position: absolute;
        top: 0;
        left: 50%;
        width: 2rem;
        height: 3.5rem;
        background: ${colors.bgLight};
        margin: 0 auto;
    }


`

const settings = {
    dots: true,
    arrows: false,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1
};

export const Brides = () => (
  <Wrapper id="brides">
    <BrideImg src={Bride}  alt="newlyweds sitting on a back of a truck" />
    <Quote>
        <Title><span aria-hidden="true">/</span> Real Brides <span aria-hidden="true">/</span></Title>
        <Slider {...settings}>
            <Slide>
                <p> “I just finished my custom bridal gown process from the head designer Sophie and I couldn’t be more happier & thankful to her for the dress I got!</p>
                <p>
                She has an exceptional eye for detail and her designs speak for themselves. The stunning dress she created for me is chic, modern and cutting edge with femininity. The head designer has also designed an additional beaded veil for me and felt so comfortable at every single toile fitting in the studio. I couldn’t have been more pleased with the recommendation my friends have given!”

                </p>
                <p> Colette P.</p>
            </Slide>
            <Slide>
                <p> “I just finished my custom bridal gown process from the head designer Sophie and I couldn’t be more happier & thankful to her for the dress I got!</p>
                <p>
                She has an exceptional eye for detail and her designs speak for themselves. The stunning dress she created for me is chic, modern and cutting edge with femininity. The head designer has also designed an additional beaded veil for me and felt so comfortable at every single toile fitting in the studio. I couldn’t have been more pleased with the recommendation my friends have given!”

                </p>
                <p> Colette P.</p>
            </Slide>
            <Slide>
                <p> “I just finished my custom bridal gown process from the head designer Sophie and I couldn’t be more happier & thankful to her for the dress I got!</p>
                <p>
                She has an exceptional eye for detail and her designs speak for themselves. The stunning dress she created for me is chic, modern and cutting edge with femininity. The head designer has also designed an additional beaded veil for me and felt so comfortable at every single toile fitting in the studio. I couldn’t have been more pleased with the recommendation my friends have given!”

                </p>
                <p> Colette P.</p>
            </Slide>
        </Slider>
    </Quote>

  </Wrapper>
)


export default Brides
