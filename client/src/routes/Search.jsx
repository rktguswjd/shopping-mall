import React, { useRef } from "react";

const Search = (props) => {
    const inputRef = useRef();
    const onSubmit = (event) => {
        event.preventDefault();
        console.log(inputRef.current.value);
        inputRef.current.value = "";
    };

    return (
        <form onSubmit={onSubmit}>
            <input ref={inputRef} placeholder="제품을 검색하세요..." />
            <button>검색</button>
        </form>
    );
};

export default Search;
