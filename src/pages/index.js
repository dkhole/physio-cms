import React, { useEffect, useState } from "react";
import { graphql } from "gatsby";
import "../styles/index.css";
import Nav from "../components/Nav";
import Landing from "../components/Landing";
import Location from "../components/Location";
import Team from "../components/Team";
import Gallery from "../components/Gallery";
import Contact from "../components/Contact";
import Footer from "../components/Footer";

export default function Home({ data }) {
  const { allMarkdownRemark, allImageSharp } = data;
  const [images, setImages] = useState(new Map());
  const mdFiles = allMarkdownRemark.edges;

  useEffect(() => {
    const extractImg = new Map();
    //add each image edge into a map with key = orig_id and v = image_data
    for(const queryImg of allImageSharp.edges) {
      const dot = queryImg.node.fluid.originalName.indexOf('.');
      const boundary = queryImg.node.fluid.originalName.length - dot;
      const key = queryImg.node.fluid.originalName.slice(0, -boundary);
      extractImg.set(key, queryImg.node.gatsbyImageData);
    }
    setImages(extractImg);
  }, [])  // eslint-disable-line react-hooks/exhaustive-deps

  return (
    <div id="wrapper">
      <Nav />
      <Landing landingImg={images.get('landing')} mainTitle={mdFiles[0].node.frontmatter.title} suburb={mdFiles[1].node.frontmatter.title}/>
      <Location />
      <Team prof1={images.get('paul')} prof2={images.get('mintae')} />
      <Gallery gallery1={images.get('gallery1')} gallery2={images.get('gallery2')} gallery3={images.get('gallery3')}/>
      <Contact />
      <Footer />
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
    allImageSharp {
      edges {
        node {
          gatsbyImageData
          fluid {
            originalName
          }
        }
      }
    }
  }
`
