import React from "react"
import { Container, FeatureImage, Content, ContentCard } from "../components"


const IndexPage = () => {
  return (
    <Container>
      <FeatureImage />
      <Content>
        <ContentCard date="August 20" 
        title="My first project" 
        excerpt="My first project lalala" 
        slug="/test" />
      </Content>
    </Container>
  )
}

export default IndexPage
