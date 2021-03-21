import React from "react";
import { graphql } from "gatsby";
import "./styles/index.css";
import Landing from "./components/Landing";

export default function Home({ data }) {
  const { allMarkdownRemark } = data;
  const mdFiles = allMarkdownRemark.edges;

  console.log(mdFiles);

  return (
    <div id="wrapper">
      <Landing mainTitle={mdFiles[0].node.frontmatter.title}/>
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
