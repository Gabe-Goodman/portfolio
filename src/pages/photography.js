import * as React from 'react';
import Img from 'gatsby-image';
import { graphql } from 'gatsby';
import { Container, Content, FeatureImage } from '../components';
import { H1 } from '../elements';

const photography = ({ data }) => {
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
          No beginning, no end. Our mind is born and dies; the emptiness of emptiness. - Ikkyu
        </H1>
      </Content>
    </Container>
  );
};

export default photography;

export const data = graphql`
  query photography {
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
