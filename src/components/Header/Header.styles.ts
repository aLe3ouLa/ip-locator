import styled from 'styled-components';

export const StyledHeader = styled.div`
    position: relative;
`;

export const Title = styled.h1`
    color: white;
    text-align: center;
`;

export const Wrapper = styled.div`
    position: absolute;
    top: 10px;
    left: 50%;
    transform: translateX(-50%);

`;

export const Image = styled.img`
    width: 100vw;

    @media (max-width: 640px) {
        height: 30vh;
    }
`;
