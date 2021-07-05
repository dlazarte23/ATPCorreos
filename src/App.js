import "./App.css";
import { BrowserRouter, Route } from "react-router-dom";
import Header from "./components/shared/Header";
import SiderMenu from "./components/shared/SiderMenu";
import Footer from "./components/shared/Footer";
import PeticionesPage from "./pages/Peticiones/PeticionesPage";
import LoginPage from "./pages/Login/LoginPage";
import CasosPruebasScreen from "./pages/CasosDePrueba/CasosPruebasScreen";
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
                <Route path="/" exact />
                <Route path="/Peticiones" exact component={PeticionesPage} />
                <Route
                  path="/Peticiones/creacion-de-casos-de-prueba"
                  exact
                  component={CasosPruebasScreen}
                />
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
