import { TextField } from "@mui/material";
import { useState } from "react";

const SearchBar = ({ onSearch } : { onSearch : ( query : string ) => void }) => {
    const [ query , setQuery ] = useState("");

    const handleChange = ( e : React.ChangeEvent<HTMLInputElement> ) => {
        setQuery(e.target.value);
        onSearch(e.target.value);
    };

    return (
        <TextField
            fullWidth
            label="Search Blogs..."
            value={query}
            onChange={handleChange}
            variant="outlined"
            className="mb-4"
        />
    )
}

export default SearchBar;