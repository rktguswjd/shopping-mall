import React from "react";
import { Link } from "react-router-dom";
import styled from "./product.module.css";
const Product = ({ product }) => {
    return (
        <>
            <Link className={styled.product} to={`/shop/product/${product.id}`}>
                <img src={product.src} alt="productImage" />
                <div>{product.name}</div>
                <div>{product.price}</div>
            </Link>
        </>
    );
};

export default Product;
