import * as React from "react"
import { Link, graphql } from "gatsby"
import { Container, Content, FeatureImage } from "../components"
import { H1 } from "../elements"

export const about = ({data}) => {
  const aboutImage = data.imageSharp.fixed

  return (
    <Container>
      <FeatureImage fixed={aboutImage} />
      <Content>
        <H1 textAlign="center" margin="0 0 1rem 0">
          {" "}
          No beginning, no end. Our mind is born and dies; 
          the emptiness of emptiness. - Ikkyu
        </H1>
      </Content>
    </Container>
  )
}

export default about

export const aboutQuery = graphql`
  query aboutQuery {
    imageSharp(fixed: {originalName: { eq: "404.jpg" } }) {
      fixed (width:1920) {
        ...GatsbyImageSharpFixed
      }
    }
  }
`