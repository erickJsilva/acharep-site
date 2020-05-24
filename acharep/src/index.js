import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import Login from './main/Login';

import * as serviceWorker from './serviceWorker';
import './main/Login.css'

ReactDOM.render(
    <div>
        <h1>Criar conta</h1>
        <Login />

    </div>
, document.getElementById('root'));
serviceWorker.unregister();
