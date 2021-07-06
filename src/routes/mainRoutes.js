import React from 'react';

import { Route, Switch, BrowserRouter } from "react-router-dom";

import { Header, SiderMenu, Footer, PageNotFound } from "../components";
import { PeticionesPage, CasosPruebasScreen, LoginPage } from "../pages";

import { Layout } from "antd";

const { Content } = Layout;

const MainRoutes = () => (
    <div>
        <Layout>
            <BrowserRouter>
                <SiderMenu />
                <Layout>
                    <Header />
                    <Content className="content-layout">
                        <div
                            className="site-layout-background"
                            style={{ padding: 24, minHeight: 578 }}
                        >
                            <Switch>
                                <Route path="/" exact />
                                <Route
                                    path="/Peticiones/listado-de-peticiones"
                                    exact
                                    component={PeticionesPage}
                                />
                                <Route
                                    path="/CasosDePrueba/creacion-de-casos-de-prueba"
                                    exact
                                    component={CasosPruebasScreen}
                                />
                                <Route path="/sign-in" exact component={LoginPage} />
                                <Route path="" component={PageNotFound} />
                            </Switch>
                        </div>
                    </Content>
                    <Footer />
                </Layout>
            </BrowserRouter>
        </Layout>
    </div>
);

export default MainRoutes;