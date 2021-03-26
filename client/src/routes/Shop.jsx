import React from "react";
import styled from "./shop.module.css";
import { NavLink } from "react-router-dom";
import Product from "../components/product";

const Shop = (props) => {
    return (
        <>
            <ul className={styled.tabs}>
                <li className={styled.tabs_category}>
                    <NavLink exact to="/shop">
                        ALL
                    </NavLink>
                </li>
                <li className={styled.tabs_category}>
                    <NavLink to="/shop/category/outer">OUTER</NavLink>
                </li>
                <li className={styled.tabs_category}>
                    <NavLink to="/shop/category/top">TOP</NavLink>
                </li>
                <li className={styled.tabs_category}>
                    <NavLink to="/shop/category/pants">PANTS</NavLink>
                </li>
                <li className={styled.tabs_category}>
                    <NavLink to="/shop/category/skirt">SKIRT</NavLink>
                </li>
            </ul>
            <div className={styled.productList}>
                <div className={styled.products}>
                    <Product />
                </div>
            </div>
        </>
    );
};

export default Shop;
