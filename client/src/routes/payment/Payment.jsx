import React, { useEffect } from "react";
import styled from "./payment.module.css";
import { useDispatch, useSelector } from "react-redux";
import { faAsterisk } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const Payment = ({ history }) => {
    const { paymentProducts } = useSelector((state) => state.product);
    const { userInfo, userToken } = useSelector((state) => state.user);
    useEffect(() => {
        if (!userInfo || !userToken) {
            history.push("/login");
            return;
        }

        if (!paymentProducts) {
            history.push("/");
            return;
        }
    }, [userInfo, paymentProducts]);
    console.log(paymentProducts);
    return (
        <>
            <div className={styled.page_name}>Payment</div>
            <div>
                <div className={styled.payment_container}>
                    <div className={styled.payment_container_name}>
                        Order Items
                    </div>
                    <div className={styled.payment_container_content}>
                        {paymentProducts &&
                            paymentProducts.map((item) => (
                                <div
                                    className={styled.payment_products}
                                    key={item.id}
                                >
                                    <img
                                        src={item.src}
                                        alt="productName"
                                        className={styled.payment_product_img}
                                    />
                                    <div
                                        className={styled.payment_product_name}
                                    >
                                        {item.name}{" "}
                                    </div>
                                    <div>
                                        {item.quantity} x {item.price} =
                                        {item.quantity * item.price}???
                                    </div>
                                </div>
                            ))}
                    </div>
                </div>

                <div className={styled.payment_container}>
                    <div className={styled.payment_container_name}>
                        Amount of Payment
                    </div>
                    <div className={styled.payment_container_content}>
                        <div>
                            ?????? ?????? ?????? :{" "}
                            {paymentProducts &&
                                paymentProducts.reduce(
                                    (sum, item) =>
                                        sum + item.price * item.quantity,
                                    0
                                )}
                            ???
                        </div>
                        <div>????????? : FREE</div>
                        <div>
                            ?????? ?????? ?????? :{" "}
                            {paymentProducts &&
                                paymentProducts.reduce(
                                    (sum, item) =>
                                        sum + item.price * item.quantity,
                                    0
                                )}
                            ???
                        </div>
                    </div>
                </div>

                <div className={styled.payment_container}>
                    <div className={styled.payment_container_name}>Address</div>
                    <div className={styled.payment_container_content}>
                        {userInfo && (
                            <table className={styled.payment_adress_table}>
                                <tbody>
                                    <tr>
                                        <th>
                                            ?????????{" "}
                                            <FontAwesomeIcon
                                                icon={faAsterisk}
                                                className={styled.star}
                                            />
                                        </th>
                                        <td>
                                            <input value={userInfo.name} />
                                        </td>
                                    </tr>

                                    <tr>
                                        <th>
                                            ?????????{" "}
                                            <FontAwesomeIcon
                                                icon={faAsterisk}
                                                className={styled.star}
                                            />
                                        </th>
                                        <td>
                                            <input value={userInfo.phone} />
                                        </td>
                                    </tr>

                                    <tr>
                                        <th>
                                            ????????????{" "}
                                            <FontAwesomeIcon
                                                icon={faAsterisk}
                                                className={styled.star}
                                            />
                                        </th>
                                        <td>
                                            <input value={userInfo.zipCode} />
                                        </td>
                                    </tr>

                                    <tr>
                                        <th>
                                            ?????????{" "}
                                            <FontAwesomeIcon
                                                icon={faAsterisk}
                                                className={styled.star}
                                            />
                                        </th>
                                        <td>
                                            <input value={userInfo.address} />
                                        </td>
                                    </tr>

                                    <tr>
                                        <th>
                                            ????????????{" "}
                                            <FontAwesomeIcon
                                                icon={faAsterisk}
                                                className={styled.star}
                                            />
                                        </th>
                                        <td>
                                            <input
                                                value={userInfo.detailAddress}
                                            />
                                        </td>
                                    </tr>
                                </tbody>
                            </table>
                        )}
                    </div>
                </div>

                <div className={styled.payment_container}>
                    <div className={styled.payment_container_name}>
                        Payment Method
                    </div>
                    <div className={styled.payment_container_content}>
                        <input
                            type="radio"
                            name="payment_method"
                            value="payment_method"
                            checked="checked"
                        />{" "}
                        PayPal or kakao Pay
                    </div>
                </div>
            </div>
            <button className={styled.payment_btn}>PAY FOR</button>
        </>
    );
};

export default Payment;
