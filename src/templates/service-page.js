import React from 'react'
import { graphql } from 'gatsby'
import Layout from '../components/Layout'
import Section from '../components/Section'

const ServicePageTemplate = ({title, body, image, secbody, secimage, sectitle }) => (
    <div className="s-body s-body--internal">
        <Section
            image={ image }
            title={ title }
        >
            { body }
        </Section>
        <Section
            title={ sectitle }
            image={ secimage }
            theme="dark"
            leftImage={ true }
        >
            { secbody }
        </Section>
    </div>
);

const ServicePage = ({data}) => {
    const { frontmatter } = data.markdownRemark

    return (
        <Layout>
            <ServicePageTemplate
                { ...frontmatter }
                body={ data.markdownRemark.rawMarkdownBody }
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
