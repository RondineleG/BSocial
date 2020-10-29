describe('Fazer logout do Bussola Social', function()
{
  beforeEach( function()
  {
    cy.login();
  })
    it('Logout', function()
    {
      cy.get('.fas:nth-child(1)').click();
     
      cy.get('.dropdown-menu > li:nth-child(6) > a').click();
      
      cy.url().should('contains', 'https://app.bussolasocial.com.br/login');
    
    })
   
})
   