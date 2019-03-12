import React from 'react'
import Layout from '../components/Layout'
import Card from '../components/Card'

import image from '../img/cardImage.jpg';

const IndexPage = () => {
  return (
    <Layout>
      <div className="s-body--internal">
        Hey Man

        <div className="s-body_card-container s-body_card-container--small">
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