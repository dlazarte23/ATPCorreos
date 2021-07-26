import "./App.css";

import Routing from "./routes";

import { BrowserRouter as Router } from "react-router-dom";

import { Layout } from "antd";

function App() {
  return (
    <div className="App">
      <Layout>
        <Router>
          <Routing />
        </Router>
      </Layout>
    </div>
  );
}

export default App;
