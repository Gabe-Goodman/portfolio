import React from "react"
import { useStaticQuery, graphql } from "gatsby"
import { 
    FooterWrapper, 
    FooterSocialWrapper, 
    FooterSocialIcons 
} from "../elements"

export const Footer = () => {

    const data = useStaticQuery(graphql`
    query {
        github: file(relativePath: {eq: "github.svg"}) {
            publicURL
        }
        linkedin: file(relativePath: {eq: "linkedin.svg"}) {
            publicURL
        }
    }
    `)

    return <FooterWrapper>
        <FooterSocialWrapper>
            <FooterSocialIcons>
                <a href="https://github.com/Gabe-Goodman" target="_blank" rel="noopener noreferrer">
                    <img
                        src={data.github.publicURL} alt="GitHub" />
                </a>
                <a href="https://www.linkedin.com/in/gabe-goodman-7362b5127/" target="_blank" rel="noopener noreferrer">
                    <img
                        src={data.linkedin.publicURL} alt="Linkedin" />
                </a>
            </FooterSocialIcons>
            <p>© 2021 Gabe Goodman. All rights reserved.</p>
        </FooterSocialWrapper>
    </FooterWrapper>
}