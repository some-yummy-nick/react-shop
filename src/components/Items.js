import React from "react";
import "./Items.css";

export function Items(props) {
    let mock = props.mock;

    let handleOnClick = (e) => {
        const itemId = e.target.dataset.id;
        props.addToBasket(itemId);
    };

    let listItems = mock.map((item, index) =>
        <li className="items__item" key={index}>
            <div className="items__name">{item.name}</div>
            <div className="items__image">
                <img src={item.src} alt=""/>
            </div>
            <div className="items__price">{item.price} р.</div>
            <button className="btn btn-primary" type="button" data-id={item.id} onClick={handleOnClick}>Добавить в корзину</button>
        </li>
    );
    return (
        <div className="items">
            <h2 className="items__title">Товары</h2>
            <ul className="items__list">{listItems}</ul>
        </div>
    );
}
