import React, {Fragment} from 'react';
import {Grid} from '../components/Grid';
import {List} from '../components/List';
import {Sidebar} from '../components/Sidebar';
import {store} from "../store";
import {addItem, removeItem} from "../actions";

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
                <main className="main">
                    <div className="shop__view">
                        <button aria-label="grid" className="btn btn-info shop__grid" type="button" data-view="grid" onClick={this.changeView}>
                        </button>
                        <button aria-label="list" className="btn btn-info shop__list" type="button" data-view="list" onClick={this.changeView}>
                        </button>
                    </div>
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
