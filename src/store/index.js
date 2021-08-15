import createSagaMiddleware from 'redux-saga';
import { applyMiddleware, createStore, combineReducers, compose } from 'redux';
import { data } from './modules/data/reducer';
import rootSaga from './modules/rootSaga';

const rootReducer = combineReducers({ data });
const sagaMiddleware = createSagaMiddleware();

export const store = createStore(
  rootReducer,
  compose(applyMiddleware(sagaMiddleware)),
);

sagaMiddleware.run(rootSaga);
