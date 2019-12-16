import { combineReducers, applyMiddleware, createStore, Store, Reducer } from 'redux'
import { composeWithDevTools } from 'redux-devtools-extension'
import createSagaMiddleware from 'redux-saga'
import { createBrowserHistory } from 'history'
import sagas from './sagas'
import { user, IUserStore } from './components/Login/store'

export interface IStore {
	user: IUserStore
}

const rootReducer: Reducer<any> = combineReducers({
    user,
})


const sagaMiddleware = createSagaMiddleware()
const composeEnhancers = composeWithDevTools({})

export const store = createStore(
    rootReducer,
	{},
	composeEnhancers(applyMiddleware(sagaMiddleware))
) as Store<IStore>

sagas.forEach((saga: any) => Object.keys(saga).map(name => sagaMiddleware.run(saga[name])))

export const history = createBrowserHistory()
