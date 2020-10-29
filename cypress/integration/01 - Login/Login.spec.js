import login from "../../support/pages/Login/LoginPage";


beforeEach('Acessar o site de teste', () =>
 {
    cy.visit(Cypress.env('prod'));
})

  

describe('Fazer login no Bussola Social', function()
{
    it('Teste login com dados invalidos', async () =>
    {
        login.preencherEmail('ro@ron.com');
 
        login.preencherSenha('ro@ro.com');

        login.mensagemDeErro();

        login.clickButtonEntrar()
    })
    
    it("Login usando comando global cypress", () => 
    {
        cy.logonEmail(Cypress.env("usuarioGestor"), Cypress.env("senhaGestor"));
        
     });

      
    
    it('Login com dados validos', function()
    {           
        login.preencherDadosLogin();
    
    })
})
   