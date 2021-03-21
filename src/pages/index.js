import React from "react"
import { graphql } from "gatsby";

export default function Home({ data }) {
// data.markdownRemark holds your data
//  const { allMarkdownRemark } = data;
//  const mdFiles = allMarkdownRemark.edges;

  //console.log(mdFiles);
  return (
    <div className="blog-post-container">
      hello
    </div>
  );
}

/**export const pageQuery = graphql`
  query MyQuery {
    allMarkdownRemark {
      edges{
        node {
          frontmatter {
            date
            slug
            title
          }
        }
      }
    }
  }
`**/
