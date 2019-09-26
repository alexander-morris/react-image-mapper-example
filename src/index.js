import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';

var MAP = {
  name: "my-map",
  areas: [
    {
      name: "1",
      shape: "poly",
      coords: [25, 33, 27, 300, 128, 240, 128, 94],
      preFillColor: "green",
      fillColor: "#0000ff"
    },
    {
      name: "2",
      shape: "poly",
      coords: [219, 118, 220, 210, 283, 210, 284, 119],
      preFillColor: "pink",
      lineWidth: 10,
      strokeColor: "#0000ff"
    },
    {
      name: "3",
      shape: "poly",
      coords: [381, 241, 383, 94, 462, 53, 457, 282],
      preFillColor: "yellow", // this is mandatory for stroke color to work
      lineWidth: 10,
      strokeColor: "#6afd09"
    },
    {
      name: "4",
      shape: "poly",
      coords: [245, 285, 290, 285, 274, 239, 249, 238],
      preFillColor: "red"
    },
    {
      name: "5",
      shape: "circle",
      coords: [170, 100, 25],
      preFillColor: "rgb(255,255,255,0.3)",
      lineWidth: 2
    },
    {
      name: "6",
      shape: "rect",
      coords: [270, 100, 200, 50],
      lineWidth: 2,
      preFillColor: "rgba(255, 255, 255, 0.3)",
      strokeColor: "#6afd09"
    }
  ]
};

var URL = "https://c1.staticflickr.com/5/4052/4503898393_303cfbc9fd_b.jpg";


ReactDOM.render(<App img={URL} map={MAP}/>, document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
