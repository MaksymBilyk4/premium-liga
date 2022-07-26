import React from 'react';
import {Switch, Route, Redirect} from "react-router-dom";
import {publicRoutes} from "../routes";
import {NOT_FOUND} from "../utils/constants/routes";

const AppRouter = () => {
    return (
        <Switch>
            {publicRoutes.map(({path, Component}) =>
                <Route key={path} path={path} component={Component} exact/>
            )}
            <Redirect to={NOT_FOUND}/>
        </Switch>
    );
};

export default AppRouter;