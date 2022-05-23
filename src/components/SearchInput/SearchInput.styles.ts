import styled from 'styled-components';

export const StyledInput = styled.input`
    padding: 12px 16px;
    width: 450px;
    border: none;
    border-top-left-radius: 10px;
    border-bottom-left-radius: 10px;

    font-family: inherit;
    font-size: 14px;

    @media (max-width: 640px) {
        width: 250px;
    }
`;

export const SearchButton = styled.button`
    padding: 14px 14px;
    background-color: black;
    color: white;
    border: none;

    border-top-right-radius: 10px;
    border-bottom-right-radius: 10px;

    font-size: 14px;
    font-weight: 600;
    cursor: pointer;

    transition: background-color 0.5s ease-out;

    &:hover {
        background-color: hsl(0, 0%, 59%);
    }
`;

export const SearchBar = styled.div`
    display: flex;
`;
