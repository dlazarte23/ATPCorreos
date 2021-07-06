import { Route, Switch, BrowserRouter, } from "react-router-dom";

import { auth, main } from "./routes";

const Routing = () => {
    return (
        <BrowserRouter>
            <Switch>
                <Route path={auth.path} component={auth.component} />
                <Route path={main.path} component={main.component} />
            </Switch>
        </BrowserRouter>
    )
}

export default Routing;