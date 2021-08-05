import React from "react";
import { Provider } from "react-redux";

import { store } from "./redux/store";
import "./styles.css";
//<iv className="App"></iv>
export default function App() {
  return (
    <Provider store={store}>
      <React.Fragment></React.Fragment>
    </Provider>
  );
}
