import React from "react";
import { HashRouter as Router, Route, Link } from "react-router-dom";
import Cart from "./routes/Cart";
import Home from "./routes/Home";
import Login from "./routes/Login";
import Register from "./routes/Register";
import Search from "./routes/Search";

const App = () => {
    return (
        <Router>
            <header>
                <Link to="/">
                    {" "}
                    <h1>TITLE</h1>{" "}
                </Link>
                <Link to="/search">
                    {" "}
                    <h3>검색</h3>
                </Link>
                <Link to="/cart">
                    {" "}
                    <h3>장바구니</h3>
                </Link>
                <Link to="/login">
                    {" "}
                    <h3>로그인</h3>
                </Link>
            </header>
            <main>
                <Route path="/" exact component={Home} />
                <Route path="/search" component={Search} />
                <Route path="/cart" component={Cart} />
                <Route path="/login" component={Login} />
                <Route path="/register" component={Register} />
            </main>
            <footer />
        </Router>
    );
};

export default App;
