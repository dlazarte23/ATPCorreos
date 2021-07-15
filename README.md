El presente documento explica las diferentes configuraciones y scripts que contiene.

# Principales Librerías

Las librerías para desarrollar son:

- [ant documentación](https://ant.design/docs/react/introduce)
- [ant ^4.16.6](https://www.npmjs.com/package/antd)
- [axios documentación](https://github.com/axios/axios)
- [axios ^0.21.1](https://www.npmjs.com/package/axios)
- [react-dom ](https://es.reactjs.org/docs/react-dom.html)
- [react-router-dom ^5.2.0](https://reactrouter.com/web/guides/quick-start)
- [Redux 4.0.1](https://github.com/reactjs/redux)
- [Redux documentación](https://es.redux.js.org/)
- [cpr 3.0.1](https://www.npmjs.com/package/cpr)
- [react-redux documentación](https://redux.js.org/basics/usage-with-react)
- [react-redux ^7.1.0](https://www.npmjs.com/package/react-redux/v/7.1.0)
- […] (ir añadiendo).

# La configuración de las variables de entorno

Se añade la configuración de las variables de entorno en los correspondientes ficheros asignados para ello:

- .env.dev (Desarrollo).
- .env.pro (Producción).
- .env.loc (Local).
- .env.pre (Preproducción).
- […] (tantos archivos como entornos).

Asi pues, en los [Scripts](#Scripts) del package.json se añanden las siguientes líneas (una por cada entorno _"creado"_):

- `"start_<entorno>": "cpr .env.<entorno> .env -o && react-scripts start"`.
- `"build_<entorno>": "cpr .env.<entorno> .env -o && react-scripts build"`.
