import React from "react";
import { BrowserRouter, Switch, Route } from "react-router-dom";
import HomeScreen from "./firebaseComp/HomeScreen";
import InputScreen from "./storeApi/InputScreen";
import HeaderV from "./storeApi/HeaderV";
import Detail from "./storeApi/Detail";

const App = () => {
  return (
    <div>
      <div>
        <BrowserRouter>
          <HeaderV />
          <Switch>
            <Route exact path="/" component={HomeScreen} />
            <Route exact path="/input" component={InputScreen} />
            <Route exact path="/:id" component={Detail} />
          </Switch>
        </BrowserRouter>
      </div>
    </div>
  );
};

export default App;
