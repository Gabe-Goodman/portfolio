import React from "react"
import { Link } from "gatsby"
import { AboutWrapper, ContactWrapper } from "../elements"

export const AboutMe = () => {
    return (
        <AboutWrapper>
            <Link to ="/about">
                About
            </Link>
        </AboutWrapper>
    )
}

export const Contact = () => {
    return (
        <ContactWrapper>
            <Link href = "mailto:goodman.g@northeastern.edu">
                Contact
            </Link>
        </ContactWrapper>
    )
}