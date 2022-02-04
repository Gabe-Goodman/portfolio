import styled from 'styled-components';

export const ProPicWrapper = styled.div`
    height: '200px',
    borderRadius: '50%',
    display: 'block',
    marginLeft: 'auto',
    marginRight: 'auto',
    marginTop: '-30%',
    marginBottom: '5%',
    backgroundColor: '#fff',
    padding: '6px',
    zIndex: 1000,

    @media ${(props) => props.theme.breakpoints.tablet} {
        display: none
    }
    
    @media ${(props) => props.theme.breakpoints.mobile} {
        display: none
    }
`;
