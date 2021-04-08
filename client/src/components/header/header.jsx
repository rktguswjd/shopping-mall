import React from "react";
import styled from "styled-components";
import Burger from "./burger";
import { Link } from "react-router-dom";

const Nav = styled.nav`
    display: flex;
    position: fixed;
    z-index: 2;
    justify-content: space-between;
    padding: 2rem 3rem;
    width: 100%;
    align-items: center;
    font-family: "Spectral", "Noto Sans KR", sans-serif;
    .logo {
        font-size: 2rem;
    }
    a{
        color:black;
    }
}
`;

const Header = () => {
    return (
        <Nav>
            <Link className="logo" to="/">
                HYUNJEONG
            </Link>
            <Burger />
        </Nav>
    );
};

export default Header;
