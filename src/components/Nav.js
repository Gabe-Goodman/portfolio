import React from "react"
import { useStaticQuery, graphql, Link } from "gatsby"
import { NavWrapper } from "../elements"
// import { StaticImage } from "gatsby-plugin-image"

export const Nav = () => {

    const data = useStaticQuery(graphql`
        query {
            logo: file(relativePath: { eq: "door_logo.png" }) {
                publicURL
            }
        }
    `)

    return (
        <NavWrapper>
            <Link to ="/">
                {/* <StaticImage
                    src={"../images/logo.jpg"} alt="Banner" /> */}
                <img src={data.logo.publicURL} alt="My Logo" />
            </Link>
        </NavWrapper>
    )
}