/*eslint-env node*/

const ProyectoBaseUrl = {

  getProyectos: `${process.env.REACT_APP_ATPCORREOS}proyecto`,
  setPeticion: `${process.env.REACT_APP_ATPCORREOS}sprint`,  

};

const UsuarioBaseUrl = {

  setLoginUser: `${process.env.REACT_APP_ATPCORREOS}login`

}

module.exports = {
  ProyectoBaseUrl,
  UsuarioBaseUrl
};
