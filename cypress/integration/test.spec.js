describe('Cadastro de planos',()=>
{
    beforeEach ( ( )  => 
     { 
        cy.visit(Cypress.env('prod'), {
            onBeforeLoad: win => {
              win.sessionStorage.clear();
            }
          });
     });

     it('Teste it', async () =>
     {
        cy.log(" Testando");
     })
  
});