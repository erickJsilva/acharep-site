import React  from 'react'

import {Route, HashRouter, } from 'react-router-dom'

import Registro from '../registro/Registrar'
import Cadastrar from '../cadastro_r/CadastrarRep'
import Editar from '../edit_r/Editar'



export default props => (
    
        <HashRouter>
            <Route path='/registrar' component={Registro}/>
            <Route path='/CadastrarRep' component={Cadastrar}/>
            <Route path='/Editar' component={Editar}/>
        </HashRouter>
    
)