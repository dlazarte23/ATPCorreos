import { Route, Switch, BrowserRouter } from "react-router-dom";

import LoginRoutes from "./loginRoutes";
import MainRoutes from "./mainRoutes";

const Routing = () => {
    return (
        <BrowserRouter>
            <Switch>
                <Route exact path="/sign-in" component={LoginRoutes} />
                <Route component={MainRoutes} />
            </Switch>
        </BrowserRouter>
    )
}

export default Routing;