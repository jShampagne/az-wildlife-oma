import React from 'react'
import { graphql, StaticQuery } from 'gatsby'
import styled from 'styled-components'

import BackgroundImage from 'gatsby-background-image'

const FormSection = ({ className, siteTitle }) => (
    <StaticQuery query={graphql`
      query {
        desktop: file(relativePath: { eq: "form-image.jpg" }) {
          childImageSharp {
            fluid(quality: 100, maxWidth: 4160) {
              ...GatsbyImageSharpFluid_withWebp
            }
          }
        }
      }
    `}
     render={data => {
       // Set ImageData.
       const imageData = data.desktop.childImageSharp.fluid
       return (
      
          <BackgroundImage 
            Tag="section"
            className={className}
            fadeIn={'soft'}
            fluid={imageData}
          >
            <TitleDiv>
              <Title>
                Stay In Touch
              </Title>
            </TitleDiv>
          
          </BackgroundImage>
       )
     }
    }
  />
)

const StyledFormSection = styled(FormSection)`
  width: 98%;
  margin-left: 1%;
  height: 500px;
  background-position: bottom center;
  background-repeat: repeat-y;
  background-size: cover;
  padding-bottom: 0rem;
  background-color: 'black';
  z-index: -1;
`
const TitleDiv = styled.div`
  border-top: 2px solid brown;
  border-bottom: 2px solid brown;
  margin-top: 2rem;
  margin-right: 30%;
  margin-left: 30%;
`
const Title = styled.h3`
  text-align: center;
  color: white;
  text-transform: uppercase;
  font-size: 2rem;
  padding: 1rem;
  color: brown;
  letter-spacing: 1rem;
`

export default StyledFormSection