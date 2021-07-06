import AuthRoutes from "./loginRoutes";
import MainRoutes from "./mainRoutes";

import { 
    LoginPage, 
    PeticionesPage, 
    CasosPruebasPage, 
    DetalleCPPage } from "../pages";

import { PageNotFound } from "../components";

export const auth = {
    path: '/auth', 
    component: AuthRoutes,
    login: { path: '/auth/sign-in', component: LoginPage }
}

export const main = {
    path: '/', 
    component: MainRoutes,
    error404: { path:'', component: PageNotFound }, 
    peticiones: { path: '/peticiones', component:  PeticionesPage },
    creacionCp: { path: '/peticiones/creacion-de-casos-de-prueba', component:  CasosPruebasPage },
    creacionDetalleCp: { path: '/peticiones/creacion-de-casos-de-prueba/detalle', component: DetalleCPPage } 
}