import React, { useEffect } from "react";
import styled from "./productDetail.module.css";
import { Link } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { productDetailRequest } from "../../reducers/product";

const ProductDetail = ({ match }) => {
    const dispatch = useDispatch();
    const { productInfo } = useSelector((state) => state.product);
    const id = match.params.id;

    useEffect(() => {
        dispatch(productDetailRequest(id));
    }, [id]);

    return (
        <div className={styled.productDetail}>
            <div className={styled.productDetailHeader}>
                <div className={styled.productDetailImg}>
                    <img src={productInfo.src} alt="productName" />
                </div>

                <div className={styled.productSummary}>
                    <div className={styled.productName}>{productInfo.name}</div>
                    <div className={styled.productPrice}>
                        {productInfo.price}
                    </div>
                    <div className={styled.productQuantity}>
                        <div>수량</div>
                        <select>
                            <option value="1">1</option>
                            <option value="2">2</option>
                            <option value="3">3</option>
                            <option value="4">4</option>
                        </select>
                    </div>

                    <button className={styled.btn}>ADD TO CART</button>
                    <Link to="/payment">
                        <button className={styled.btn}>BUY NOW</button>
                    </Link>
                </div>
            </div>
            <div className={styled.productDescription}>
                <p>
                    모던함이 더해진 기본 니트 아이템. 평일에도 미니멀한 스타일을
                    연출할 수 있는 순수 면 소재의 가디건입니다. - 레귤러 핏 -
                    V넥 - 앞면 버튼업 디자인 - 반소매 - 골지 형태의 밑단 100% 면
                    / 기계 세탁 가능 S 사이즈 뒷면의 길이는 52cm 입니다 / 모델
                    키는 178cm이며, S 사이즈를 착용 중입니다
                </p>
            </div>
        </div>
    );
};

export default ProductDetail;
