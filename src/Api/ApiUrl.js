/*eslint-env node*/

const ProyectoBaseUrl = {
  getProyectos: `${process.env.REACT_APP_ATPCORREOS}allprojectuser`,
  setPeticion: `${process.env.REACT_APP_ATPCORREOS}springs`,
  getPeticiones: `${process.env.REACT_APP_ATPCORREOS}springs/projects`,
  editPeticiones: `${process.env.REACT_APP_ATPCORREOS}springs`,
  deletePeticiones: `${process.env.REACT_APP_ATPCORREOS}springs/delete`,
  setCasoDePrueba: `${process.env.REACT_APP_ATPCORREOS}testCase`,
  getCasosDePrueba: `${process.env.REACT_APP_ATPCORREOS}testCase/testPlan`,
  getDocumentoXml: `${process.env.REACT_APP_ATPCORREOS}documents/export/xml`,
  getDocumentoExcel: `${process.env.REACT_APP_ATPCORREOS}export/excel`,
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
