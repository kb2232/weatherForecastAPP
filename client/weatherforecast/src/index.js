import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import { createStore, applyMiddleware } from 'redux';
import ReduxPromise from 'redux-promise';
import { Provider } from 'react-redux';
import allstates from './reducers/reducerWeather';
import 'bootstrap/dist/css/bootstrap.min.css';

//creating a store with middleware to handle all incoming actions.
const createStoreWithMiddleware = applyMiddleware(ReduxPromise)(createStore);

ReactDOM.render(
	<Provider store={createStoreWithMiddleware(allstates)}>
			<App />
	</Provider>,
	document.getElementById('root')
);
