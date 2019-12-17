import { combineReducers, applyMiddleware, createStore, Store, Reducer } from 'redux';
import { composeWithDevTools } from 'redux-devtools-extension';
import createSagaMiddleware from 'redux-saga';
import { createBrowserHistory } from 'history';
import sagas from './sagas';
import { helloWorldReducer, HelloWorldStore } from './pages/HelloWorld';

export interface IStore {
  helloWorld: HelloWorldStore;
}

const rootReducer: Reducer<any> = combineReducers({
  helloWorldReducer,
});

const sagaMiddleware = createSagaMiddleware();
const composeEnhancers = composeWithDevTools({});

export const store = createStore(rootReducer, {}, composeEnhancers(applyMiddleware(sagaMiddleware))) as Store<IStore>;

sagas.forEach((saga: any) => Object.keys(saga).map(name => sagaMiddleware.run(saga[name])));

export const history = createBrowserHistory();
