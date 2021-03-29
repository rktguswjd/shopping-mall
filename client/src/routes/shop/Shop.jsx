import React, { useEffect } from "react";
import styled from "./shop.module.css";
import { NavLink } from "react-router-dom";
import Product from "../../components/product/product";
import { productListRequest } from "../../reducers/product";
import { useDispatch, useSelector } from "react-redux";

const Shop = ({ match }) => {
    const dispatch = useDispatch();
    const { productList } = useSelector((state) => state.product);

    const category = match.params.category;

    useEffect(() => {
        dispatch(productListRequest(category));
    }, [category]);

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
                    {productList &&
                        productList.map((product) => (
                            <Product key={product.id} product={product} />
                        ))}
                </div>
            </div>
        </>
    );
};

export default Shop;
