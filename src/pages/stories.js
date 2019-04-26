import React from 'react'
import { Link, graphql } from 'gatsby'
import styled from 'styled-components'

import 'semantic-ui-less/semantic.less'
import '../styles/layout.css'

export const query = graphql`
  {
    allSanityPost {
      edges {
        node {
          id
          title
          body {
            children {
              text
            }
          }
        }
      }
    }
  }
`;

const Stories = ({ data }) => (
  <MainDiv>
    <div className="container">
      <LinkDiv>
        <Link className="gallery-link" to='/'>Go Back</Link>
      </LinkDiv>
      <Title>Enjoy Our Stories</Title>
        {data.allSanityPost.edges.map(({ node: post }) => (
        <StoryDiv key={post.id}>
          <StoryTitle>{post.title}</StoryTitle>
          <StyledP>There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour, or randomised words which don't look even slightly believable. If you are going to use a passage of Lorem Ipsum, you need to be sure there isn't anything embarrassing hidden in the middle of text. All the Lorem Ipsum generators on the Internet tend to repeat predefined chunks as necessary, making this the first true generator on the Internet. It uses a dictionary of over 200 Latin words, combined with a handful of model sentence structures, to generate Lorem Ipsum which looks reasonable. The generated Lorem Ipsum is therefore always free from repetition, injected humour, or non-characteristic words etc.</StyledP>
        </StoryDiv>
        )
      )}
    </ div> 
  </MainDiv>
  )

const MainDiv = styled.div`
  justify-content: center;
  margin: 1em;
`
const LinkDiv = styled.div`
  margin-top: 1em;
  margin-left: 1em;
`
const Title = styled.h1`
  text-align: center;
  margin-top: 1em;
`
const StyledP = styled.p`
  padding: 1em;
`

const StoryDiv = styled.div`
  justify-content: center;
  border: 1px solid black;
  margin-top: 2em;
  margin-bottom: 2em;
  margin-right: 10em;
  margin-left: 10em;
`
const StoryTitle = styled.h3`
  font-size: 2em;
  text-align: center;
  padding-top: 2em;
  padding-bottom: 2em;
`


export default Stories