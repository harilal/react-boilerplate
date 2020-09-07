import React from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
import { LoginComponent } from "../modules/auth/login/login.component";
import { CustomRouter } from "./custom-router";
export const Routes = () => {
  return <Router><Switch>
    {/* <Route path="/login">
      <LoginComponent />
    </Route> */}
    <CustomRouter path="/">
      <LoginComponent />
    </CustomRouter>
  </Switch>
  </Router>
}