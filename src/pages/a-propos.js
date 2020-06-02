import React from "react" ;
import { Helmet } from "react-helmet" ;
import { graphql } from "gatsby" ;

import Layout from "../components/Layout.js" ;

const About = ({ data }) => {

  const page = data.page ;

  return (
    <Layout>
      <Helmet title={page.frontmatter.title} /> 
      <h1>{page.frontmatter.title}</h1>
    </Layout>
  )
}

export const query = graphql`
  query {
    page: markdownRemark (
     frontmatter: {title: {eq: "À Propos"}} 
    ){
      frontmatter {
        title
      }
    }
  }
`
 
export default About ; 