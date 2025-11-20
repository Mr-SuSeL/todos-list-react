import React from "react";
import { StyledSearchForm, Input } from "./styled";

const Search = () => {
    return (
        <StyledSearchForm>
            <Input 
                placeholder="Wyszukaj zadanie po treści..." 
                type="search" 
            />
        </StyledSearchForm>
    );
};

export default Search;