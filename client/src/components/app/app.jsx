import React, { useState } from "react";
import { HashRouter as Router, Route } from "react-router-dom";
import Cart from "../../routes/cart/Cart";
import Home from "../../routes/home/Home";
import Search from "../../routes/search/Search";
import styled from "./app.module.css";
import Shop from "../../routes/shop/Shop";
import Register from "../../routes/register/Register";
import ProductDetail from "../../routes/productDetail/ProductDetail";
import Profile from "../../routes/profile/Profile";
import Payment from "../../routes/payment/Payment";
import Header from "../header/header";
import LogIn from "../../routes/login/Login";
import ProductList from "../../routes/productList/productList";
import ProductCreate from "../../routes/productCreate/productCreate";

const App = () => {
    return (
        <div className={styled.wrapper}>
            <Router>
                <Header />
                <main className={styled.main}>
                    <Route exact path="/" component={Home} />
                    <Route exact path="/shop" component={Shop} />
                    <Route exact path="/shop/search" component={Search} />
                    <Route exact path="/cart" component={Cart} />
                    <Route exact path="/login" component={LogIn} />

                    <Route exact path="/register" component={Register} />
                    <Route
                        exact
                        path="/shop/product/:id"
                        component={ProductDetail}
                    />
                    <Route exact path="/profile" component={Profile} />
                    <Route exact path="/payment" component={Payment} />

                    <Route
                        exact
                        path="/shop/category/:category"
                        component={Shop}
                    />
                    <Route
                        exact
                        path="/shop/search/:keyword"
                        component={Shop}
                    />
                    <Route exact path="/admin/userlist" />
                    <Route
                        exact
                        path="/admin/productlist"
                        component={ProductList}
                    />
                    <Route exact path="/admin/orderlist" />
                    <Route
                        exact
                        path="/admin/product/create"
                        component={ProductCreate}
                    />
                </main>
                <footer />
            </Router>
        </div>
    );
};

export default App;
