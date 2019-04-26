import React from 'react'
import { graphql, StaticQuery } from 'gatsby'
import styled from 'styled-components'

import BackgroundImage from 'gatsby-background-image'

const AboutSection = ({ className, siteTitle }) => (
    <StaticQuery query={graphql`
      query {
        desktop: file(relativePath: { eq: "about-image.jpg" }) {
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
          />
       )
     }
    }
  />
)

const StyledAboutSection = styled(AboutSection)`
  width: 98%;
  margin-left: 1%;
  height: 900px;
  background-position: bottom center;
  background-repeat: repeat-y;
  background-size: cover;
  padding-bottom: 0rem;
  margin-bottom: 1rem;
  background-color: 'black';
  z-index: -1;
`


export default StyledAboutSection