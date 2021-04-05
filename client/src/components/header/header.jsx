import React, { useCallback, useState } from "react";
import styled from "./header.module.css";
import { Link } from "react-router-dom";
import { faBars, faTimes } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useDispatch, useSelector } from "react-redux";
import { logoutRequestAction } from "../../reducers/user";

const Header = () => {
    const dispatch = useDispatch();
    const [navToggleOpen, setNavToggleOpen] = useState(false);
    const { userInfo } = useSelector((state) => state.user);
    const onLogOut = useCallback(() => {
        dispatch(logoutRequestAction());
    }, []);

    return (
        <header className={styled.nav}>
            <Link className={styled.title} to="/">
                TITLE
            </Link>

            <button
                className={styled.nav_toggle_btn}
                onClick={() => setNavToggleOpen(!navToggleOpen)}
            >
                {navToggleOpen ? (
                    <FontAwesomeIcon icon={faTimes} />
                ) : (
                    <FontAwesomeIcon icon={faBars} />
                )}
            </button>
            <ul
                className={
                    navToggleOpen ? styled.nav_menu_open : styled.nav_menu
                }
            >
                <li className={styled.nav_menu_item}>
                    <Link to="/shop/search"> 검색</Link>
                </li>
                <li className={styled.nav_menu_item}>
                    <Link to="/shop">SHOP</Link>
                </li>
                <li className={styled.nav_menu_item}>
                    <Link to="/cart"> 장바구니</Link>
                </li>

                {userInfo ? (
                    <li className={styled.dropdown}>
                        {userInfo.name} ▼
                        <div className={styled.dropdown_content}>
                            <div className={styled.dropdown_content_item}>
                                <Link to="/profile">프로필</Link>
                            </div>
                            <div className={styled.dropdown_content_item}>
                                <Link to="/orderlist">주문내역</Link>
                            </div>
                            <div className={styled.dropdown_content_item}></div>
                            <div
                                className={styled.dropdown_content_item}
                                onClick={onLogOut}
                            >
                                로그아웃
                            </div>
                        </div>
                    </li>
                ) : (
                    <li>
                        <Link to="/login">로그인</Link>
                    </li>
                )}

                {userInfo && userInfo.isAdmin && (
                    <li className={styled.dropdown}>
                        관리자 ▼
                        <div className={styled.dropdown_content}>
                            <div className={styled.dropdown_content_item}>
                                <Link to="/admin/productlist">상품관리</Link>
                            </div>
                            <div className={styled.dropdown_content_item}>
                                <Link to="/admin/userlist">회원관리</Link>
                            </div>
                            <div className={styled.dropdown_content_item}></div>
                            <div className={styled.dropdown_content_item}>
                                <Link to="/admin/orderlist">주문관리</Link>
                            </div>
                        </div>
                    </li>
                )}
            </ul>
        </header>
    );
};

export default Header;
