import * as React from 'react';
import { useStaticQuery, graphql } from 'gatsby';
import { Container, Content, FeatureImage } from '../components';
import { H1 } from '../elements';

const Contact = ({ data }) => {
  const contactImage = data.imageSharp.fixed;

  return (
    <Container>
      <FeatureImage fixed={contactImage} />
      <Content>
        <FeatureImage fixed={contactImage} />
        <H1 textAlign="center" margin="0 0 1rem 0">
          {' '}
          Reach Out:
        </H1>
        <div
          style={{
            paddingRight: '3rem',
            paddingLeft: '3rem',
            display: 'flex',
            flexDirection: 'row',
            justifyContent: 'space-evenly',
            alignItems: 'center',
          }}
        >
          <div style={{ flex: 1 }}>
            <a href="https://github.com/Gabe-Goodman" target="_blank" rel="noopener noreferrer">
              <img src={data.github.publicURL} alt="GitHub" width="100rem" />
            </a>
          </div>
          <div
            style={{
              flex: 1,
            }}
          >
            <a
              style={{
                flex: 1,
              }}
              target="_blank"
              rel="noopener noreferrer"
              href="mailto:goodman.g@northeastern.edu"
              style={{ textDecoration: 'none' }}
            >
              <text style={{ fontSize: '7rem' }}>✉️</text>
            </a>
          </div>
          <div style={{ flex: 0.5 }}>
            <a
              href="https://www.linkedin.com/in/gabe-goodman/"
              target="_blank"
              rel="noopener noreferrer"
            >
              <img src={data.linkedin.publicURL} alt="Linkedin" width="100rem" />
            </a>
          </div>
        </div>
      </Content>
    </Container>
  );
};

export default Contact;

export const contactQuery = graphql`
  query contactQuery {
    imageSharp(fixed: { originalName: { eq: "404.jpg" } }) {
      fixed(width: 1920) {
        ...GatsbyImageSharpFixed
      }
    }
    github: file(relativePath: { eq: "github.svg" }) {
      publicURL
    }
    linkedin: file(relativePath: { eq: "linkedin.svg" }) {
      publicURL
    }
  }
`;
