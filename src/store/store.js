import { createStore, applyMiddleware, compose } from 'redux';
import { createStateSyncMiddleware } from 'redux-state-sync';
import reducers from './reducers';
import { loadState, saveState } from './localStorage';

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

const persistedState = loadState();

const config = {};

const middlewares = [createStateSyncMiddleware(config)];

const store = createStore(
    reducers,
    persistedState,
    composeEnhancers(applyMiddleware(...middlewares))
);

store.subscribe(() => {
    saveState(store.getState());
});

export default store;
