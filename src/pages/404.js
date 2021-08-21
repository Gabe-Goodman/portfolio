import * as React from "react"
import { Link, graphql } from "gatsby"
import { Container, Content, FeatureImage } from "../components"
import { H1 } from "../elements"

export const notFound = ({data}) => {
  const featureImage = data.imageSharp.fixed

  return (
    <Container>
      <FeatureImage fixed={featureImage} />
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

export default notFound

export const notFoundQuery = graphql`
  query NotFOundQuery {
    imageSharp(fixed: {originalName: { eq: "404.jpg" } }) {
      fixed (width:1920) {
        ...GatsbyImageSharpFixed
      }
    }
  }
`


// // styles
// const pageStyles = {
//   color: "#232129",
//   padding: "96px",
//   fontFamily: "-apple-system, Roboto, sans-serif, serif",
// }
// const headingStyles = {
//   marginTop: 0,
//   marginBottom: 64,
//   maxWidth: 320,
// }

// const paragraphStyles = {
//   marginBottom: 48,
// }
// const codeStyles = {
//   color: "#8A6534",
//   padding: 4,
//   backgroundColor: "#FFF4DB",
//   fontSize: "1.25rem",
//   borderRadius: 4,
// }

// // markup
// const NotFoundPage = () => {
//   return (
//     <main style={pageStyles}>
//       <title>Not found</title>
//       <h1 style={headingStyles}>Page not found</h1>
//       <p style={paragraphStyles}>
//         Sorry{" "}
//         <span role="img" aria-label="Pensive emoji">
//           😔
//         </span>{" "}
//         we couldn’t find what you were looking for.
//         <br />
//         {process.env.NODE_ENV === "development" ? (
//           <>
//             <br />
//             Try creating a page in <code style={codeStyles}>src/pages/</code>.
//             <br />
//           </>
//         ) : null}
//         <br />
//         <Link to="/">Go home</Link>.
//       </p>
//     </main>
//   )
// }

// export default NotFoundPage
