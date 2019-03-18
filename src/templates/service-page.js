import React from 'react'
import { graphql } from 'gatsby'
import Layout from '../components/Layout'
import Section from '../components/Section'

const ServicePageTemplate = ({ body, image, subbody, subimage }) => (
    <div className="s-body s-body--internal">
        <Section
            image={ image }
        >
            { body }
        </Section>
        <Section
            image={ subimage }
        >
            { subbody }
        </Section>
    </div>
);

const ServicePage = ({data}) => {
    console.log(data)
    const { frontmatter } = data.markdownRemark

    return (
        <Layout>
            <ServicePageTemplate
                { ...frontmatter }
            />
        </Layout>
    );
}

export default ServicePage

export const servicePageQuery = graphql`
    query ServicePage($id: String!) {
        markdownRemark(id: { eq: $id }) {
            frontmatter {
                title
                image
                subimage
            }
        }
    }
`;
