import "./App.css";
import { Redirect, Route, Switch, BrowserRouter } from "react-router-dom";
import { Header, SiderMenu, Footer, PageNotFound } from "./components";
import { PeticionesPage, CasosPruebasScreen } from "./pages/";
import { Layout } from "antd";

const { Content } = Layout;

function App() {
  return (
    <div className="App">
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
}

export default App;
