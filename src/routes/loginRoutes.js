import React from 'react';

import { Route, Redirect } from "react-router-dom";

import { LoginPage } from "../pages";

const LoginRoutes = () => (
    <div className="container">
        <Route exact path="/" render={() => <Redirect to="/login" />} />
        <Route path="/sign-in" component={LoginPage} />
    </div>
);

export default LoginRoutes;