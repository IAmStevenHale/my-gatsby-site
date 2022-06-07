import * as React from "react"
import { graphql } from 'gatsby'
import styled from 'styled-components'
import { createGlobalStyle } from "styled-components"

const GlobalStyle = createGlobalStyle`
  * {
    box-sizing: border-box;
    margin: 0;
    padding: 0;
  }
`

const Page = styled.div`
display: grid;
grid-template-columns: 1fr;
grid-template-rows: 0.2fr repeat(3, 1fr);
width: 100%;
height: 100vh;
`

const Title = styled.h1`
text-align: center;
width: 100%;
`

const Blog = styled.div`
text-align: center;
width: 100%;
align-content: center;
justify-content: center;
& p{
  margin: 10px;
  text-align: justify;
}

`

// markup
const IndexPage = ({ data }) => {
 
  const pageTitle = data.allContentfulPage.edges[0].node.blocks[0].mainTitle;
  const pageBlogText = JSON.parse(data.allContentfulPage.edges[0].node.blocks[1].blogTextField.raw).content[0].content[0].value;
  return (
    <>
    <GlobalStyle />
    <Page>    
      <Title>{pageTitle}</Title>
      <Blog><p>{pageBlogText}</p></Blog>

    </Page>


    </>
  )
}

export const query = graphql`
  query HomePageQuery {
    allContentfulPage {
      edges {
        node {
          blocks {
            ... on ContentfulBlogText {
              id
              blogTextField {
                raw
              }
            }
            ... on ContentfulTitle {
              id
              mainTitle
            }
          }
        }
      }
    }
  }
  
  
`
export default IndexPage
