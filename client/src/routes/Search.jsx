import React, { useRef } from "react";
import styled from "./search.module.css";

const Search = (props) => {
    const inputRef = useRef();
    const onSubmit = (event) => {
        event.preventDefault();
        console.log(inputRef.current.value);
        inputRef.current.value = "";
    };

    return (
        <>
            <div className={styled.page_name}>PRODUCT SEARCH...</div>
            <form onSubmit={onSubmit}>
                <input
                    ref={inputRef}
                    placeholder="제품을 검색하세요..."
                    className={styled.input}
                />
                <button className={styled.btn}>SEARCH</button>
            </form>
        </>
    );
};

export default Search;
