import styled, { css } from "styled-components";

export const List = styled.ul`
    background-color: #fff;
    padding: 20px;
    margin-top: -20px;
    text-align: center;
    border: 2px solid #ddd;
    border-top: 0;
    list-style: none;
    padding: 0px;
`;

export const Item = styled.li`
    display: grid;
    grid-template-columns: 70px 1fr 70px;
    padding: 20px;
    margin: 0 20px 10px 10px;
    border-bottom: 2px solid #ddd;
    text-align: left;
    /* margin-left: -20px; */
    align-items: center;

    ${(props) => props.hidden && css`
        display: none;
    `}
`;

export const Content = styled.span`
    ${({ done }) => done && css`
         text-decoration: line-through;
         display: flex;
         align-items: center;
         /* margin-left: -10px; */

        /* display: flex;
        align-items: center;

        justify-content: left;
        padding-left: 0;
        margin-left: -10px;

        padding-right: 0;
        align-self: left; */
    `}
`;

export const Button = styled.button`
    display: flex;
    align-items: center;
    /* text-align: left; */
    /* justify-content: center; */
        text-decoration: none;
    /* margin-left: 30px; */
        width: 30px;
        height: 30px;
        color: white;
        cursor: pointer;
        border: none;
        transition: background 0.3s;

    ${({ toggleDone }) => toggleDone && css`
        background-color: hsl(122, 59%, 40%);

        display: flex;
        align-items: center;
        justify-content: center;

        &: hover {
            background-color: hsl(122, 59%, 50%);
        }
    `}

    ${({ remove }) => remove && css`
        background-color: hsl(0, 89%, 42%);

        display: flex;
        align-items: center;
        justify-content: center;

        &: hover {
            background-color: hsl(0, 89%, 52%);
        }
    `}

`;