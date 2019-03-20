import React from 'react'
import Helmet from 'react-helmet'
import { graphql } from 'gatsby'

import Layout from '../components/Layout'
import Section from '../components/Section'

const AboutPageTemplate = ({title, body, image, secbody, secimage, sectitle, helmet }) => (
    <div className="s-body s-body--internal">
        { helmet || '' }
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

const AboutPage = ({data}) => {
    const { frontmatter } = data.markdownRemark
    const { siteMetadata } = data.site;

    return (
        <Layout>
            <AboutPageTemplate
                { ...frontmatter }
                body={ data.markdownRemark.rawMarkdownBody }
                helmet={
                    <Helmet titleTemplate={`%s | ${ siteMetadata.title }`}>
                        <title>{`${ frontmatter.title }`}</title>
                        <meta
                            name="description"
                            content={`${ data.markdownRemark.rawMarkdownBody }`}
                        />
                    </Helmet>
                }
            />
        </Layout>
    );
}

export default AboutPage

export const aboutPageQuery = graphql`
    query AboutPage($id: String!) {
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
