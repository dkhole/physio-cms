import React from "react"
import { graphql } from "gatsby";

export default function Home({ data }) {
  const { allMarkdownRemark } = data;
  const mdFiles = allMarkdownRemark.edges;

  console.log(mdFiles);

  return (
    <div className="blog-post-container">
      {
        mdFiles[0].node.frontmatter.title
      }
    </div>
  );
}

export const pageQuery = graphql`
  query MyQuery {
    allMarkdownRemark {
      edges {
        node {
          frontmatter {
            title
          }
        }
      }
    }
  }
`
