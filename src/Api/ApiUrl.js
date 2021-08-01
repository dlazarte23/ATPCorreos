/*eslint-env node*/

const ProyectoBaseUrl = {
  getProyectos: `${process.env.REACT_APP_ATPCORREOS}proyecto`,
  setPeticion: `${process.env.REACT_APP_ATPCORREOS}sprint`,
  getPeticiones: `${process.env.REACT_APP_ATPCORREOS}sprint/proyecto`,
  setCasoDePrueba: `${process.env.REACT_APP_ATPCORREOS}testcabecera`,
  getCasosDePrueba: `${process.env.REACT_APP_ATPCORREOS}test/sprint`,
  getDocumentoXml: `${process.env.REACT_APP_ATPCORREOS}export/xml`,
  getDocumentoExcel: `${process.env.REACT_APP_ATPCORREOS}export/informe`,
  setTestStep: `${process.env.REACT_APP_ATPCORREOS}teststep`,
  getTestSteps: `${process.env.REACT_APP_ATPCORREOS}teststep/test`,
};

const UsuarioBaseUrl = {
  setLoginUser: `${process.env.REACT_APP_ATPCORREOS}login`,
};

module.exports = {
  ProyectoBaseUrl,
  UsuarioBaseUrl,
};
