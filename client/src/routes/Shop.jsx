import React from "react";
import styled from "./shop.module.css";
import { NavLink } from "react-router-dom";
import Product from "../components/product";

const Shop = (props) => {
    return (
        <>
            <ul className={styled.tabs}>
                <li>
                    <NavLink exact to="/shop">
                        ALL
                    </NavLink>
                </li>
                <li>
                    <NavLink to="/shop/category/outer">OUTER</NavLink>
                </li>
                <li>
                    <NavLink to="/shop/category/top">TOP</NavLink>
                </li>
                <li>
                    <NavLink to="/shop/category/pants">PANTS</NavLink>
                </li>
                <li>
                    <NavLink to="/shop/category/skirt">SKIRT</NavLink>
                </li>
            </ul>

            <div className={styled.products}>
                <Product />
            </div>
        </>
    );
};

export default Shop;
