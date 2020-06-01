
import React, {Component } from 'react'
import './Login.css'
import Button from '../components/Button'
import TLogin from './TLogin'
import '../components/Button.css'
import Grid from '@material-ui/core/Grid';
import { Container } from '@material-ui/core'
import Routes from './routes'
import {BrowserRouter as Router, Route, HashRouter, } from 'react-router-dom'


export default class Login extends Component {
    render() {
    return (
      <div >
        <div className="box">
          <TLogin />
        </div>
        <Button label="Logar"/>
        <Router>
            <Grid container>
                <Grid item xs={3}>
                <a className="BText" href="#/registrar">Registrar</a>
                <Routes/>
                </Grid>
                <Grid item xs={4}>
                </Grid>
                <Grid item xs={5}>
                <a className="BText" href="#/recover">Esqueci a senha</a>
                <Routes/>
                </Grid>
            </Grid>
        </Router>
      </div>
    )

  }
}