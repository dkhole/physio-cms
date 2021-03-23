import React from "react";
import { graphql } from "gatsby";
import "../styles/index.css";
import Nav from "../components/Nav";
import Landing from "../components/Landing";
import Location from "../components/Location";
import Team from "../components/Team";

export default function Home({ data }) {
  const { allMarkdownRemark } = data;
  const mdFiles = allMarkdownRemark.edges;

  console.log(mdFiles);

  return (
    <div id="wrapper">
      <Nav />
      <Landing mainTitle={mdFiles[0].node.frontmatter.title}/>
      <Location />
      <Team />
    </div>
  );
}

export const pageQuery = graphql`
  query MyQuery {
    allMarkdownRemark {
      edges {
        node {
          frontmatter {
            date
            title
          }
        }
      }
    }
  }
`
