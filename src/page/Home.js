import React from "react";
import { BrowserRouter, Switch, Route } from "react-router-dom";

import InputData from "../components/InputData";
//<iv className="App"></iv>import I from "";
export default function App() {
  return (
    <div>
      <BrowserRouter>
        <Switch>
          <Route exact path="/" component={InputData} />
        </Switch>
      </BrowserRouter>
    </div>
  );
}
