import React, { Fragment } from "react";
import { render }from "react-dom";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import { Provider } from "react-redux";
import { createStore, applyMiddleware, compose } from "redux";
import thunk  from "redux-thunk";
import App from "./components/App";
import rootReducer from "./reducers/index";
import ProductList from "./components/ProductList";

const store = createStore(rootReducer, {}, applyMiddleware(thunk));

render(
  <Provider store={store}>
    <Router>
      <Fragment>
        <App>
          <Switch>
            <Route exact path="/" component={ProductList} />
            {/*<Route exact path="/:id" component={ProductDetail} />*/}
          </Switch>
        </App>
      </Fragment>
    </Router>
  </Provider>,
  document.getElementById("root")
);