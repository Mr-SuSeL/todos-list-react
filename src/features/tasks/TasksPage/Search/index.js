import React from "react";
import { StyledSearchForm, Input } from "./styled";
import { useLocation, useNavigate } from "react-router-dom"; 
import searchQueryParamName from "../searchQueryParamName";

const Search = () => {
    const location = useLocation();
    // useNavigate ZAMIAST useHistory
    const navigate = useNavigate(); 
    

    const query = (new URLSearchParams(location.search)).get(searchQueryParamName);

    const onInputChange = ({target}) => {
        const searchParams = new URLSearchParams(location.search);

        if(target.value.trim() === "") {
            searchParams.delete(searchQueryParamName);
        } else {
            searchParams.set(searchQueryParamName, target.value);
        }
        
        navigate({
            pathname: location.pathname,
            search: searchParams.toString(),
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