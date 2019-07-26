import React from "react";
import {Link} from "react-router-dom";

import "./List.css";

export function List(props) {
    let mock = props.mock;

    let handleOnClick = (e) => {
        const itemId = e.target.dataset.id;
        props.addToBasket(itemId);
    };

    let listItems = mock.map((item, index) => {
            return (
                <tr key={index}>
                    <td>
                        <Link to={`/product/${item.id}`}>
                            <div className="list__image">
                                <img src={item.src} alt=""/>
                            </div>

                        </Link>
                    </td>
                    <td>
                        <Link to={`/product/${item.id}`}>
                            <div className="list__name">{item.name}</div>
                        </Link>
                    </td>
                    <td>
                        <Link to={`/product/${item.id}`}>
                            <div className="list__price">{item.price} р.</div>
                        </Link>
                    </td>
                    <td>
                        <button className="btn btn-primary" type="button" data-id={item.id} onClick={handleOnClick}>
                            Добавить в корзину
                        </button>
                    </td>
                </tr>
            )
        }
    );
    return (
        <div className="list">
            <h2 className="list__title">Товары</h2>
            <table className="list__table">
                <thead>
                <tr>
                    <th>Обложка</th>
                    <th>Название</th>
                    <th>Цена</th>
                    <th></th>
                </tr>
                </thead>
                <tbody>
                {listItems}
                </tbody>

            </table>
        </div>
    );
}
