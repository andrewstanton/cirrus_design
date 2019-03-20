import React from 'react'
import Helmet from 'react-helmet'
import { graphql } from 'gatsby'

import Layout from '../components/Layout'
import Section from '../components/Section'
import ContactForm from '../components/ContactForm'

const ContactPageTemplate = ({ subtitle, title, body, helmet }) => (
  <div className="s-body s-body--internal">
    { helmet || '' }
    <Section 
      title={title}
      subtitle={subtitle}
    >
      { body }
    </Section>
    <div className="section section--dark">
        <div className="wrapper wrapper--no-flex">
            <h1 className="h1">Have Us Contact You</h1>
            <p className="mt">Fill out the information below and have us contact you!</p>
            <ContactForm />
        </div>
    </div>
  </div>
);

const ContactPage = ({data}) => {
    const { frontmatter } = data.markdownRemark;
    const { siteMetadata } = data.site;
    
    return(
        <Layout>
            <ContactPageTemplate 
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

export default ContactPage

export const contactPageQuery = graphql`
query ContactPageQuery($id: String!) {
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