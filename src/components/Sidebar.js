import React from "react";
import "./Sidebar.css";

export function Sidebar(props) {
    let items = props.items;

    let handleOnClick = (e) => {
        const itemId = e.target.dataset.id;
        props.removeToBasket(itemId);
    };

    let score = 0;

    let listItems;
    if (items) {
        listItems = items.map((item, index) => {
                score += item.price;
                return (
                    <li className="sidebar__item" key={index}>
                        <div className="sidebar__wrap">
                            <div className="sidebar__name">{item.name}</div>
                            <div className="sidebar__price">{item.price} р.</div>
                        </div>

                        <button className="btn btn-danger" type="button" data-id={item.id} onClick={handleOnClick}>Удалить
                            товар
                        </button>
                    </li>
                )
            }
        );
    }

    let scoreView;

    if (score) {
        scoreView = <div className="sidebar__score">Итого: {score}</div>
    }

    return (
        <aside className="sidebar">
            <h2 className="sidebar__title">Корзина</h2>
            <ul className="sidebar__list">{listItems}</ul>
            {scoreView}
        </aside>
    )
}
