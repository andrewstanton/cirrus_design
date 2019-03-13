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


const ServicePageTemplate = ({ body, image, subbody, subimage, blocks }) => (
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

const ServicePage = ({data}) => {
    const { frontmatter } = data.markdownRemark

    return (
        <Layout>
            <ServicePageTemplate
                
            />
        </Layout>
    );
}

export default ServicePage

