import React from "react";
import Helmet from "react-helmet";
import { graphql } from "gatsby";
import { markdown } from "markdown";

import Card from "../components/Card";
import Layout from "../components/Layout";
import Section from "../components/Section";

const renderBlocks = blocks => {
  return blocks.map(block => (
    <Card title={block.subtitle} small={true} image={block.image}>
      <div dangerouslySetInnerHTML={{ __html: block.description }} />
    </Card>
  ));
};

const isNull = variable => variable === "" || variable === null;

const renderMarkdown = md => markdown.toHTML(md);

const ServicePageTemplate = ({
  title,
  body,
  image,
  secbody,
  secimage,
  sectitle,
  helmet,
  blocks
}) => (
  <div className="s-body s-body--internal">
    {helmet || ""}
    <Section image={image} title={title}>
      {body}
    </Section>
    {(!isNull(secbody) || !isNull(sectitle)) && (
      <Section title={sectitle} image={secimage} theme="dark" leftImage={true}>
        {secbody}
      </Section>
    )}
    {!isNull(blocks) && (
      <div className="s-body_card-container">{renderBlocks(blocks)}</div>
    )}
  </div>
);

const ServicePage = ({ data }) => {
  const { frontmatter } = data.markdownRemark;
  const { siteMetadata } = data.site;

  return (
    <Layout>
      <ServicePageTemplate
        {...frontmatter}
        body={data.markdownRemark.rawMarkdownBody}
        helmet={
          <Helmet titleTemplate={`%s | ${siteMetadata.title}`}>
            <title>{`${frontmatter.title}`}</title>
            <meta
              name="description"
              content={`${data.markdownRemark.rawMarkdownBody}`}
            />
          </Helmet>
        }
      />
    </Layout>
  );
};

export default ServicePage;

export const servicePageQuery = graphql`
  query ServicePage($id: String!) {
    site {
      siteMetadata {
        title
      }
    }
    markdownRemark(id: { eq: $id }) {
      frontmatter {
        title
        image
        secbody
        sectitle
        secimage
        blocks {
          subtitle
          description
          image
        }
      }
      rawMarkdownBody
    }
  }
`;
