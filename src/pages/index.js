import React from "react"
import { graphql } from "gatsby";

export default function Home({ data }) {
// data.markdownRemark holds your data
  const { markdownRemark } = data;
  const { frontmatter } = markdownRemark;

  return (
    <div className="blog-post-container">
      {
        frontmatter.slug
      }
    </div>
  );
}

export const pageQuery = graphql`
  query MyQuery {
    markdownRemark {
      frontmatter {
        title
        slug
      }
    }
  }
`
