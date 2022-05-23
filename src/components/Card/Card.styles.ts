import styled from 'styled-components';

export const StyledCard = styled.ul`
    list-style-type: none;
    display: flex;
    max-width: 1100px;

    padding: 40px;
    border-radius: 20px;
    box-shadow: 2px 3px 10px #ccc;
    background-color: white;

    & > li {
        border-right: 1px solid #ccc;
        min-width: 200px;
        padding: 10px 40px;

        display: flex;
        flex-direction: column;

        &:last-child {
            border-right: 0;
        }
    }

    @media (max-width: 640px) { 
      flex-direction: column;
      padding: 20px;

      & > li {
        border-right: none
        padding: 10px 30px;
    }
     }
`;

export const Subtitle = styled.span`
    text-tranform: uppercase;
    font-weight: 900;
    color: hsl(0, 0%, 59%);
`;

export const Value = styled.span`
    font-size: 24px;
    font-weight: 900;
    margin-top: 10px;
`;
