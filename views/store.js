import { createStore, applyMiddleware, compose } from "redux";
// import { browserHistory } from "react-router";
import sagas from "./sagas/index";
import createSagaMiddleware from 'redux-saga';
import reducer from "./reducers/index";

// create the middleware with the userManager
// const oidcMiddleware = createOidcMiddleware(userManager);

const sagaMiddleware = createSagaMiddleware();
const initialState = {};

const createStoreWithMiddleware = compose(
  applyMiddleware(sagaMiddleware)
)(createStore);

const store = createStoreWithMiddleware(reducer, initialState);

export default store;
sagaMiddleware.run(sagas);
