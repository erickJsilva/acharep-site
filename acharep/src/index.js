import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import Login from './main/Login';
import './components/Button.css'
import Grid from '@material-ui/core/Grid';
import { Container } from '@material-ui/core'
import Routes from './main/routes'
import * as serviceWorker from './serviceWorker';
import './main/Login.css'

ReactDOM.render(
    <div >
        <h1>AchaRép</h1>
        <div >
        <Login />
        </div> 

    </div>
, document.getElementById('app'));
serviceWorker.unregister();
