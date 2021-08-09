import AuthRoutes from "./loginRoutes";
import MainRoutes from "./mainRoutes";

import {
  LoginPage,
  PeticionesPage,
  CasosPruebasPage,
  DetalleCPPage,
} from "../pages";

import { PageNotFound } from "../components";

export const auth = {
  path: "/auth",
  component: AuthRoutes,
  login: { path: "/auth/sign-in", component: LoginPage },
};

const error404Route = { path: "", component: PageNotFound };

const peticionesRoute = {
  path: "/peticiones",
  component: PeticionesPage,
  breadcrumb: "Peticiones",
};

const creacionCpRoute = {
  path: "/peticiones/creacion-de-casos-de-prueba",
  component: CasosPruebasPage,
  breadcrumb: "Creación de casos de prueba",
};

const creacionDetalleCpRoute = {
  path: "/peticiones/creacion-de-casos-de-prueba/detalle",
  component: DetalleCPPage,
  breadcrumb: "Detalle",
};

export const main = {
  path: "/",
  component: MainRoutes,
  error404: error404Route,
  peticiones: peticionesRoute,
  creacionCp: creacionCpRoute,
  creacionDetalleCp: creacionDetalleCpRoute,
};

export const breadcrumbRoutes = [
  peticionesRoute,
  creacionCpRoute,
  creacionDetalleCpRoute,
];
