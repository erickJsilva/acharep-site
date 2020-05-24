
import React, {Component } from 'react'
import './Login.css'
import Button from '../components/Button'
import TLogin from './TLogin'


export default class Login extends Component {
    render() {
    return (
      <div>
        <div className="box">
          <TLogin/>
        </div>
        <Button label="Cadastrar"/>
      </div>
    )

  }
}