import React, { useCallback, useEffect, useState } from "react";
import styled from "./productDetail.module.css";
import { Link } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { productDetailRequest, addToCartRequest } from "../../reducers/product";

const ProductDetail = ({ match, history }) => {
    const [quantity, setQuantity] = useState(1);
    const dispatch = useDispatch();
    const id = match.params.id;
    const products = useSelector((state) => state.product);
    const { productInfo } = products;
    //id는 잘되는데 밑에 프로덕트 디테일 리케스트 함수로 아이디까진 잘갈꺼야
    useEffect(() => {
        dispatch(productDetailRequest(id));
    }, [id]);

    const onClickAddToCart = useCallback(() => {
        dispatch(addToCartRequest(id, quantity));
        history.push("/cart");
    }, []);

    return (
        <>
            {productInfo && (
                <div className={styled.productDetail}>
                    <div className={styled.productDetailHeader}>
                        <div className={styled.productDetailImg}>
                            <img src={productInfo.src} alt="name" />
                        </div>

                        <div className={styled.productSummary}>
                            <div className={styled.productName}>
                                {productInfo.name}
                            </div>
                            <div className={styled.productPrice}>
                                {productInfo.price}
                            </div>
                            <div className={styled.productQuantity}>
                                <div>수량</div>
                                <select
                                    className={styled.productSelect}
                                    value={quantity}
                                    onChange={(e) =>
                                        setQuantity(e.target.value)
                                    }
                                >
                                    <option value="1">1</option>
                                    <option value="2">2</option>
                                    <option value="3">3</option>
                                    <option value="4">4</option>
                                    <option value="5">5</option>
                                </select>
                            </div>

                            <button
                                className={styled.btn}
                                onClick={onClickAddToCart}
                            >
                                ADD TO CART
                            </button>
                            <Link to="/payment">
                                <button className={styled.btn}>BUY NOW</button>
                            </Link>
                        </div>
                    </div>
                    <div className={styled.productDescription}>
                        <p>{productInfo.description}</p>
                    </div>
                </div>
            )}
        </>
    );
};

export default ProductDetail;
