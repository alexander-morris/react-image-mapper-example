import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import logo from './logo.svg';
import * as serviceWorker from './serviceWorker';

const tips = [{
	text 	: "Tip 1",
	x		: 22.34,
	y 		: 20.12
},{
	text 	: "Tip 2",
	x		: 12.34,
	y 		: 38.12
},{
	text 	: "Tip 3",
	x		: 75.34,
	y 		: 80.12
}];

ReactDOM.render(<App img={logo} tips={tips}/>, document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
