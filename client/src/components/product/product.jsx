import React from "react";
import { Link } from "react-router-dom";
import styled from "./product.module.css";
const Product = (props) => {
    return (
        <>
            <Link className={styled.product} to="/shop/product/productId">
                <img
                    src="https://image.cosstores.com/static/7/5/3/28/A1/hnm40A1283576_02_0974242_001_001_720.jpg"
                    alt="productImage"
                />
                <div>박시 스웻셔츠</div>
                <div>105,000원</div>
            </Link>
            <Link className={styled.product} to="/shop/product/productId">
                <img
                    src="https://image.cosstores.com/static/0/6/5/03/A1/hnm40A1035607_02_0877085_001_001_720.jpg"
                    alt="productImage"
                />
                <div>쇼트 슬리브 가디건</div>
                <div>103,000원</div>
            </Link>
            <Link className={styled.product} to="/shop/product/productId">
                <img
                    src="https://image.cosstores.com/static/3/6/1/30/A1/hnm40A1301632_02_0975569_001_001_720.jpg"
                    alt="productImage"
                />
                <div>박시 스웻셔츠</div>
                <div>89,000원</div>
            </Link>
        </>
    );
};

export default Product;
