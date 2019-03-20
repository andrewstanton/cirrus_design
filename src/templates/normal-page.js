import React from 'react'
import Helmet from 'react-helmet'
import { graphql } from 'gatsby'

import Layout from '../components/Layout'
import Section from '../components/Section'

const NormalPageTemplate = ({ subtitle, title, body, helmet }) => (
  <div className="s-body s-body--internal">
    { helmet || '' }
    <Section 
      title={title}
      subtitle={subtitle}
    >
      { body }
    </Section>
  </div>
);

const NormalPage = ({data}) => {
    const { frontmatter } = data.markdownRemark;

    return(
        <Layout>
            <NormalPageTemplate 
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

export default NormalPage

export const normalPageQuery = graphql`
query NormalPageQuery$id: String! {
    site {
        siteMetadata {
            title
        }
    }
    markdownRemark(id: { eq: $id }) {
        frontmatter {
            title
            subtitle
        }
        rawMarkdownBody
    }
}
`