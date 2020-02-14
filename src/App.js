import React from "react";
import { Switch, Route, BrowserRouter } from 'react-router-dom';
import Home from "./components/Home";
import Info from "./components/Info";

export default function App() {
    return (
      <BrowserRouter basename={process.env.PUBLIC_URL}>
        <div className="app" >
          <Switch>
            <Route exact path='/' component={Home} />
            <Route path={'/overview/:name'}>
              <Info />
            </Route>
          </Switch>
        </div>
      </BrowserRouter >
    );
  }
  