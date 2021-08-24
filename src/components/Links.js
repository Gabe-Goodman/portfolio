import React from "react"
import { Link } from "gatsby"
import { AboutWrapper, ContactWrapper } from "../elements"

export const AboutMe = () => {
    return (
        <AboutWrapper>
            <Link to ="/about" style={{ textDecoration: 'none' }}
            // activeStyle={{ 
            //     fontWeight: 900
            //  }}
            >
                About
            </Link>
        </AboutWrapper>
    )
}

export const Contact = () => {
    return (
        <ContactWrapper>
            <a href="mailto:goodman.g@northeastern.edu" style={{ textDecoration: 'none' }}>
                Contact
            </a>
        </ContactWrapper>
    )
}