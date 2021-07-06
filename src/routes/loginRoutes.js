import React from 'react';

import { Route, Redirect } from "react-router-dom";

import { auth } from './routes';

const AuthRoutes = () => (
    <div className="container">
        <Route exact path="/auth" render={ () => <Redirect to={ auth.login.path } /> } />
        <Route exact path={ auth.login.path } component={ auth.login.component } />
        {/** Aqui mas adelante irá paginas como:
           * - Registro de usuarios
           * - Configuración de Usuarios 
           * - etc
        **/}
    </div>
);

export default AuthRoutes;