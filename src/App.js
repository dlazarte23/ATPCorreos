import "./App.css";

import Routing from './routes';

import { Layout } from "antd";

function App() {
  return (
    <div className="App">
      <Layout>
        <Routing />
      </Layout>
    </div>
  );
}

export default App;
