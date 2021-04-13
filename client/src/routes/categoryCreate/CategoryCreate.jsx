import React, { useCallback, useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import styled from "./categoryCreate.module.css";
import { categoryCreateRequest } from "../../reducers/product";

const CategoryCreate = ({ history }) => {
    const [category, setCategory] = useState("");
    const dispatch = useDispatch();
    const { userInfo } = useSelector((state) => state.user);

    const onSubmit = useCallback((e) => {
        e.preventDefault();
        dispatch(categoryCreateRequest(category));
        e.target.reset();
    });

    const onChangeCategory = useCallback((e) => {
        setCategory(e.target.value);
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
    }, [userInfo]);

    return (
        <>
            <div className={styled.page_box}>
                <div className={styled.page_name}>CATEGORY REGISTER</div>
                <form className={styled.form} onSubmit={onSubmit}>
                    <table className={styled.table}>
                        <tr>
                            <th>카테고리명</th>
                            <td>
                                <input
                                    type="text"
                                    className={styled.input_text}
                                    onChange={onChangeCategory}
                                    required
                                />
                            </td>
                        </tr>
                    </table>
                    <button className={styled.btn}>CREATE</button>
                </form>
            </div>
            <div className={styled.page_box}>
                <div className={styled.page_name}>CATEGORY LIST</div>
            </div>
        </>
    );
};

export default CategoryCreate;
