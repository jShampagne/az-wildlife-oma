import React from 'react'
import { graphql, StaticQuery } from 'gatsby'
import styled from 'styled-components'

import BackgroundImage from 'gatsby-background-image'
import Header from './Header'

const MainSection = ({ className, siteTitle }) => (
    <StaticQuery query={graphql`
      query {
        desktop: file(relativePath: { eq: "main-photo.jpg" }) {
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
          <Header />
          <BackgroundImage 
            Tag="section"
            className={className}
            fadeIn={'soft'}
            fluid={imageData}
          />
        </div>
       )
     }
    }
  />
)

const StyledMainSection = styled(MainSection)`
  width: 100%;
  height: 85vh;
  background-position: bottom center;
  background-repeat: repeat-y;
  background-size: cover;
  padding-bottom: 0rem;
  background-color: 'black';
  z-index: -1;
`


export default StyledMainSection