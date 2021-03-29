import React from "react";
import styled from "./payment.module.css";

const Payment = (props) => {
    return (
        <>
            <div className={styled.page_name}>PAYMNET</div>
            <div>
                <div className={styled.payment_container}>
                    <div className={styled.payment_container_name}>
                        Order Items
                    </div>
                    <div className={styled.payment_container_content}>
                        <div className={styled.payment_products}>
                            <img
                                src="https://image.cosstores.com/static/7/5/3/28/A1/hnm40A1283576_02_0974242_001_001_720.jpg"
                                alt="productName"
                                className={styled.payment_product_img}
                            />
                            <div className={styled.payment_product_name}>
                                상품 이름
                            </div>
                            <div>1 x 69,000 = 69,000</div>
                        </div>
                        <div className={styled.payment_products}>
                            <img
                                src="https://image.cosstores.com/static/7/5/3/28/A1/hnm40A1283576_02_0974242_001_001_720.jpg"
                                alt="productName"
                                className={styled.payment_product_img}
                            />
                            <div className={styled.payment_product_name}>
                                상품 이름
                            </div>
                            <div>1 x 69,000 = 69,000</div>
                        </div>
                    </div>
                </div>

                <div className={styled.payment_container}>
                    <div className={styled.payment_container_name}>
                        Amount of Payment
                    </div>
                    <div className={styled.payment_container_content}>
                        <div>전체 상품 금액 : 69,000</div>
                        <div>배송비 : FREE</div>
                        <div>전체 결제 금액 : 69,000</div>
                    </div>
                </div>

                <div className={styled.payment_container}>
                    <div className={styled.payment_container_name}>Address</div>
                    <div className={styled.payment_container_content}>
                        <div className={styled.payment_adress}>
                            <div className={styled.payment_adress_input}>
                                <div>수령인</div>
                                <input value="정현정"></input>
                            </div>
                            <div className={styled.payment_adress_input}>
                                <div>휴대폰</div>
                                <input value="010-0000-0000"></input>
                            </div>
                            <div className={styled.payment_adress_input}>
                                <div>우편번호</div>
                                <input value="16213"></input>
                            </div>
                            <div className={styled.payment_adress_input}>
                                <div>주소지</div>
                                <input value="경기 수원시 장안구"></input>
                            </div>
                            <div className={styled.payment_adress_input}>
                                <div>상세주소</div>
                                <input value="201호"></input>
                            </div>
                        </div>
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
