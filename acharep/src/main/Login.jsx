
import React, {Component } from 'react'
import './Login.css'
import Button from '../components/Button'
import TLogin from './TLogin'
import '../components/Button.css'
import Grid from '@material-ui/core/Grid';
import { Container } from '@material-ui/core'


export default class Login extends Component {
    render() {
    return (
      <div >
        <div className="box">
          <TLogin />
        </div>
        <Button label="Logar"/>
        <Grid container>
            <Grid item xs={9}>
              <button className="BText" >Esqueci a senha</button>
            </Grid>
            <Grid item xs={3}>
            <button className="BText" >Registrar</button>
            </Grid>
        </Grid>
      </div>
    )

  }
}