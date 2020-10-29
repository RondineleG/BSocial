describe.skip('Cadastrar um novo curso', function() {

    it('Cadastro de curso', function() 
    {
       cy.get('#bs-example-navbar-collapse-1 > nav > .nav > .active > .menu-link').click()
    
       cy.get('.dropdown-menu > .dropdown-menu-caixa-submenu > .informacoes-wrapper > .informacoes-internas:nth-child(3) > .btn:nth-child(3)').click()
    
       cy.visit('https://app.bussolasocial.com.br/atendimento/curso/cadastro')
    
       cy.get('.col-md-6 > .container-ajuda > .form-group > div > #curso\[nome\]').click()
    
       cy.get('.col-md-6 > .container-ajuda > .form-group > div > #curso\[nome\]').type('Opapsas')
    
       cy.get('.col-md-6 > .container-ajuda > .form-group > div > #curso\[descricao\]').click()
    
       cy.get('.div-clonar > .col-md-4 > .form-group > div > #nome').click()
    
       cy.get('.div-clonar > .col-md-4 > .form-group > div > #nome').type('Nome')
    
       cy.get('.col-md-12 > .div-clonar > .col-md-2:nth-child(2) > .input-group > .form-control').type('10')
    
       cy.get('.col-md-12 > .div-clonar > .col-md-2:nth-child(3) > .input-group > .form-control').type('11')
    
       cy.get('.col-md-12 > .div-clonar > .col-md-4 > .btn-margin > .btn-success').click()
    
       cy.get('.col-md-12 > .panel > .panel-body > .form-actions > .btn-primary').click()
    
       cy.get('.col-md-12 > .div-clonar:nth-child(2) > .col-md-4 > .btn-margin > .btn-danger').click()
    
       cy.get('.col-md-12 > .panel > .panel-body > .form-actions > .btn-primary').click()
    
       cy.visit('https://app.bussolasocial.com.br/atendimento/curso/lista')
    
    })
   
   })
   