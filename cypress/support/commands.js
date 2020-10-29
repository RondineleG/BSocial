
Cypress.Commands.add('login', () =>
{

   cy.visit(Cypress.env('prod'));

   cy.get('#email').type(Cypress.env('email')).should('have.value', 'rondineleg@gmail.com');

   cy.get('#senha').type(Cypress.env('senha')).should('have.value', '8f5954');

  cy.get('[type="submit"]').contains('Entrar').click();
  
});

Cypress.Commands.add("logonEmail", (email, senha) =>
 {
 
   cy.log("logonEmail");

   cy.get("#email").type(email);

   cy.get("#senha").type(senha);

   cy.get('[type="submit"]').contains('Entrar').click();
   
 });


Cypress.SelectorPlayground.defaults({
   selectorPriority: ['id', 'class']
});