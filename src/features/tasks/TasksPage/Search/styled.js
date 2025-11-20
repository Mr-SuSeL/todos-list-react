import styled, { css } from "styled-components";

export const StyledSearchForm = styled.form`
    display: flex;
    //margin-top: -20px;
    border: 2px solid #ddd;
    padding: 20px;
    background-color: #fff;
    font-size: 20px;
    justify-content: space-evenly;
    flex-wrap: nowrap;
    margin-bottom: 20px;

    @media (max-width: 767px) {
        flex-wrap: wrap;
    }
`;

export const Input = styled.input`
    flex-grow: 1;
    border: 2px solid #ddd;
    
    ${({ placeholder }) =>
        placeholder &&
        css`
            padding: 10px;
            margin: 10px;
            flex-shrink: 0;
            font-size: 16px; 

            @media (max-width: 767px) {
                width: 100%;
            }
        `}
`;