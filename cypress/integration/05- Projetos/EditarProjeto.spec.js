import Bussola from "../../support/pages/Projeto/ProjetoPage";

describe("Editar Projeto Existente", () => {
  beforeEach(function() {
      cy.login();
  })
 
  it("Editar dados basicos de um projeto existente", () => 
  {
    Bussola.EditarUmProjeto(6576);

    Bussola.PreencherDadosBasicoDoProjeto();
    
    Bussola.PreencherResumoDoProjeto();
  });

  
  it("Editar resumo de um projeto existente", () => 
  {
    Bussola.EditarUmProjeto(6576);

    Bussola.PreencherResumoDoProjeto();
 
});

  
  it("Editar Objetivos de um projeto existente", () => 
  {
    Bussola.EditarUmProjeto(6576);

    Bussola.PreencherObjetivosDoProjeto()
  });

});
