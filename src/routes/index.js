import { Route, Switch } from "react-router-dom";

import { auth, main } from "./routes";

const Routing = () => {
    return (
        <Switch>
            <Route path={auth.path} component={auth.component} />
            <Route path={main.path} component={main.component} />
        </Switch>
    )
}

export default Routing;