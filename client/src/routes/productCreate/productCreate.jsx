import React, { useCallback, useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import styled from "./productCreate.module.css";
import { productCreateRequest } from "../../reducers/product";

const ProductCreate = ({ history }) => {
    const dispatch = useDispatch();
    const { userInfo } = useSelector((state) => state.user);
    const [name, setName] = useState("");
    const [category, setCategory] = useState("outer");
    const [stock, setStock] = useState("");
    const [price, setPrice] = useState("");
    const [photo, setPhoto] = useState("");
    const [preview, setPreview] = useState("");
    const [discription, setDiscription] = useState("");
    let previewPhoto = null;

    const onChangeName = useCallback((e) => {
        setName(e.target.value);
    }, []);

    const onChangeCategory = useCallback((e) => {
        setCategory(e.target.value);
    });

    const onChangeStock = useCallback((e) => {
        setStock(e.target.value);
    });

    const onChangePrice = useCallback((e) => {
        setPrice(e.target.value);
    });

    const onChangePhoto = useCallback((e) => {
        e.preventDefault();
        let reader = new FileReader();
        let file = e.target.files[0];
        reader.onloadend = () => {
            setPhoto(file);
            setPreview(reader.result);
        };
        reader.readAsDataURL(file);
    });

    const onChagneDiscription = useCallback((e) => {
        setDiscription(e.target.value);
    });

    const onSubmit = useCallback((e) => {
        e.preventDefault();
        dispatch(
            productCreateRequest({
                name,
                category,
                stock,
                price,
                photo,
                discription,
            })
        );
        history.replace("/admin/productlist");
    });

    useEffect(() => {
        if (!userInfo) {
            history.push("/login");
            return;
        }
        if (!userInfo.isAdmin) {
            history.push("/");
            return;
        }
    }, [userInfo, photo, preview, previewPhoto]);

    return (
        <>
            <div className={styled.page_name}>PRODUCT REGISTER</div>
            <form className={styled.form} onSubmit={onSubmit}>
                <table className={styled.table}>
                    <tr className={styled.tr}>
                        <th>상품명</th>
                        <td>
                            <input
                                type="text"
                                className={styled.input_text}
                                onChange={onChangeName}
                                required
                            />
                        </td>
                    </tr>
                    <tr className={styled.tr}>
                        <th>카테고리</th>
                        <td>
                            <select
                                value={category}
                                onChange={onChangeCategory}
                                required
                            >
                                <option value="outer">OUTER</option>
                                <option value="top">TOP</option>
                                <option value="pants">PANTS</option>
                                <option value="skirt">SKIRT</option>
                            </select>
                        </td>
                    </tr>

                    <tr className={styled.tr}>
                        <th>재고수량</th>
                        <td>
                            <input
                                type="number"
                                className={styled.input_number}
                                onChange={onChangeStock}
                                required
                            />
                        </td>
                    </tr>

                    <tr className={styled.tr}>
                        <th>가격</th>
                        <td>
                            <input
                                type="number"
                                className={styled.input_number}
                                onChange={onChangePrice}
                                required
                            />
                        </td>
                    </tr>

                    <tr className={styled.tr}>
                        <th>상품사진</th>
                        <td>
                            <input
                                type="file"
                                accept="image/jpg,impge/png,image/jpeg,image/gif"
                                onChange={onChangePhoto}
                                required
                            />
                            {photo && (
                                <div>
                                    <img
                                        className={styled.preview}
                                        src={preview}
                                    />
                                </div>
                            )}
                        </td>
                    </tr>

                    <tr className={styled.tr}>
                        <th>제품설명</th>
                        <td>
                            <textarea
                                className={styled.textarea_description}
                                onChange={onChagneDiscription}
                                required
                            />
                        </td>
                    </tr>
                </table>
                <button className={styled.btn}>CREATE</button>
            </form>
        </>
    );
};

export default ProductCreate;
