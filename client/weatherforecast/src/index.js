import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import { createStore, applyMiddleware } from 'redux';
import ReduxPromise from 'redux-promise';
import { Provider } from 'react-redux';
import allstates from './reducers';
import 'bootstrap/dist/css/bootstrap.min.css';

//creating a store with middleware to handle all incoming actions.
/*
redux promise - looks at incoming action - if it is a promise, the redux promise stops the action completely - it unwraps it and dispatch actual data to the reducers(States)
*/
const createStoreWithMiddleware = applyMiddleware(ReduxPromise)(createStore);

ReactDOM.render(
	<Provider store={createStoreWithMiddleware(allstates)}>
			<App />
	</Provider>,
	document.getElementById('root')
);
