import {
    Switch,
    useRouteMatch,
    Route,
} from "react-router-dom";

import Login from "../pages/auth/login/index"

export default function AuthRouter() {
    const match = useRouteMatch()

    return (
        <Switch>
            <Route path={`${match.path}/login-admin`}>
                <Login />
            </Route>
            {/* <Route exact path="/auth" component={Login} /> */}
        </Switch>
    )
}