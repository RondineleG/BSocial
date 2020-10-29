import Bussola from "../../support/pages/Projeto/ProjetoPage";

describe("Cadastrar Um Novo Projeto", () => {
 
 
  beforeEach(function()
  {
      cy.login();
  })

  // before(function () {
  //   cy.login();
  // });

  it("Cadastrar novo projeto ", () => 
  {
    Bussola.CadastrarNovoProjeto();

    Bussola.PreencherDadosBasicoDoProjeto();

    Bussola.PreencherResumoDoProjeto()

    Bussola.PreencherObjetivosDoProjeto();
  });
  it("Editar um projeto existente", () => 
  {
    Bussola.EditarUmProjeto(6576);

    Bussola.PreencherDadosBasicoDoProjeto();
    
    Bussola.PreencherResumoDoProjeto();
  });

  it("Cadastrar Dados básicos", () => 
  {
    Bussola.CadastrarNovoProjeto();

    Bussola.PreencherDadosBasicoDoProjeto();
   
  });

  it("Cadastrar Resumo do projeto", () => 
  {

    cy.visit("https://app.bussolasocial.com.br/projeto-novo/6576/cadastro/resumo");

    Bussola.PreencherResumoDoProjeto();
  });
   
   
  it("Cadastrar objetivos", () => 
  {
    cy.visit("https://app.bussolasocial.com.br/projeto-novo/6576/cadastro/objetivos");
    Bussola.PreencherObjetivosDoProjeto();
  });
});
