
beforeEach('Acessar o site de teste', () => 
{
  cy.visit(Cypress.env('prod'));
});

    let now = new Date();
    const userEmail = "user" + now.valueOf() + "@bussolasocial.com.br";

describe("Criar uma nova conta no Bussola Social", () => 
{

    it('Validar cadastro com email ja utilizado ', function() 
    {
       
    cy.get('#container-info-entrar .btn').click();

    cy.get('.filter-option').click();

    cy.get('li:nth-child(4) .text').click();

    cy.get('#cnpj').click().type('95.462.566/0001-41');

    cy.get( '.cnpj' ).type( 'input').should('be.visible') 

    cy.get('#proponente').click().type('Uma Conta Qualquer');

    cy.get('#responsavel').click().type('Rondinele');

    cy.get('#email-cadastro').click().type('ron@dinele.com');

    cy.get('#senha-cadastro').click().type('123456');

    cy.get('#senha-confirmation').click().type('12345');

     cy.get('.m-t-50 > .form-group > * > .btn').click();

    cy.get('.help-block').should('contain', 'Email cadastro já está em uso.');

    cy.get('.help-block').should('contain', 'A confirmação de senha não confere.');
    
    })

    
    it('Validar cadastro com senhas diferentes', function()
     {
       
      cy.get('#container-info-entrar .btn').click();
  
      cy.get('.filter-option').click();
  
      cy.get('li:nth-child(4) .text').click();
  
      cy.get('#cnpj').click().type('95.462.566/0001-41');
  
      cy.get( '.cnpj' ).type( 'input').should('be.visible') 
  
      cy.get('#proponente').click().type('Uma Conta Qualquer');
  
      cy.get('#responsavel').click().type('Rondinele');
  
      cy.get('#email-cadastro').click().type(userEmail);
  
      cy.get('#senha-cadastro').click().type('123456');
  
      cy.get('#senha-confirmation').click().type('12345');
  
       cy.get('.m-t-50 > .form-group > * > .btn').click();
  
      cy.get('.help-block').should('contain', 'A confirmação de senha não confere.');
      
      })
   
      it('Validar cadastro de uma nova conta ', function()
      {
        
       cy.get('#container-info-entrar .btn').click();
   
       cy.get('.filter-option').click();
   
       cy.get('li:nth-child(4) .text').click();
   
       cy.get('#cnpj').click().type('95.462.566/0001-41');
   
       cy.get( '.cnpj' ).type( 'input').should('be.visible') 
   
       cy.get('#proponente').click().type('Uma Conta Qualquer');
   
       cy.get('#responsavel').click().type('Rondinele');
   
       cy.get('#email-cadastro').click().type(userEmail);
   
       cy.get('#senha-cadastro').click().type('123456');
   
       cy.get('#senha-confirmation').click().type('123456');
   
       //cy.get('.m-t-50 > .form-group > * > .btn').click();
   
       
       })
 })
   