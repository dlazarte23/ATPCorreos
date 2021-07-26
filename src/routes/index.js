import { Route, Switch, Redirect } from "react-router-dom";
import { useSelector } from "react-redux";
import { auth, main } from "./routes";

const Routing = () => {
  const isAuthenticated = !!localStorage.getItem("IS_AUTHENTICATED");
  const isLoggedIn = useSelector((state) => state.usuario.loggedIn);
  console.log(isAuthenticated);
  return (
    <Switch>
      <Route
        path={auth.path}
        //component={auth.component}
        render={() =>
          isAuthenticated ? <Redirect to="/peticiones" /> : <auth.component />
        }
      />
      <Route
        path={main.path}
        //component={main.component}
        render={() =>
          isAuthenticated || isLoggedIn ? (
            <main.component />
          ) : (
            <Redirect to="/auth" />
          )
        }
      />
    </Switch>
  );
};

export default Routing;
