import React from 'react'
import { graphql } from 'gatsby'
import Layout from '../components/Layout'
import Card from '../components/Card'
import Section from '../components/Section'

const renderBlocks = (blocks) => {
    return blocks.map(block => (
        <Card 
          title={ block.title }
          small={ true }
          image={ block.image }
        />
    ));  
};


const ServiceOverviewPageTemplate = ({ body, image, subbody, subimage, blocks }) => (
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
        <div className="s-body_card-container">
            { 
                renderBlocks(blocks)
            }
        </div>
    </div>
);

const ServiceOverviewPage = ({data}) => {
    // const { frontmatter } = data.markdownRemark

    return (
        <Layout>
            <ServiceOverviewPageTemplate
                
            />
        </Layout>
    );
}

export default ServiceOverviewPage

/*export const serviceOverviewPageQuery = graphql`
    query ServiceOverviewPage($id: String!) {
        markdownRemark(id: { eq: $id }) {
            frontmatter {
                body
                image
                subbody
                subimage
                blocks {
                    title
                    description
                    image
                    buttontext
                }       
            }
        }
    }
`;
*/