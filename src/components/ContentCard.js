import React from 'react';
import { CardWrapper, P, H2 } from '../elements';
import { useStaticQuery, graphql } from 'gatsby';
import { Button } from '../components';

export const ContentCard = ({ date, title, excerpt, slug, github }) => {
  const data = useStaticQuery(graphql`
    query {
      github: file(relativePath: { eq: "github.svg" }) {
        publicURL
      }
    }
  `);

  return (
    <CardWrapper>
      <P size="xSmall" textAlign="center" margin="0 0 0.5rem 0" color="dark2">
        {date}
      </P>
      <H2 textAlign="center" margin="0 0 1rem 0">
        {title}
      </H2>
      <P size="xSmall" textAlign="center" margin="0 0 1.5rem 0">
        {excerpt}
      </P>
      <div
        style={{
          display: 'flex',
          flexDirection: 'row',
          justifyContent: 'flex-end',
          alignItems: 'center',
          marginTop: -5,
        }}
      >
        <Button href={slug}>Read More</Button>{' '}
        <a
          style={{ zIndex: 100, marginLeft: 15, paddingTop: 5 }}
          href={github}
          target="_blank"
          rel="noopener noreferrer"
        >
          <img style={{ zIndex: 100 }} src={data.github.publicURL} alt="GitHub" width="30rem" />
        </a>
      </div>
    </CardWrapper>
  );
};
