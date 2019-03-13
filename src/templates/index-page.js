import React from 'react'
import Layout from '../components/Layout'
import Card from '../components/Card'
import Section from '../components/Section';

import image from '../img/cardImage.jpg';

const IndexPage = () => {
  return (
    <Layout>
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

        <div className="s-body_card-container wrapper">
            <Card 
              title="Small To Large 3D Printing"
              small={ true }
              image={ image } />
          
            <Card
              title="Start To Finish Fullfilment"
              small={ true }
              image={ image }
              />

              <Card
                title="Project Management"
                small={ true }
                image={ image }
              />
        </div>

        <div className="s-body_card-container s-body_card-container--dark">
        
          <Card 
            title="Test Title"
            subtitle="Subtitle Here"
            buttonText="Learn More"
            image={ image }
            large={ true }>
              Pellentesque accumsan mattis nulla, commodo pulvinar urna mattis fermentum. Donec aliquet ornare hendrerit. Suspendisse potenti. In hac habitasse platea dictumst. Duis vel commodo ex, eu gravida diam. Nunc in erat dolor. Pellentesque euismod laoreet leo, non interdum tortor aliquam at.
          </Card>
        
          <Card
            title="Test Title"
            buttonText="Learn More"
            image={ image }
            large={ true }>
              In hac habitasse platea dictumst. Duis vel commodo ex, eu gravida diam. Nunc in erat dolor. Pellentesque euismod laoreet leo, non interdum tortor aliquam at.
          </Card>

        </div>

      </div>
    </Layout>
  )
}

export default IndexPage