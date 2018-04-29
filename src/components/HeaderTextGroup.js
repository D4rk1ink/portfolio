import React from 'react'
import styled from 'styled-components'
import color from 'src/constants/color'
import Fade from 'react-reveal/Fade'

const Wrapper = styled.div`
    text-align: center;
    position: relative;
    color: ${color.light};
`

const Title = styled.h1`
    font-size: 6rem;
    font-size: 6vw;
    font-weight: 100;
    @media only screen and (min-width: 45rem) {
        font-size: 5rem;
        font-size: 5vw;
    }
    @media only screen and (min-width: 75rem) {
        font-size: 4rem;
        font-size: 4vw;
    }
`

const SubTitle = styled.h3`
    font-size: 4rem;
    font-size: 4vw;
    font-weight: 400;
    @media only screen and (min-width: 45rem) {
        font-size: 3rem;
        font-size: 3vw;
    }
    @media only screen and (min-width: 75rem) {
        font-size: 2rem;
        font-size: 2vw;
    }
`

export default () => {
    return (
        <Wrapper>
            <Fade left>
                <Title>
                    MY PORTFOLIO
                </Title>
            </Fade>
            <Fade right>
                <SubTitle>
                    This is my story
                </SubTitle>
            </Fade>
        </Wrapper>
    )
}
