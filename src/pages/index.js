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
  const [mdFiles, setMdFiles] = useState(new Map());

  useEffect(() => {
    const extractImg = new Map();

    for(const queryImg of allImageSharp.edges) {
      const dot = queryImg.node.fluid.originalName.indexOf('.');
      const boundary = queryImg.node.fluid.originalName.length - dot;
      const key = queryImg.node.fluid.originalName.slice(0, -boundary);
      extractImg.set(key, queryImg.node.gatsbyImageData);
    }
    setImages(extractImg);

    const extractMdFiles = new Map();

    for(const queryMdFile of allMarkdownRemark.edges) {
      extractMdFiles.set(queryMdFile.node.frontmatter.select, queryMdFile.node.frontmatter.title);
    }
    setMdFiles(extractMdFiles);

  }, [])  // eslint-disable-line react-hooks/exhaustive-deps

  console.log(images);
  
  return (
    <div id="wrapper">
      <Nav />
      <Landing landingImg={images.get('landing')} mainTitle={mdFiles.get('title')} suburb={mdFiles.get('suburb')}/>
      <Location address={mdFiles.get('address')} description={mdFiles.get('description')} map={images.get('map')}/>
      <Team prof1={images.get('paul')} prof2={images.get('mintae')} intro1={mdFiles.get('prof1_description')} intro2={mdFiles.get('prof2_description')}/>
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
            select
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
