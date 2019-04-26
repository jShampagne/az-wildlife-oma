import React from 'react'
import { Link } from 'gatsby'
import styled from 'styled-components'

// export const query = graphql`
//   {
//     allSanityPost {
//         edges {
//           node {
//             id
//             title
//             mainImage {
//               asset {
//                 fluid {
//                   ...GatsbySanityImageFluid
//                 }
//               }
//             }
//           }
//         }
//       }
//     }
// `;

// import Img from 'gatsby-image'

const Stories = ({ data }) => (
    <div className="container">
      <Link className="gallery-link" to='/'>Go Back</Link>
      <h1> Hello World </h1>
    </ div> 
  )


export default Stories