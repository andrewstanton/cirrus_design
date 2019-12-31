import React from "react";
import { graphql } from "gatsby";
import Helmet from "react-helmet";

import Layout from "../components/Layout";
import Card from "../components/Card";
import Banner from "../components/Banner";
import Section from "../components/Section";

const isNull = variable => variable === "" || variable === null;

const IndexPageTemplate = ({ slides, hydrosection, aboutsection }) => (
  <div className="s-body">
    <Banner slides={slides} />
    {!isNull(hydrosection) && (
      <Section title={hydrosection.title} theme="dark" leftImage={true}>
        {hydrosection.description}
      </Section>
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
          description
          title
        }
      }
    }
  }
`;
