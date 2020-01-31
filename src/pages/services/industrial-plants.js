import React from "react";
import Helmet from "react-helmet";

import Layout from "../../components/Layout";
import Section from "../../components/Section";

const IndustrialPlantPageTemplate = ({ title, helmet }) => (
  <div className="s-body s-body--internal">
    {helmet || ""}
    <Section
      image={`https://raw.githubusercontent.com/andrewstanton/cirrus-design/master/src/img/content/industial%20plants/industial-4.jpg`}
      title={title}
    >
      <div>HEY</div>
    </Section>
    <Section
      title={`INDUSTRIAL PROCESSING PLANT MATTERPORT WALKTHROUGH`}
      image={`https://raw.githubusercontent.com/andrewstanton/cirrus-design/master/src/img/content/industial%20plants/industial-3.jpg`}
      theme="dark"
      leftImage={true}
    >
      HEY
    </Section>
  </div>
);

const IndustrialPlantPage = props => (
  <Layout {...props}>
    <IndustrialPlantPageTemplate
      helmet={
        <Helmet titleTemplate={`%s | Industrial Plants`}>
          <title>Industrial Plants</title>
          <meta
            name="description"
            content={`Our 3D scanning technology offers a powerful and effective means to gather existing conditions, which includes machine locations, piping, equipment and existing building structure. In our experience, we’ve found that older plants are often lacking accurate prints or drawings`}
          />
        </Helmet>
      }
    />
  </Layout>
);

export default IndustrialPlantPage;
