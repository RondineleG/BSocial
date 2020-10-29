describe.skip('Cadastrar novo Grupos', function() {

    beforeEach(function()
    {
        cy.login();
    });
  
    it('what_it_does', function() {

      cy.viewport(1366, 625)
   
      cy.visit('https://app.bussolasocial.com.br/atendimento/grupo/cadastro')
   
      cy.get('.row > .col-xs-12 > .form-group > .col-sm-3 > #nome').click()
   
      cy.get('.row > .col-xs-12 > .form-group > .col-sm-3 > #nome').type('oappap')
   
      cy.get('.form-group > .col-sm-3 > .btn-group > .btn > .filter-option').click()
   
      cy.get('.btn-group > .dropdown-menu > .dropdown-menu > .ms-hover > a').click()
   
      cy.get('.col-xs-12 > .form-group > .col-sm-3 > .btn-group > #projeto_id').select('1620')
   
   })
      it.only('Cadastro de grupo', function() {
     
        cy.get('nav > .nav > li:nth-child(3) > .menu-link').click();

        cy.get('.dropdown-menu-caixa-submenu-3 .informacoes-internas:nth-child(2) > .btn').click();

        cy.url().should('contains', '/cadastro');
        
        cy.visit('https://app.bussolasocial.com.br/');
       
        cy.get('#nome').click({ force: true })
          .type('Novo grupo');
      
      
         cy.get('.form-group > .col-sm-3 > .btn-group > .btn > .filter-option').click()
      
         cy.get('.dropdown-menu > .dropdown-menu > .ms-hover:nth-child(5) > a > .text').click()
      
         cy.get('.col-xs-12 > .form-group > .col-sm-3 > .btn-group > #projeto_id').select('3896')
      
         cy.get('.row > .col-xs-12 > .form-group > .col-sm-3 > #vagas').click()
      
        //  cy.get('.row > .col-xs-12 > .form-group > .col-sm-3 > #vagas').type('5')
      
        //  cy.get('.form-group > .col-sm-3 > .hover > .iradio_square-custom > .iCheck-helper').click()
      
        //  cy.get('.form-group > .col-sm-3 > .hover > .icheckbox_square-custom > .iCheck-helper').click()
      
        //  cy.get('.form-group > .col-sm-3 > .hover > .icheckbox_square-custom > .iCheck-helper').click()
      
        //  cy.get('.form-group > .col-sm-3 > .hover > .icheckbox_square-custom > .iCheck-helper').click()
      
        //  cy.get('.row > .col-xs-12 > .form-group > .col-sm-3 > #descricao').click()
      
        //  cy.get('.row > .col-xs-12 > .form-group > .col-sm-3 > #metodo_avaliativo').click()
      
        //  cy.get('.panel > .panel-footer > .row > .m-r-15 > .btn').click()
      
        //  cy.visit('https://app.bussolasocial.com.br/atendimento/grupo/4832/detalhe')

        
        // cy.get('.filter-option').click();
        // cy.get('.ms-hover:nth-child(5) .text').click();
        // cy.get('#vagas').click();
        // cy.get('#vagas').type('5');
        // cy.get('.hover > .iCheck-helper').click();
        // cy.get('.hover > .iCheck-helper').click();
        // cy.get('.hover > .iCheck-helper').click();
        // cy.get('.hover > .iCheck-helper').click();
        // cy.get('#descricao').click();
        // cy.get('#descricao').type('Descriçao');
        // cy.get('#metodo_avaliativo').click();
        // cy.get('#metodo_avaliativo').type('{backspace}');
        // cy.get('#metodo_avaliativo').type('Em construçao');
        // cy.get('.btn-primary').click();
        // cy.get('#form-dados').submit();
        // cy.url().should('contains', 'https://app.bussolasocial.com.br/atendimento/grupo/4832/detalhe');
        
      
      })
     
     })
     