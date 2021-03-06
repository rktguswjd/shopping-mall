import styled from "styled-components";
import React, { useCallback, useState } from "react";
import { Link } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { logoutRequestAction } from "../../reducers/user";
import { faAngleDown } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const Ul = styled.ul`
    list-style: none;
    margin-bottom: 0;
    z-index: 2;
    display: flex;
    flex-flow: row nowrap;
    .nav_menu_item {
        padding: 18px 10px;
    }

    .dropdown {
        padding: 18px 10px;
        position: relative;
    }

    .dropdown:hover {
        cursor: pointer;
    }

    .dropdown_content {
        display: none;
        position: absolute;
        padding: 5px;
        min-width: 80px;
        box-shadow: 0px 8px 16px 0px rgba(0, 0, 0, 0.2);
        z-index: 1;
        text-align: center;
    }

    .dropdown_content_item {
        margin-bottom: 4px;
        cursor: pointer;
    }

    .dropdown:hover .dropdown_content {
        display: flex;
        flex-direction: column;
    }

    .dropdown_content_item:hover {
        cursor: pointer;
    }

    .dropdown_content_item_open {
        display: flex;
        align-items: center;
        padding: 0;
    }

    .dropdown_content_item_open ul {
        position: relative;
        list-style: none;
    }

    .dropdown_content_item_close {
        display: none;
        list-style: none;
    }

    @media (max-width: 768px) {
        flex-flow: column nowrap;
        background-color: white;
        position: fixed;
        transform: ${({ open }) =>
            open ? "translateX(0)" : "translateX(100%)"};
        top: 0;
        right: 0;
        height: 100vh;
        width: 300px;
        margin: 0;
        transition: transform 0.3s ease-in-out;

        .dropdown {
            position: relative;
        }

        .dropdown_content {
            display: none;
            position: relative;
            padding: 5px;
            min-width: 80px;
            box-shadow: none;
            text-align: left;
        }
    }
`;

const RightNav = ({ open }) => {
    const dispatch = useDispatch();
    const [adminProductOpen, setAdminProductOpen] = useState(false);
    const [adminMemberOpen, setAdminMemberOpen] = useState(false);
    const [adminOderOpen, setAdminOderOpen] = useState(false);
    const { userInfo } = useSelector((state) => state.user);
    const onLogOut = useCallback(() => {
        dispatch(logoutRequestAction());
    }, []);

    return (
        <Ul open={open}>
            <li className="nav_menu_item">
                <Link to="/shop/search">SEARCH</Link>
            </li>
            <li className="nav_menu_item">
                <Link to="/shop">SHOP</Link>
            </li>
            <li className="nav_menu_item">
                <Link to="/cart">CART</Link>
            </li>

            {userInfo ? (
                <li className="dropdown">
                    MYPAGE
                    <div className="dropdown_content">
                        <div className="dropdown_content_item">
                            <Link to="/profile">?????????</Link>
                        </div>
                        <div className="dropdown_content_item">
                            <Link to="/orderlist">????????????</Link>
                        </div>
                        <div
                            className="dropdown_content_item"
                            onClick={onLogOut}
                        >
                            ????????????
                        </div>
                    </div>
                </li>
            ) : (
                <li className="nav_menu_item">
                    <Link to="/login">LOGIN</Link>
                </li>
            )}

            {userInfo && userInfo.isAdmin && (
                <li className="dropdown">
                    ADMIN
                    <div className="dropdown_content">
                        <div
                            className="dropdown_content_item"
                            onClick={() =>
                                setAdminProductOpen(!adminProductOpen)
                            }
                        >
                            ????????????
                            <ul
                                className={
                                    adminProductOpen
                                        ? "dropdown_content_item_open"
                                        : "dropdown_content_item_close"
                                }
                            >
                                <li className="sub_li">
                                    <Link to="/admin/productlist">
                                        ????????????
                                    </Link>
                                </li>
                                <li className="sub_li">
                                    <Link to="/admin/product/create">
                                        ????????????
                                    </Link>
                                </li>
                                <li className="sub_li">
                                    <Link to="/admin/category/create">
                                        ??????????????????
                                    </Link>
                                </li>
                            </ul>
                        </div>
                        <div
                            className="dropdown_content_item"
                            onClick={() => setAdminMemberOpen(!adminMemberOpen)}
                        >
                            ????????????
                            <ul
                                className={
                                    adminMemberOpen
                                        ? "dropdown_content_item_open"
                                        : "dropdown_content_item_close"
                                }
                            >
                                <li>????????????</li>
                            </ul>
                        </div>
                        <div
                            className="dropdown_content_item"
                            onClick={() => setAdminOderOpen(!adminOderOpen)}
                        >
                            ????????????
                            <ul
                                className={
                                    adminOderOpen
                                        ? "dropdown_content_item_open"
                                        : "dropdown_content_item_close"
                                }
                            >
                                <li>????????????</li>
                            </ul>
                        </div>
                    </div>
                </li>
            )}
        </Ul>
    );
};

export default RightNav;
