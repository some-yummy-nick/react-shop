import React, {Fragment} from 'react';
import {Sidebar} from '../components/Sidebar';
import {store} from "../store";
import {addItem, removeItem} from "../actions";

class Product extends React.Component {
    id = this.props.match.params.id;

    dispatchToRemoveFromBasket = (itemId) => {
        store.dispatch(removeItem(itemId));
    };

    dispatchAddToBasket = (e) => {
        const itemId = e.target.dataset.id;
        store.dispatch(addItem(itemId));
    };

    render() {
        return (

            <Fragment>
                <Sidebar items={store.getState().basket} removeToBasket={this.dispatchToRemoveFromBasket}/>

                <main className="main">

                    {store.getState().items.filter((item) => item.id === this.id).map((item) => {
                        return (
                            <div className="product" key={item.id}>
                                <h2 className="product__name">
                                    {item.name}
                                </h2>
                                <div className="product__image">
                                    <img src={item.src} alt=""/>
                                </div>
                                <div className="product__desc">
                                    {item.desc.map((p, index) => <p key={index}>{p}</p>)}
                                </div>
                                <div className="product__price">Цена: {item.price} р.</div>
                                <button className="btn btn-primary" type="button" data-id={item.id}
                                        onClick={this.dispatchAddToBasket}>Добавить в корзину
                                </button>
                            </div>
                        )
                    })}
                </main>
            </Fragment>
        )
    }

}

export default Product;
