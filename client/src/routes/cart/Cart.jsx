import React, { useCallback, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import styled from "./cart.module.css";
import { cartListRequest, removeFromCartRequest } from "../../reducers/product";

const Cart = () => {
    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(cartListRequest());
    }, []);

    const { cartList } = useSelector((state) => state.product);

    const onClickRemoveFromCart = useCallback((id) => {
        dispatch(removeFromCartRequest(id));
    }, []);

    return (
        <>
            <div className={styled.page_name}>CART</div>
            {cartList && (
                <div className={styled.productList}>
                    <div className={styled.products}>
                        {cartList.map((item) => (
                            <div
                                key={item.id}
                                className={styled.cart_container}
                            >
                                <img
                                    src={item.src}
                                    className={styled.cart_src}
                                />
                                <div className={styled.cart_name}>
                                    {item.name}
                                </div>
                                <div className={styled.cart_price}>
                                    {item.price * item.quantity} 원
                                </div>

                                <div>
                                    <select
                                        className={styled.cart_quantity}
                                        value={item.quantity}
                                    >
                                        <option value="1">1</option>
                                        <option value="2">2</option>
                                        <option value="3">3</option>
                                        <option value="4">4</option>
                                        <option value="5">5</option>
                                    </select>
                                </div>
                                <div>
                                    <button
                                        className={styled.cart_btn}
                                        onClick={() =>
                                            onClickRemoveFromCart(item.id)
                                        }
                                    >
                                        REMOVE
                                    </button>
                                </div>
                            </div>
                        ))}
                    </div>

                    <div className={styled.cart_total}>
                        <div>
                            총 수량:{" "}
                            {cartList.reduce(
                                (sum, item) => sum + item.quantity,
                                0
                            )}
                            개
                        </div>
                        <div>배송비: 무료</div>
                        <div className={styled.cart_total_price}>
                            총 금액:{" "}
                            {cartList.reduce(
                                (sum, item) => sum + item.price * item.quantity,
                                0
                            )}
                            원
                        </div>
                        <div>
                            <button className={styled.payment_btn}>
                                PAYMENT
                            </button>
                        </div>
                    </div>
                </div>
            )}
        </>
    );
};

export default Cart;
