import React from "react";
import { HashRouter as Router, Route, Link } from "react-router-dom";
import Cart from "./routes/Cart";
import Home from "./routes/Home";
import Login from "./routes/Login";
import Register from "./routes/Register";
import Search from "./routes/Search";
import styled from "./app.module.css";
import Shop from "./routes/Shop";

const App = () => {
    return (
        <Router>
            <header className={styled.header}>
                <Link to="/">
                    {" "}
                    <h1>TITLE</h1>{" "}
                </Link>

                <ul className={styled.menu}>
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
                        <Link to="/login">로그인</Link>
                    </li>
                </ul>
            </header>
            <main>
                <Route path="/" exact component={Home} />
                <Route path="/search" component={Search} />
                <Route path="/shop" component={Shop} />
                <Route path="/cart" component={Cart} />
                <Route path="/login" component={Login} />
                <Route path="/register" component={Register} />
            </main>
            <footer />
        </Router>
    );
};

export default App;
