import React from 'react'
import { graphql } from 'gatsby'
import Layout from '../components/Layout'
import Card from '../components/Card'
import Section from '../components/Section';

import image from '../img/cardImage.jpg';

const renderBlocks = (homeblocks) => {
  return homeblocks.map(block => (
    <Card 
      title={ block.title }
      small={ true }
      image={ block.image }
    />
  ));
};

const renderSections = (homesections) => {
  return homesections.map(block => (
    <Card 
      title={ block.title }
      subtitle={ block.subtitle }
      buttonText={ block.buttontext }
      image={ block.image }
      large={ true }>
      { block.description } 
    </Card>
  ));
}

const IndexPageTemplate = ({homeblocks, homesections, aboutsection}) => (
  <div className="s-body s-body--internal">
    <Section
      theme="dark"
      image={image}
      title="Section Title Here"
      subtitle="Subtitle for ths subsection will go here">
      Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus euismod mauris ac purus egestas, ac viverra orci tempor. Pellentesque efficitur rutrum sapien, sit amet convallis lacus ultricies in. Phasellus a dolor lorem. Proin lacinia dolor vitae metus ullamcorper, hendrerit ultrices est iaculis. Integer ac fringilla libero. Proin efficitur mauris eu diam ornare sagittis. Pellentesque leo tellus, suscipit vitae arcu sed, eleifend eleifend orci. Donec lobortis enim dapibus lacus consectetur vehicula. Pellentesque et bibendum enim. Nulla tincidunt justo at nisi ultricies vulputate. Nullam sagittis ac diam in vulputate. Donec aliquam, ligula nec porttitor sodales, quam nibh maximus odio, eu convallis lacus elit sed risus.
      <br/><br/>
      Pellentesque accumsan mattis nulla, commodo pulvinar urna mattis fermentum. Donec aliquet ornare hendrerit. Suspendisse potenti. In hac habitasse platea dictumst. Duis vel commodo ex, eu gravida diam. Nunc in erat dolor. Pellentesque euismod laoreet leo, non interdum tortor aliquam at.
      <br/><br/>
      <button className="btn btn--default">
        Learn More
      </button>

    </Section>

    {
    
      homeblocks ? 
      <div className="s-body_card-container wrapper">
        { renderBlocks(homeblocks) }
      </div> : null
    
    }

    {
      homesections ?
      <div className="s-body_card-container s-body_card-container--dark">
        { renderSections(homesections) }
      </div> : null
    }

    {
      aboutsection ?
      <Section
      theme="dark"
      leftImage={ true }
      image={ aboutsection.image }
      title={ aboutsection.title }
      subtitle={ aboutsection.subtitle }>
        { aboutsection.description }
        {
          aboutsection.buttontext ?
            <button className="btn btn--default btn--margin-top">
              { aboutsection.buttontext }
            </button> : null
        }
      </Section> : null
    }

  </div>
)

const IndexPage = ({data}) => {
  const { frontmatter } = data.markdownRemark

  return (
    <Layout>

      <IndexPageTemplate
        homeblocks={frontmatter.homeblocks}
        homesections={frontmatter.homesections}
        aboutsection={frontmatter.aboutsection}
      />

    </Layout>
  );
}

export default IndexPage

export const pageQuery = graphql`
query IndexPageTemplate {
  markdownRemark(frontmatter: {templateKey: {eq: "index-page"}}) {
      frontmatter {
        templateKey
        homeblocks {
          image
          title
        }
        homesections {
          buttontext
          description
          image
          subtitle
          title
        }
        aboutsection {
          buttontext
          description
          image
          subtitle
          title
        } 
      }
  }
}
`