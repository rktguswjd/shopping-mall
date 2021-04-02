import React, { useEffect } from "react";
import { useSelector } from "react-redux";
import styled from "./productList.module.css";
import { Link } from "react-router-dom";

const ProductList = ({ history }) => {
    const { userInfo } = useSelector((state) => state.user);
    useEffect(() => {
        if (!userInfo) {
            history.push("/login");
            return;
        }
        if (!userInfo.isAdmin) {
            history.push("/");
        }
    }, [userInfo]);

    return (
        <>
            <div className={styled.page_name}>PRODUCT MANAGEMENT</div>
            <Link to="/admin/product/create">
                <button className={styled.btn}>PRODUCT CREATE</button>
            </Link>
        </>
    );
};

export default ProductList;
