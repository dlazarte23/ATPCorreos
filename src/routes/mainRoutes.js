import React from "react";

import { Route, Switch, BrowserRouter, Redirect } from "react-router-dom";
import { Header, SiderMenu, Footer } from "../components";
import { main } from "./routes";
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
                <Route path={main.path} exact>
                  <Redirect to="/peticiones" />
                </Route>

                <Route
                  path={main.peticiones.path}
                  exact
                  component={main.peticiones.component}
                />
                <Route
                  path={main.creacionCp.path}
                  exact
                  component={main.creacionCp.component}
                />
                <Route
                  path={main.creacionDetalleCp.path}
                  exact
                  component={main.creacionDetalleCp.component}
                />
                <Route
                  path={main.error404.path}
                  component={main.error404.component}
                />
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
