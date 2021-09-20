import "./App.css";

import Routing from './routes';

import { BrowserRouter as Router } from 'react-router-dom';

import { Layout } from "antd";

import { Provider } from 'react-redux';
import store from './stateManagement/store';

function App() {
  return (
    <div className="App">
      <Layout>
        <Router>
          <Provider store={store} >
            <Routing />
          </Provider>
        </Router>
      </Layout>
    </div>
  );
}

export default App;
