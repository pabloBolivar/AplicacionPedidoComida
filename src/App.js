import React from "react";
import { Provider } from "react-redux";
import { BrowserRouter, Switch, Route } from "react-router-dom";

import { store } from "./redux/store";
import InputDataContainer from "./components/initialData/InputDataContainer";
import Layout from "./components/Layout";
import "./styles.css";

export default function App() {
  return (
    <Provider store={store}>
      <BrowserRouter>
        <Layout>
          <Switch>
            <Route exact path="/" component={InputDataContainer} />
          </Switch>
        </Layout>
      </BrowserRouter>
    </Provider>
  );
}
