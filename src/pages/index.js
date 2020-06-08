import React, { useState } from "react" ;
import { graphql, Link } from "gatsby" ;
import styled from "styled-components" ;

import Layout from "../components/Layout.js" ;
import Container from "../components/Container.js" ;
import { HomeHeader, HeaderIntro, HeaderTitle } from "../components/HomeHeader.js" ;
import { SectionWrapper, SectionTitle } from "../components/SectionTitle.js" ;
import Button from "../components/Button.js" ;
import PostList from "../components/PostList.js" ;
import avatar from "../img/avatar-1.jpg" ;

const Home = ({ data }) => {

  const posts = data.posts.edges ;
  const page = data.page ;

  return (
    <Layout>
      <HomeHeader 
        image={avatar} 
        alt="romaric"
      >
        <HeaderTitle>{page.frontmatter.heading}</HeaderTitle>
        <HeaderIntro>{page.frontmatter.subheading}</HeaderIntro>
        <Button>
          <Link to='/a-propos'><span>En savoir plus</span></Link>
        </Button>
      </HomeHeader>
      <SectionWrapper>
        <Container>
          <SectionTitle>
            <h2>Articles récents</h2>
          </SectionTitle>
          <PostList 
            posts={posts} 
            columns={3}
          />
        </Container>
      </SectionWrapper>
    </Layout>
  )

}

export const query = graphql`
  query {
    posts: allMarkdownRemark(
      limit: 10,
      filter: {frontmatter: {type: {eq: "blog"}}},
      sort: {order: DESC, fields: frontmatter___date}
    ){
      edges {
        node {
          id
          excerpt
          fields {
            slug
          }
          frontmatter {
            title
            featured_image {
              childImageSharp {
                fluid(maxHeight: 300, maxWidth: 400) {
                  ...GatsbyImageSharpFluid_withWebp
                }
              }
            }
            tags
          }
        }
      }
    }
    page: markdownRemark(
      frontmatter: {title: {eq: "home"}}
    ){
      frontmatter {
        heading
        subheading
      }
    }
  }
`

export default Home ;
