import React from "react"
import { ContainerWrapper } from "../elements"
import { Nav, Footer } from "../components"
import { AboutMe, Contact } from "./Links"

export const Container = ({children}) => {
    return <ContainerWrapper>
            <Nav />
            <AboutMe />
            <Contact />
            {children}
            <Footer />
        </ContainerWrapper>
}