import React from 'react';
import ReactDOM from 'react-dom';
import {Provider} from "react-redux";
import {applyMiddleware, createStore, Store} from "redux";
import {rootReducer} from "./Redux/RootReducer";
import {rootSaga} from "./Redux/RootSaga";
import createSagaMiddleware from "redux-saga";
import {initialRootState, RootState} from "./Redux/RootState";
import {RootAction} from "./Redux/RootAction";
import ApplicationRouting from "./View/Components/ApplicationRouting";

const sagaMiddleware = createSagaMiddleware();

// create store
export const store: Store<RootState, RootAction> = createStore(
    rootReducer,
    initialRootState(),
    applyMiddleware(sagaMiddleware)
);

// build react context
ReactDOM.render(
    <Provider store={store}>
        <React.StrictMode>
            <ApplicationRouting/>
        </React.StrictMode>
    </Provider>,
    document.getElementById('root')
);

// start saga middleware handling
sagaMiddleware.run(rootSaga);

