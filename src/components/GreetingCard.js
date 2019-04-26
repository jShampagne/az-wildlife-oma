
import React from "react"
import styled from 'styled-components'


const GreetingCard = () => (
  <MainDiv>
    <BorderDiv>
      <TitleDiv>
        <Title>Conserve & Protect</Title>
      </TitleDiv>
      <StyledP>
          Arizona Game and Fish Department manages over 800 species
          of wildlife, preserving these incredible animals for future generations.
      </StyledP>
      <Button class="ui button">
        Our Mission
      </Button>
    </BorderDiv>
  </MainDiv>
)

const MainDiv = styled.div`
  justify-content: center;
  z-index: 5;
  position: absolute;
  top: 60%;
  left: 50%;
  width: 800px;
  height: 450px;
  background: rgba(86,108,62, 0.8);
`
const BorderDiv = styled.div`
  border: 1px solid white; 
  padding : 1rem;
  margin: 20px;
  height: 410px;
`
const TitleDiv = styled.div`
  border-top: 1px solid white;
  border-bottom: 1px solid white;
  margin-top: 2rem;
  margin-right: 8rem;
  margin-left: 8rem;
`
const Title = styled.h3`
  color: white;
  text-transform: uppercase;
  font-size: 2rem;
  padding: 1rem;
`
const StyledP = styled.p`
  color: white;
  text-align:left;
  padding-top: 2rem;;
  padding-left: 3rem;
  padding-right: 3rem;
  font-size: 1.45rem;
`
const Button = styled.button`
  background: lightgrey;
  height: 3rem;
  width: 250px;
  color: rgb(86,108,62);
  font-size: 1.1rem;
  text-transform: uppercase;
`

export default GreetingCard