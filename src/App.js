import "./App.css";
import { Route, Switch, BrowserRouter, Redirect } from "react-router-dom";
import { Header, SiderMenu, Footer, PageNotFound } from "./components";
import { PeticionesPage, CasosPruebasScreen, LoginPage } from "./pages/";
import { Layout } from "antd";

const { Content } = Layout;

const LoginContainer = () => (
  <div className="container">
    <Route exact path="/" render={() => <Redirect to="/login" />} />
    <Route path="/login" component={LoginPage} />
  </div>
);

const DefaultContainer = () => (
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
                <Route path="/Login" exact component={LoginPage} />
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

function App() {
  return (
    <div className="App">
      <Layout>
        <BrowserRouter>
          <Switch>
            <Route exact path="/Login" component={LoginContainer} />
            <Route component={DefaultContainer} />
          </Switch>
        </BrowserRouter>
      </Layout>
    </div>
  );
}

export default App;
