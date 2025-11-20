import React from "react";
import { StyledSearchForm, Input } from "./styled";
import searchQueryParamName from "../searchQueryParamName";
import { useQueryParameter, useReplaceQueryParameter } from "../queryParameters";

const Search = () => {

    const query = useQueryParameter(searchQueryParamName);
    const replaceQueryParameter = useReplaceQueryParameter();

    const onInputChange = ({target}) => {
        replaceQueryParameter({
            key: searchQueryParamName,
            value: target.value.trim() !== "" ? target.value : undefined,
        });
    };

    return (
        <StyledSearchForm>
            <Input 
                placeholder="Filtruj zadania" 
                value = {query || ""} 
                type="search" 
                onChange={onInputChange}
            />
        </StyledSearchForm>
    );
};

export default Search;