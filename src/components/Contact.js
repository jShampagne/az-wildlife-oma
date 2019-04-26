import React from 'react'
import styled from 'styled-components'

const Contact = (props) => (
  <MainDiv>
    <TitleDiv>
        <Title>Stay in touch</Title>
      </TitleDiv>
    <FormDiv>
    <form name="contact" method="post" action="/success" data-netlify="true" data-netlify-honeypot="bot-field">

        <input type="hidden" name="bot-field" />

        <div className="field half first">
            <label htmlFor="name">Name: </label>
            <input type="text" name="name" id="name" required/>
        </div>
        <div className="field half">
            <label htmlFor="email">Email: </label>
            <input type="text" name="email" id="email" required/>
        </div>
        <p>
          <FormButton type="submit" className='btn btn-primary'>Sign Up</FormButton>
        </p>
    </form>
    </FormDiv>
  </MainDiv>
)

const MainDiv = styled.div`
  justify-content: center;
  z-index: 20;
  position: absolute;
  top: 25%;
  left: 25%;
  width: 33em;
  height: 20em;
`
const TitleDiv = styled.div`
  border-top: 1px solid brown;
  border-bottom: 1px solid brown;
  margin-top: 1em;
  margin-right: 5em;
  margin-left: 5em;
`
const Title = styled.h3`
  color: brown;
  letter-spacing: 0.2rem;
  text-transform: uppercase;
  font-size: 1.5em;
  padding: 0.5rem;
`
const FormDiv = styled.div`
  margin-top: 1.5em;
  margin-right: 1em;
`
const FormButton = styled.button`
  background: brown;
  color: white;
  height: 2em;
  width: 6em;
  margin-top: 1em;
`



export default Contact