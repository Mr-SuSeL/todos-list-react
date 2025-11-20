import styled from "styled-components";
import { NavLink } from "react-router-dom";

export const List = styled.ul`
    list-style: none;
    padding: 0;
    margin: 0;
    display: flex;
    justify-content: center;
    background-color: teal;
`;

export const Item = styled.li`
    margin: 0 15px;
    padding: 15px 0;
`;

export const StyledNavLink = styled(NavLink)`
    color: white;
    text-decoration: none;
    font-size: 18px;
    transition: color 0.3s;
    
    &:hover {
        color: #eee;
    }
    
    &.active {
        font-weight: bold;
    }
`;