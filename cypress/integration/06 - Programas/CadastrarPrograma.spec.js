describe('Cadastrar Um Novo Programa', function() {

  beforeEach(function()
  {
      cy.login();
  });

    it('Cadastro de novo prgrama', function()
    {
      
       cy.get('#bs-example-navbar-collapse-1 > nav > .nav > li:nth-child(2) > .menu-link').click()
    
       cy.get('.open > .dropdown-menu > .dropdown-menu-caixa-submenu > .informacoes-wrapper > .informacoes-internas:nth-child(1) > ul > li:nth-child(2) > a').click()
    
       cy.visit('https://app.bussolasocial.com.br/projeto/programa/lista')
    
       cy.get('.row > .col-sm-12 > .topo-menu-wrapper-botoes > .action > .btn').click()
    
       cy.url().should('contains', '/programa/cadastro');
      
       //cy.visit('https://app.bussolasocial.com.br/projeto/programa/cadastro')
    
       cy.get('.row > .col-sm-12 > .form-group > .col-sm-3 > #nome')
         .click()
         .clear()
         .type('Novo programa');

      cy.get('.row > .col-sm-12 > .form-group > .col-sm-3 > #descricao')
        .click()
        .clear()
        .type('Novo Descricao');
      
       cy.get('.panel > .panel-body > .form-horizontal > .form-actions > .btn-primary').click()
    
       cy.visit('https://app.bussolasocial.com.br/projeto/programa/lista')


       cy.get('.panel-body')
         .should('be.visible')
         .should('contain', 'Novo programa');
       
       cy.url().should('contains', '/programa/lista');
    
    })

    it('Exclusão de um programa existente', function() {

        cy.viewport(1366, 625)
     
        cy.visit('https://app.bussolasocial.com.br/projeto/programa/lista')

        cy.get('tr:nth-child(3) .fa').click();
        cy.get('.open li:nth-child(3) > a').click();
        cy.url().should('contains', '/lista');
     
     })
   
   })
   