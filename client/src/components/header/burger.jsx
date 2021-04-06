import React, { useState } from "react";
import styled from "styled-components";
import RightNav from "./rightNav";
import { faBars, faTimes } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const StyledBurger = styled.div`
    position: absolute;
    right: 2rem;
    font-size: 20px;
    background-color: transparent;
    border: none;
    outline: none;
    display: none;
    cursor: pointer;
    z-index: 20;
    @media (max-width: 768px) {
        display: flex;
        justify-content: space-around;
        flex-flow: column nowrap;
    }
    div {
        width: 2rem;
        height: 0.25rem;
        background-color: ${({ open }) => (open ? "#ccc" : "#333")};
        border-radius: 10px;
        transform-origin: 1px;
        transition: all 0.3s linear;
    }
`;

const Burger = () => {
    const [open, setOpen] = useState(false);

    return (
        <>
            <StyledBurger open={open} onClick={() => setOpen(!open)}>
                {open ? (
                    <FontAwesomeIcon icon={faTimes} />
                ) : (
                    <FontAwesomeIcon icon={faBars} />
                )}
            </StyledBurger>
            <RightNav open={open} />
        </>
    );
};

export default Burger;
