import React from "react" ;
import { graphql } from "gatsby" ;
import _ from "lodash" ;

import Seo from "../components/Seo.js"
import Layout from "../components/Layout.js" ;
import { PageHeader, HeaderTitle, HeaderIntro } from "../components/PageHeader.js";
import { Section, SectionTitle } from "../components/Section.js" ;
import PostList from "../components/PostList.js" ;

const Tag = ({ data, pageContext }) => {

  const tag =  pageContext.tag ;
  const capitalizedTag = _.capitalize(tag);
  const posts = data.posts.edges ;

  return (
    <Layout>

      <Seo 
        title={capitalizedTag} 
      /> 

      <PageHeader>
        <HeaderTitle>
          {capitalizedTag}
        </HeaderTitle>
        <HeaderIntro>
          {`${posts.length} article${posts.length > 1 ? "s" : ""} trouvé${posts.length > 1 ? "s" : ""} dans cette catégorie.`}
        </HeaderIntro>
      </PageHeader>

      <Section>
        <PostList 
          posts={posts} 
          columns={3}
        />
      </Section>
    </Layout>
  )

}

export const query = graphql`
  query TagPosts($tag: String!) {
    posts: allMarkdownRemark (
      filter: {frontmatter: {tags: {in: [$tag]}}}
    ){
      edges {
        node {
          id
          fields {
            slug
          }
          frontmatter {
            title
            color
            date
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
  }
`

export default Tag ;

