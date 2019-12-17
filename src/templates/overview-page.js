import React from "react";
import { graphql } from "gatsby";
import Layout from "../components/Layout";
import Card from "../components/Card";
import Section from "../components/Section";

const renderBlocks = services => {
  return services !== null
    ? services.map(service => (
        <Card
          title={service.title}
          small={true}
          image={service.image}
          buttonText={service.buttontext}
          buttonLink={service.buttonlink}
        >
          {service.description}
        </Card>
      ))
    : null;
};

const OverviewPageTemplate = ({ subtitle, title, body, image, services }) => (
  <div className="s-body s-body--internal">
    <Section title={title} subtitle={subtitle} image={image}>
      {body}
    </Section>
    <div className="s-body_card-container s-body_card-container--dark">
      {renderBlocks(services)}
    </div>
  </div>
);

const OverviewPage = ({ data }) => {
  const { frontmatter } = data.markdownRemark;

  return (
    <Layout>
      <OverviewPageTemplate
        {...frontmatter}
        body={data.markdownRemark.rawMarkdownBody}
      />
    </Layout>
  );
};

export default OverviewPage;

export const overviewPageQuery = graphql`
  query ServiceOverviewPage($id: String!) {
    markdownRemark(id: { eq: $id }) {
      frontmatter {
        title
        subtitle
        image
        services {
          title
          description
          buttontext
          buttonlink
          image
        }
      }
      rawMarkdownBody
    }
  }
`;
