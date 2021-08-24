import styled from "styled-components"

export const AboutWrapper = styled.nav`
    grid-column: 12 / span 1;
    grid-row: 1 / 2;
    display: flex;
    align-items: center;
    z-index: 10;

    & img {
        /* height for icon */
        height: 30px;
    }

        @media ${props => props.theme.breakpoints.tablet} {
            grid-column: 6 / span 1;
        }
`

export const ContactWrapper = styled.nav`
grid-column: 13 / span 1;
grid-row: 1 / 2;
display: flex;
align-items: center;
z-index: 10;

    & img {
        /* height for icon */
        height: 30px;
    }

    @media ${props => props.theme.breakpoints.tablet} {
                grid-column: 7 / span 1;
    }
`