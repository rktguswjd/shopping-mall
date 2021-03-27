import React, { useState } from "react";
import { HashRouter as Router, Route } from "react-router-dom";
import Cart from "../routes/Cart";
import Home from "../routes/Home";
import Search from "../routes/Search";
import styled from "./app.module.css";
import Shop from "../routes/Shop";
import Login from "../routes/Login";
import Register from "../routes/Register";
import ProductDetail from "../routes/ProductDetail";
import Profile from "../routes/Profile";
import Header from "./header";
import Payment from "../routes/Payment";

const App = () => {
    const [isLoggedIn, setIsLoggedIn] = useState(false);
    return (
        <div className={styled.wrapper}>
            <Router>
                <Header isLoggedIn={isLoggedIn} />
                <main className={styled.main}>
                    <Route exact path="/" component={Home} />
                    <Route exact path="/search" component={Search} />
                    <Route exact path="/shop" component={Shop} />
                    <Route exact path="/cart" component={Cart} />
                    <Route
                        exact
                        path="/login"
                        render={() => <Login setIsLoggedIn={setIsLoggedIn} />}
                    />
                    <Route exact path="/register" component={Register} />
                    <Route
                        exact
                        path="/shop/product/productId"
                        component={ProductDetail}
                    />
                    <Route exact path="/profile" component={Profile} />
                    <Route exact path="/shop/category/top" component={Shop} />
                    <Route exact path="/payment" component={Payment} />
                </main>
                <footer />
            </Router>
        </div>
    );
};

export default App;
