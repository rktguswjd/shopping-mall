import React, { useState } from "react";
import { HashRouter as Router, Route, Link } from "react-router-dom";
import Cart from "../routes/Cart";
import Home from "../routes/Home";
import Search from "../routes/Search";
import styled from "./app.module.css";
import Shop from "../routes/Shop";
import LogIn from "../routes/LogIn";
import Register from "../routes/Register";
import { faBars, faTimes } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import ProductDetail from "../routes/ProductDetail";

const App = () => {
    const [isLoggedIn, setIsLoggedIn] = useState(false);
    const [navToggleOpen, setNavToggleOpen] = useState(false);

    return (
        <div className={styled.wrapper}>
            <Router>
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
                            navToggleOpen
                                ? styled.nav_menu_open
                                : styled.nav_menu
                        }
                    >
                        <li>
                            <Link to="/search"> 검색</Link>
                        </li>
                        <li>
                            <Link to="/shop">SHOP</Link>
                        </li>
                        <li>
                            <Link to="/cart"> 장바구니</Link>
                        </li>
                        <li>
                            {isLoggedIn ? (
                                <Link to="/logout">로그아웃</Link>
                            ) : (
                                <Link to="/login">로그인</Link>
                            )}
                        </li>
                    </ul>
                </header>
                <main className={styled.main}>
                    <Route exact path="/" component={Home} />
                    <Route exact path="/search" component={Search} />
                    <Route exact path="/shop" component={Shop} />
                    <Route exact path="/cart" component={Cart} />
                    <Route
                        exact
                        path="/login"
                        render={() => <LogIn setIsLoggedIn={setIsLoggedIn} />}
                    />
                    <Route exact path="/register" component={Register} />
                    <Route
                        exact
                        path="/shop/product/productId"
                        component={ProductDetail}
                    />
                </main>
                <footer />
            </Router>
        </div>
    );
};

export default App;
