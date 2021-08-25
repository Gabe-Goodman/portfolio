import styled from "styled-components"

export const NavWrapper = styled.nav`
    grid-column: 2 / span 12;
    grid-row: 1 / 2;
    display: flex;
    align-items: center;
    z-index: 11;

    & img {
        /* height for icon */
        height: 65px;
    }

        @media ${props => props.theme.breakpoints.tablet} {
            grid-column: 2 / span 6;
            margin-top: 125px;
            margin-left: 6px;
            position: fixed;
        }
    `