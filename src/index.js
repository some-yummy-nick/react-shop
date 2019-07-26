import React from 'react';
import ReactDOM from 'react-dom';
import {BrowserRouter as Router, Route } from "react-router-dom";
import 'bootstrap/dist/css/bootstrap.css';
import './style.css';
import Main from './containers/Main';
import Product from './containers/Product';
import {store} from "./store";

const render = () => ReactDOM.render(
    <Router>
        <div className="shop">
            <div className="container">
                <header className="header">
                    <a href="/">
                        <div className="shop__main">Главная</div>
                    </a>
                    <h1 className="shop__title">Магазин</h1>
                </header>
                <div className="shop__wrapper">
                    <Route exact path="/" component={Main}/>
                    <Route path="/product/:id" component={Product}/>
                </div>
            </div>
        </div>

    </Router>,
    document.getElementById("root"));
render();
store.subscribe(render);
