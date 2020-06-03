import React from "react";
import { BrowserRouter, Route } from "react-router-dom";


import Registro from './registro/Registrar'
import Cadastrar from './cadastro_r/CadastrarRep'
import Editar from './edit_r/Editar'
import Login from './main/Login'

export default () => (
    <BrowserRouter>
        <Route path="/login" exact component={Login} />
        <Route path="/registrar" exact component={Registro} />
        <Route path="/cadastrar-rep" exact component={Cadastrar} />
        <Route path="/editar" exact component={Editar} />
    </BrowserRouter>
);