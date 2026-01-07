import { useState } from "react";

function SearchForm() {
    let [searchKeyword, setSearchKeyword] = useState("");
    const searchOnChange = (e) => { 
        setSearchKeyword(e.target.value);
    }

    return (
        <>
        검색어 : <input onChange={searchOnChange} /> {searchKeyword}
        </>
    )
}

export default SearchForm;