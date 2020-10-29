
context('Recuperação de senha', function() {
  
    it('Recuperar senha com email invalido', function() {
   
        cy.visit('https://app.bussolasocial.com.br/login');
        
        cy.xpath('//*[@id="container-login"]/section/footer/p')
          .should('contain', 'Esqueceu a senha?')
          .contains('Tudo bem, clique aqui para recuperá-la')
          .should('be.visible')

        cy.get('a:nth-child(2)').click();

        cy.get('#container-senha > * > * > * > .font-azul')          
          .should('contain', 'Recuperação de senha')
          .should('be.visible')
         
        cy.get('#email-senha').click().type('e@e.com');
       

        cy.get('#container-senha form').submit();

        cy.get('.help-block > *')
          .should('be.visible')
          .should('contain', 'Nenhum usuário com esse e-mail.');
      
          cy.get('#container-senha > * > .m-t-50 > * > *').click();
      
          cy.url().should('contains', '/login');      
        
    })

    it('Recuperar senha com email valido', function() 
    {
   
        
        cy.visit('https://app.bussolasocial.com.br/login');
        
        cy.xpath('//*[@id="container-login"]/section/footer/p')
          .should('contain', 'Esqueceu a senha?')
          .contains('Tudo bem, clique aqui para recuperá-la')
          .should('be.visible');

        cy.get('a:nth-child(2)').click();

        cy.get('#container-senha > * > * > * > .font-azul')          
          .should('contain', 'Recuperação de senha')
          .should('be.visible');
         
        cy.get('#email-senha').click().type('rondinele@bussolasocial.com.br');
        
        cy.get('#container-senha form').submit();
      
        cy.get('#container-senha > *')
          .should('contain', 'Recuperação de senha')
          .should('contain', 'Sucesso!')
          .should('be.visible'); 
          
        cy.get('h3').should('contain', 'Sucesso!');

        cy.get('#container-senha > * > .m-t-50 > * > *').click();
      
        cy.url().should('contains', '/login');             

    });   
 })
   