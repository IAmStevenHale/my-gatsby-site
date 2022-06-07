import * as React from "react"
import { Link, useStaticQuery, graphql } from 'gatsby'

// markup
const IndexPage = () => {
  const data = useStaticQuery(graphql`
  query {
    site {
      siteMetadata {
        title
      }
    }
  }
`)
  return (
    <>
    <header>{data.site.siteMetadata.title}</header>
    </>
  )
}

export default IndexPage
