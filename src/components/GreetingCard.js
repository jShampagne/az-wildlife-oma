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
  top: 45%;
  left: 50%;
  width: 33em;
  height: 19em;
  background: rgba(86,108,62, 0.8);
`
const BorderDiv = styled.div`
  border: 1px solid white; 
  padding : 1em;
  margin: 20px;
  height: 17em;
`
const TitleDiv = styled.div`
  border-top: 1px solid white;
  border-bottom: 1px solid white;
  margin-top: 1em;
  margin-right: 5rem;
  margin-left: 5rem;
`
const Title = styled.h3`
  color: white;
  letter-spacing: 0.2rem;
  text-transform: uppercase;
  font-size: 1.2rem;
  padding: 0.5rem;
`
const StyledP = styled.p`
  color: white;
  text-align:left;
  padding-top: 2rem;;
  padding-left: 3rem;
  padding-right: 3rem;
  font-size: 0.9em;
`
const Button = styled.button`
  background: lightgrey;
  height: 3em;
  width: 8em;
  color: rgb(86,108,62);
  font-size: 1.1rem;
  text-transform: uppercase;
`

export default GreetingCard