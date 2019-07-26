import React, {Fragment} from 'react';
import {Grid} from '../components/Grid';
import {List} from '../components/List';
import {Sidebar} from '../components/Sidebar';
import {store} from "../store";
import {addItem, removeItem} from "../actions"
import grid from "../images/grid.svg";
import list from "../images/list.svg";

class Main extends React.Component {
    state = {
        view: "grid"
    };
    changeView = (e) => {
        let setView = e.currentTarget.dataset.view;
        this.setState({view: setView})
    };
    dispatchToAddToBasket = (itemId) => {
        store.dispatch(addItem(itemId));
    };

    dispatchToRemoveFromBasket = (itemId) => {
        store.dispatch(removeItem(itemId));
    };

    render() {
        return (

            <Fragment>
                <Sidebar items={store.getState().basket} removeToBasket={this.dispatchToRemoveFromBasket}/>
                <div className="shop__view">
                    <button className="btn btn-info" type="button" data-view="grid" onClick={this.changeView}>
                        <img className="shop__img" src={grid} alt=""/></button>
                    <button className="btn btn-info" type="button" data-view="list" onClick={this.changeView}>
                        <img className="shop__img" src={list} alt=""/></button>
                </div>
                <main className="main">
                    {this.state.view === "grid" ?
                        <Grid mock={store.getState().items} addToBasket={this.dispatchToAddToBasket}/> :
                        <List mock={store.getState().items} addToBasket={this.dispatchToAddToBasket}/>
                    }
                </main>
            </Fragment>
        )
    }

}

export default Main;
