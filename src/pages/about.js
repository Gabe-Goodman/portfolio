import * as React from 'react';
import Img from 'gatsby-image';
import { graphql } from 'gatsby';
import { Container, Content, FeatureImage } from '../components';
import { H1 } from '../elements';

const about = ({ data }) => {
  //   const featureImage = data.imageSharp.fixed;

  console.log('dataaggagag', data.allFile.edges);

  return (
    <Container>
      {/* <FeatureImage fixed={featureImage} /> */}
      {/* {data.allFile.edges.map((img) => (
        <Img fluid={img.node.childImageSharp.fluid} />
      ))} */}
      <Content>
        <H1 textAlign="center" margin="0 0 1rem 0">
          {' '}
          Hi there, I'm Gabe. I like to create through music, photography, and programming. Have a
          look at my coding projects and discover some of my early photos from my time in Tokyo,
          Japan. Please feel free to reach out with any specific requests.
        </H1>
      </Content>
    </Container>
  );
};

export default photography;

export const data = graphql`
  query about {
    allFile(filter: { sourceInstanceName: { eq: "photography" } }) {
      edges {
        node {
          childImageSharp {
            fluid(maxWidth: 500) {
              ...GatsbyImageSharpFluid
            }
          }
        }
      }
    }
  }
`;
