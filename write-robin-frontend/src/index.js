import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';

import actionCable from 'actioncable'
const CableApp = {}
CableApp.cable = actionCable.createConsumer(`ws://${window.location.hostname}:3000/cable`)

let backendURL = 'http://localhost:3000'

ReactDOM.render(<App cableApp={CableApp} backendURL={backendURL}/>, document.getElementById('root'));


// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
