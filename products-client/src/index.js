import React from "react";
import ReactDOM from "react-dom";
import { Provider } from "react-redux";
import { createStore, applyMiddleware, compose } from "redux";
import promise from "redux-promise";
import thunk  from "redux-thunk";
import App from "./components/app";
import reducers from "./reducers";

const createStoreWithEnhancers = () => {
    const initialState = {};
    const middleWare = [thunk];
    const composedEnhancers = compose(applyMiddleware(...middleWare));
    const store = createStore(reducers, initialState, composedEnhancers);
    return store;
}


ReactDOM.render(
    <Provider store ={createStoreWithEnhancers()}>
        <App />
    </Provider>,
    document.getElementById('root')
);

