import React from 'react';
import {BrowserRouter as Router, Route, Switch} from 'react-router-dom';
import Box from "./composability/Box";
import {paintRed, withSolidBorder} from "./composability/Decorate";

const RedBox = paintRed(Box);
const BorderedBox = withSolidBorder(Box);
const RedBoxWithBorder = withSolidBorder(RedBox);

export default () => (
    <Router>
        <Switch>
            <Route exact path="/">
                <Box/>
            </Route>
            <Route exact path="/red">
                <RedBox/>
            </Route>
            <Route exact path="/border">
                <BorderedBox/>
            </Route>
            <Route exact path="/red/border">
                <RedBoxWithBorder/>
            </Route>
        </Switch>
    </Router>
);

