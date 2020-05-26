import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import Login from './main/Login';

import * as serviceWorker from './serviceWorker';
import './main/Login.css'

ReactDOM.render(
    <div >
        <h1>AchaRép</h1>
        <div classname="box">
        <Login />
        </div>

    </div>
, document.getElementById('root'));
serviceWorker.unregister();
