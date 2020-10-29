describe.skip('Cadastrar novo Atendico', function() {

    beforeEach(function()
    {
        cy.login();
    });
    
    it('Cadastro de antendido', function() {
   
      
       cy.get('#bs-example-navbar-collapse-1 > nav > .nav > li:nth-child(3) > .menu-link').click()
    
       cy.get('.dropdown-menu > .dropdown-menu-caixa-submenu-3 > .informacoes-wrapper > .informacoes-internas:nth-child(1) > .btn:nth-child(3)').click()
    
       cy.visit('https://app.bussolasocial.com.br/atendimento/individuo/cadastro')
    
       cy.xpath('//*[@id="pessoa[nome]"]').type('Rondinele Tests');
    
      
      cy.get('#pessoa\[nome\]').click().type('Rondinele Tests');
      
    
       cy.get('.col-sm-5 > .form-group > div > .input-group > #fisica\[data_nascimento\]').click()
    
       cy.get('.form-group > div > .hover > .iradio_square-custom > .iCheck-helper').click()
    
       cy.get('.col-sm-5 > .form-group > div > .input-group > #fisica\[data_nascimento\]').type('01/01/2020')
    
       cy.get('.col-xs-12 > .container-ajuda > .form-group > div > #pessoa\[matricula\]').click()
    
       cy.get('.col-xs-12 > .container-ajuda > .form-group > div > #pessoa\[matricula\]').type('121212')
    
       cy.get('.container-ajuda:nth-child(2) > .form-group > div > .btn-group > .btn > .filter-option').click()
    
       cy.get('.container-ajuda:nth-child(2) > .form-group > div > .btn-group > .btn > .filter-option').click()
    
       cy.get('.container-ajuda:nth-child(2) > .form-group > div > .btn-group > .btn > .bs-caret > .bs-caret-container > .fa').click()
    
       cy.get('.dropdown-menu > .dropdown-menu > .active > a > .text').click()
    
       cy.get('.container-ajuda:nth-child(3) > .form-group > div > .btn-group > .btn > .filter-option').click()
    
       cy.get('.container-ajuda:nth-child(3) > .form-group > div > .btn-group > .dropdown-menu > .dropdown-menu > li:nth-child(1) > a > .text').click()
    
       cy.get('.container-ajuda > .form-group > div > .btn-group > #status').select('ESP')
    
       cy.get('.col-md-6 > .row > .col-xs-6:nth-child(1) > .form-group > div > .btn-group > .btn > .filter-option').click()
    
       cy.get('.col-xs-6:nth-child(1) > .form-group > div > .btn-group > .dropdown-menu > .dropdown-menu:nth-child(2) > li:nth-child(2) > a > .text').click()
    
       cy.get('.col-xs-6 > .form-group > div > .btn-group > #fisica\[estado_civil_id\]').select('2')
    
       cy.get('.col-md-6 > .row > .col-xs-6:nth-child(2) > .form-group > div > .btn-group > .btn').click()
    
       cy.get('.col-xs-6:nth-child(2) > .form-group > div > .btn-group > .dropdown-menu > .dropdown-menu:nth-child(2) > li:nth-child(2) > a > .text').click()
    
       cy.get('.col-xs-6 > .form-group > div > .btn-group > #fisica\[religiao_id\]').select('14')
    
       cy.get('.row > .col-xs-6 > .form-group > div > #fisica\[naturalidade\]').click()
    
       cy.get('.row > .col-xs-6 > .form-group > div > #fisica\[naturalidade\]').type('MInas Gerais')
    
       cy.get('.col-xs-6 > .form-group > .btn-group > .btn > .filter-option').click()
    
       cy.get('.dropdown-menu > .dropdown-menu > li:nth-child(4) > .opt > .text').click()
    
       cy.get('.row > .col-xs-6 > .form-group > .btn-group > #pais_nacionalidade_id').select('30')
    
       cy.get('.form-group > div > .hover > .iradio_square-custom > .iCheck-helper').click()
    
       cy.get('.col-12 > .radio > .hover > .iradio_square-custom > .iCheck-helper').click()
    
       cy.get('div > .checkbox > .hover > .icheckbox_square-custom > .iCheck-helper').click()
    
       cy.get('div > .checkbox > .hover > .icheckbox_square-custom > .iCheck-helper').click()
    
       cy.get('div > .checkbox > .hover > .icheckbox_square-custom > .iCheck-helper').click()
    
       cy.get('div > .checkbox > .hover > .icheckbox_square-custom > .iCheck-helper').click()
    
       cy.get('div > .checkbox > .hover > .icheckbox_square-custom > .iCheck-helper').click()
    
       cy.get('div > .checkbox > .hover > .icheckbox_square-custom > .iCheck-helper').click()
    
       cy.get('div > .checkbox > .hover > .icheckbox_square-custom > .iCheck-helper').click()
    
       cy.get('.row:nth-child(17) > .col-12 > .section-divisor-deshed > .row > .col-12 > .row > .form-group > .col-12:nth-child(2) > .radio').click()
    
       cy.get('.row:nth-child(17) > .col-12 > .section-divisor-deshed > .row > .col-12 > .row > .form-group > .col-12:nth-child(2) > .radio').click()
    
       cy.get('.col-12 > .radio > .hover > .iradio_square-custom > .iCheck-helper').click()
    
       cy.get('#campo_personalizado_5020 > tbody > .elemento-clone > td:nth-child(1) > .form-control').click()
    
       cy.get('#campo_personalizado_5020 > tbody > .elemento-clone > td:nth-child(2) > .form-control').click()
    
       cy.get('.section-divisor-deshed > .row > .col-12 > .form-group > #campo_personalizado_5024').click()
    
       cy.get('.section-divisor-deshed > .row > .col-12 > .form-group > #campo_personalizado_5024').click()
    
       cy.get('.section-divisor-deshed > .row > .col-12 > .form-group > #campo_personalizado_5024').click()
    
       cy.get('.section-divisor-deshed > .row > .col-12 > .form-group > #campo_personalizado_5024').type('01/11/2020')
    
       cy.get('.row > .col-xs-6 > .form-group > div > #cpf').click()
    
       cy.get('.row > .col-xs-6 > .form-group > div > #cpf').type('199.615.680-28')
    
       cy.get('.row > .col-xs-6 > .form-group > div > #cpf').click()
    
       cy.get('.row > .col-xs-4 > .form-group > .input-group > #cep').click()
    
       cy.get('.row > .col-xs-4 > .form-group > .input-group > #cep').click()
    
       cy.get('.row > .col-xs-4 > .form-group > .input-group > #cep').click()
    
       cy.get('.row > .col-xs-4 > .form-group > .input-group > #cep').type('88370-340')
    
       cy.get('.panel > .panel-body > #form-dados-pessoais > .form-actions > .btn-primary').click()
    
       cy.get('.row > .col-xs-6 > .form-group > div > #cpf').click()
    
    })
   
   })
   