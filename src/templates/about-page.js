import React from 'react'
import Layout from '../components/Layout';
import Card from '../components/Card';
import Section from '../components/Section';

import { graphql } from 'gatsby';

const AboutPageTemplate = ({ subtitle, title, body, image, services }) => (
  <div className="s-body s-body--internal">
    <Section 
      title={title}
      subtitle={subtitle}
      image={image}
    >
      { body }
    </Section>
    <div className="s-body_card-container s-body_card-container--dark">
      
    </div>
  </div>
);

const AboutPage = () => (
    <Layout>
      About Us
    </Layout>
)

export default AboutPage

/*export const aboutPageQuery = graphql`
  query AboutPage($id: String!) {
    markdownRemark(id: { eq: $id }) {
      html
      frontmatter {
        title
      }
    }
  }
`*/