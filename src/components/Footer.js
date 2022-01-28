import React from 'react';
import { useStaticQuery, graphql } from 'gatsby';
import { FooterWrapper, FooterSocialWrapper, FooterSocialIcons, P } from '../elements';

export const Footer = () => {
  const data = useStaticQuery(graphql`
    query {
      github: file(relativePath: { eq: "github.svg" }) {
        publicURL
      }
      linkedin: file(relativePath: { eq: "linkedin.svg" }) {
        publicURL
      }
    }
  `);

  return (
    <FooterWrapper>
      <FooterSocialWrapper>
        {/* <FooterSocialIcons>
          <a href="https://github.com/Gabe-Goodman" target="_blank" rel="noopener noreferrer">
            <img src={data.github.publicURL} alt="GitHub" />
          </a>
          <a
            href="https://www.linkedin.com/in/gabe-goodman/"
            target="_blank"
            rel="noopener noreferrer"
          >
            <img src={data.linkedin.publicURL} alt="Linkedin" />
          </a>
        </FooterSocialIcons> */}
        <P size="xSmall" color="dark3">
          © 2022 Gabe Goodman. All rights reserved.
        </P>
      </FooterSocialWrapper>
    </FooterWrapper>
  );
};
