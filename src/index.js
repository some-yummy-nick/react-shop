import React from 'react';
import ReactDOM from 'react-dom';
import 'bootstrap/dist/css/bootstrap.css';
import Shop from './Shop';
import {store} from "./store";

const render = () => ReactDOM.render(<Shop />, document.getElementById("root"));
render();
store.subscribe(render);
