import { createStore, applyMiddleware, compose } from "redux";
import sagas from "./sagas/index";
import createSagaMiddleware from 'redux-saga';
import reducer from "./reducers/index";

const sagaMiddleware = createSagaMiddleware();
const initialState = {};

const createStoreWithMiddleware = compose(
  applyMiddleware(sagaMiddleware)
)(createStore);

const store = createStoreWithMiddleware(reducer, initialState);

export default store;
sagaMiddleware.run(sagas);
