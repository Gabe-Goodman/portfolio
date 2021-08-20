import React from "react"
import { /* useStaticQuery, graphql,*/ Link } from "gatsby"
import { NavWrapper } from "../elements"
import { StaticImage } from "gatsby-plugin-image"

export const Nav = () => {

    // const data = useStaticQuery(graphql`
    //     query {
    //         logo: file(relativePath: { eq: "logo.jpg" }) {
    //             publicURL
    //         }
    //     }
    // `)

    return (
        <NavWrapper>
            <Link to ="/">
                <StaticImage
                    src={"../images/logo.jpg"} alt="Banner" />
            </Link>
        </NavWrapper>
    )
}