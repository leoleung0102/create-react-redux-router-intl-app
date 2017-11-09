import React from "react";
import { Route, Switch } from "react-router-dom";
import asyncComponent from "./components/AsyncComponent/AsyncComponent";
import AppliedRoute from "./components/Route/AppliedRoute";
import UnauthenticatedRoute from "./components/Route/UnauthenticatedRoute";

const AsyncHome = asyncComponent(() => import("./containers/Home"));
const AsyncAbout = asyncComponent(() => import("./containers/About"));

export default ({ childProps }) =>
    <Switch>
        <AppliedRoute path="/" exact component={AsyncHome} props={childProps} />
        <UnauthenticatedRoute path="/about-us" exact component={AsyncAbout} props={childProps} />
        {/*{ /* Finally, catch all unmatched routes */ }*/}
        <Route component={AsyncAbout} />
    </Switch>;