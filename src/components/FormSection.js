import React from 'react'
import { graphql, StaticQuery } from 'gatsby'
import styled from 'styled-components'

import BackgroundImage from 'gatsby-background-image'
import Contact from './Contact'

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
        <div class="ui vertical masthead center aligned segment">
          <BackgroundImage 
            Tag="section"
            className={className}
            fadeIn={'soft'}
            fluid={imageData}
          />
          <Contact />
        </div>
       )
     }
    }
  />
)

const StyledFormSection = styled(FormSection)`
  width: 98%;
  margin-left: 1%;
  height: 400px;
  background-position: bottom center;
  background-repeat: repeat-y;
  background-size: cover;
  padding-bottom: 0rem;
  position: relative;
  background-color: 'black';
  z-index: -1;
`

export default StyledFormSection