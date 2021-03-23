import React, { useState } from "react";
import { HashRouter as Router, Route, Link } from "react-router-dom";
import Cart from "./routes/Cart";
import Home from "./routes/Home";
import Search from "./routes/Search";
import styled from "./app.module.css";
import Shop from "./routes/Shop";
import LogIn from "./routes/LogIn";
import Register from "./routes/Register";

const App = () => {
    const [isLoggedIn, setIsLoggedIn] = useState(false);
    console.log(isLoggedIn);
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
                        {isLoggedIn ? (
                            <Link to="/logout">로그아웃</Link>
                        ) : (
                            <Link to="/login">로그인</Link>
                        )}
                    </li>
                </ul>
            </header>
            <main>
                <Route path="/" exact component={Home} />
                <Route path="/search" component={Search} />
                <Route path="/shop" component={Shop} />
                <Route path="/cart" component={Cart} />
                <Route
                    path="/login"
                    render={() => <LogIn setIsLoggedIn={setIsLoggedIn} />}
                />
                <Route path="/register" component={Register} />
            </main>
            <footer />
        </Router>
    );
};

export default App;
