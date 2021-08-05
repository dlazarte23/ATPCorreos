/*eslint-env node*/

const ProyectoBaseUrl = {
  getProyectos: `${process.env.REACT_APP_ATPCORREOS}allprojectuser`,
  setPeticion: `${process.env.REACT_APP_ATPCORREOS}springs`,
  getPeticiones: `${process.env.REACT_APP_ATPCORREOS}springs/projects`,
  setCasoDePrueba: `${process.env.REACT_APP_ATPCORREOS}testcabecera`,
  getCasosDePrueba: `${process.env.REACT_APP_ATPCORREOS}/testCase/testPlan`,
  getDocumentoXml: `${process.env.REACT_APP_ATPCORREOS}export/xml`,
  getDocumentoExcel: `${process.env.REACT_APP_ATPCORREOS}export/informe`,
  setTestStep: `${process.env.REACT_APP_ATPCORREOS}teststep`,
  getTestSteps: `${process.env.REACT_APP_ATPCORREOS}teststep/test`,
  getTestPlan: `${process.env.REACT_APP_ATPCORREOS}springs`,
  setTestPlan:`${process.env.REACT_APP_ATPCORREOS}testplans`,
};

const UsuarioBaseUrl = {
  setLoginUser: `${process.env.REACT_APP_ATPCORREOS}login`,
};

module.exports = {
  ProyectoBaseUrl,
  UsuarioBaseUrl,
};
