import React from 'react';
import { graphql } from 'gatsby';
import { Container, Content, ContentCard, FeatureImage, Pagination, Seo } from '../components';
import { H1, H3, P, P3 } from '../elements';
import technicalSkills from '../images/tech-stack.png';

const allPosts = ({ pageContext, data }) => {
  const { currentPage, numPages } = pageContext;
  const isFirst = currentPage === 1;
  const isLast = currentPage === numPages;
  const prevPage = currentPage - 1 === 1 ? '/' : `/${currentPage - 1}`;
  const nextPage = `/${currentPage + 1}`;

  const posts = data.allMdx.edges;

  return (
    <Container>
      <Seo
        title={'Gabe Goodman - Portfolio'}
        description={'Welcome to my professional portfolio.'}
      />
      <FeatureImage />
      <Content>
        <H1 textAlign="center" margin="0 0 1rem 0">
          Gabe Goodman
        </H1>
        <P color="dark2" textAlign="center">
          Project Portfolio
        </P>
        {posts.map((post) => (
          <ContentCard
            key={post.node.frontmatter.slug}
            // date={post.node.frontmatter.date}
            title={post.node.frontmatter.title}
            excerpt={post.node.frontmatter.excerpt}
            slug={post.node.frontmatter.slug}
            github={post.node.frontmatter.github}
          />
        ))}
      </Content>
      {/* <Pagination isFirst={isFirst} isLast={isLast} prevPage={prevPage} nextPage={nextPage} /> */}
    </Container>
  );
};

export default allPosts;

export const pageQuery = graphql`
  query AllPostsQuery($skip: Int!, $limit: Int!) {
    allMdx(sort: { fields: frontmatter___date, order: DESC }, skip: $skip, limit: $limit) {
      edges {
        node {
          frontmatter {
            slug
            title
            date(formatString: "MMMM YYYY")
            excerpt
            github
          }
        }
      }
    }
  }
`;
