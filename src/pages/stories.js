import React from 'react'
import { Link, graphql } from 'gatsby'
import styled from 'styled-components'

export const query = graphql`
  {
    allSanityPost {
      edges {
        node {
          id
          title
        }
      }
    }
  }
`;


const Stories = ({ data }) => (
    <div className="container">
      <Link className="gallery-link" to='/'>Go Back</Link>
      {data.allSanityPost.edges.map(({ node: post }) => (
        <div key={post.id}>
          <h3>{post.title}</h3>
        </div>
      )
      )}
    </ div> 
  )


export default Stories