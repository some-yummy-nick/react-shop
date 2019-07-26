import React from "react";
import {Link} from "react-router-dom";

import "./Grid.css";

export function Grid(props) {
    let mock = props.mock;

    let handleOnClick = (e) => {
        const itemId = e.target.dataset.id;
        props.addToBasket(itemId);
    };

    let gridItems = mock.map((item, index) => {

            return (
                <li className="grid__item" key={index}>
                    <div className="grid__name">{item.name}</div>
                    <div className="grid__image">
                        <Link to={`/product/${item.id}`}>
                            <img src={item.src} alt=""/>
                        </Link>
                    </div>
                    <div className="grid__price">{item.price} р.</div>
                    <button className="btn btn-primary" type="button" data-id={item.id} onClick={handleOnClick}>
                        Добавить в корзину
                    </button>
                </li>
            )
        }
    );
    return (
        <div className="grid">
            <h2 className="grid__title">Товары</h2>
            <ul className="grid__list">{gridItems}</ul>
        </div>
    );
}
