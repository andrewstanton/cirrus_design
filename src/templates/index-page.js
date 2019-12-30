import React from "react";
import { graphql } from "gatsby";
import Helmet from "react-helmet";

import Layout from "../components/Layout";
import Card from "../components/Card";
import Banner from "../components/Banner";

const renderBlocks = homeblocks => {
  return homeblocks.map((block, ix) => (
    <Card title={block.title} small={true} image={block.image} key={ix} />
  ));
};

const renderSections = homesections => {
  return homesections.map((block, ix) => (
    <Card
      title={block.title}
      subtitle={block.subtitle}
      buttonText={block.buttontext}
      buttonLink={block.buttonlink}
      image={block.image}
      large={true}
      key={ix}
    >
      {block.description}
    </Card>
  ));
};

const IndexPageTemplate = ({ slides, hydrosection, aboutsection }) => (
  <div className="s-body">
    <Banner slides={slides} />
    {hydrosection && (
      <div className="wrapper">
        <Card
          title={hydrosection.title}
          buttonText={hydrosection.buttontext}
          buttonLink={hydrosection.buttonlink}
          image={aboutsection.image}
          horizontal={true}
        >
          {hydrosection.description}
        </Card>
      </div>
    )}
    {aboutsection && (
      <div className="wrapper">
        <Card
          title={aboutsection.title}
          image={aboutsection.image}
          subtitle={aboutsection.subtitle}
          buttonText={aboutsection.buttontext}
          buttonLink={aboutsection.buttonlink}
          horizontal={true}
        >
          {aboutsection.description}
        </Card>
      </div>
    )}
  </div>
);

const IndexPage = ({ data }) => {
  const { frontmatter } = data.markdownRemark;
  const { siteMetadata } = data.site;

  return (
    <Layout>
      <Helmet>
        <title>{`${siteMetadata.title}`}</title>
        <meta name="description" content={`${siteMetadata.description}`} />
      </Helmet>

      <IndexPageTemplate {...frontmatter} />
    </Layout>
  );
};

export default IndexPage;

export const pageQuery = graphql`
  query IndexPageTemplate {
    site {
      siteMetadata {
        title
        description
      }
    }
    markdownRemark(frontmatter: { templateKey: { eq: "index-page" } }) {
      frontmatter {
        templateKey
        slides {
          title
          image
          subtitle
          description
          buttontext
          buttonlink
        }
        aboutsection {
          buttontext
          description
          image
          subtitle
          title
          buttonlink
        }
        hydrosection {
          buttontext
          description
          title
          buttonlink
        }
      }
    }
  }
`;
