import React from "react";

import { Route, Switch, BrowserRouter, Redirect } from "react-router-dom";
import { Header, SiderMenu, Footer } from "../components";
import { main } from "./routes";
import { Layout, Row, Col } from "antd";

const { Content } = Layout;

const MainRoutes = () => (
  <div>
    <Layout>
      <BrowserRouter>
        <Layout style={{ position: "fixed" /* backgroundColor: "red" */ }}>
          <Row>
            <Col lg={3}>
              <SiderMenu />
            </Col>
          </Row>
          <Row>
            <Col lg={24}>
              <Content className="content-layout">
                <Header />
                <div className="site-layout-background">
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
            </Col>
            <Col lg={24}>
              <Footer />
            </Col>
          </Row>
        </Layout>
      </BrowserRouter>
    </Layout>
  </div>
);

export default MainRoutes;
