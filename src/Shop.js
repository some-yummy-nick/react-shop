import React from 'react';
import './style.css';
import './Shop.css';
import {Items} from './components/Items';
import {Sidebar} from './components/Sidebar';
import {store} from "./store";

const local = {
    basket: [],
};

class Shop extends React.Component {
    state = {
        basket: JSON.parse(localStorage.getItem("basket")).basket
    };

    addToBasket = (itemId) => {
        const newArr = this.state.mock.slice(0);

        const item = newArr.filter((element) => {
            return element.id === itemId;
        });

        const basketArr = this.state.basket.slice(0);

        const itemBasket = basketArr.filter((element) => {
            return element.id === item[0].id;
        });

        if (item && !itemBasket.length) {
            local.basket.push(item[0]);
            let serialObj = JSON.stringify(local);
            localStorage.setItem("basket", serialObj);
            let returnObj = JSON.parse(localStorage.getItem("basket"));
            this.setState({
                basket: returnObj.basket
            });
        }

    };

    removeToBasket = (itemId) => {
        let returnObj = JSON.parse(localStorage.getItem("basket")).basket;
        const oldArr = returnObj.slice(0);
        const newArr = oldArr.filter((element) => {
            return element.id !== itemId;
        });

        local.basket = newArr;
        let serialObj = JSON.stringify(local);
        localStorage.setItem("basket", serialObj);
        let returnOb = JSON.parse(localStorage.getItem("basket"));

        this.setState({
            basket: returnOb.basket
        });

    };

    render() {
        return (
            <div className="shop">
                <div className="container">
                    <header className="header">
                        <h1 className="shop__title">Магазин</h1>
                    </header>
                    <div className="shop__wrapper">

                        <Sidebar items={this.state.basket} removeToBasket={this.removeToBasket}/>

                        <main className="main">
                            <Items mock={store.getState().items} addToBasket={this.addToBasket}/>
                        </main>
                    </div>
                </div>
            </div>
        )
    }


}

export default Shop;
