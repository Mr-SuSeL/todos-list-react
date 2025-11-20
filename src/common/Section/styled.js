import styled from "styled-components";


export const Title = styled.h2`
    font-size: 25px;
    margin: 10px;
`;

export const Header = styled.div`

    background-color: #fff;
    border: 2px solid #ddd;
    padding: 10px 30px;
    display: grid;
    grid-template-columns: 1fr 1fr;
    //margin-bottom: 20px;


@media (max-width: 610px) {
    grid-template-columns: 1fr; 
}
`;