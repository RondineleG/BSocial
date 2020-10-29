describe.skip('Cadastar uma nova atividade', function() {

  beforeEach(function () 
  {
    cy.login();
  });

    it('Cadastro de Dados Basicos', function() {
   
       cy.viewport(1366, 625)
    
       cy.visit('https://app.bussolasocial.com.br/atendimento/curso/lista')
    
       cy.get('.container-fluid > .page-menu > .nav > .active > a').click()
    
       cy.get('.dropdown-menu > .page-submenu > .row > .col-sm-4 > .btn:nth-child(7)').click()
    
       cy.visit('https://app.bussolasocial.com.br/atendimento/atividade/cadastro')
    
       cy.get('.row > .col-xs-12 > .form-group > .col-sm-3 > #nome').click()
    
       cy.get('.row > .col-xs-12 > .form-group > .col-sm-3 > #nome').type('Onva Atividade')
    
       cy.get('.row:nth-child(3) > .col-xs-12 > .form-group > .col-sm-3 > .btn-group > .btn > .filter-option').click()
    
       cy.get('.dropdown-menu > .dropdown-menu > .ms-hover:nth-child(2) > a > .text').click()
    
       cy.get('.col-xs-12 > .form-group > .col-sm-3 > .btn-group > #atividade_categoria_id').select('14')
    
       cy.get('.row:nth-child(4) > .col-xs-12 > .form-group > .col-sm-3 > .btn-group > .btn > .filter-option').click()
    
       cy.get('.dropdown-menu > .dropdown-menu > .ms-hover:nth-child(5) > a > .text').click()
    
       cy.get('.col-xs-12 > .form-group > .col-sm-3 > .btn-group > #projeto_id').select('3896')
    
       cy.get('.form-group > .col-sm-3 > .hover > .iradio_square-custom > .iCheck-helper').click()
    
       cy.get('#row-grupo > .col-xs-12 > .form-group > .col-sm-3 > .btn-group > .btn > .filter-option').click()
    
       cy.get('.dropdown-menu > .dropdown-menu:nth-child(1) > .ms-hover:nth-child(2) > a > .text').click()
    
       cy.get('.col-xs-12 > .form-group > .col-sm-3 > .btn-group > #grupo_id').select('4832')
    
       cy.get('.col-xs-12 > .form-group > .col-sm-3 > .count-element > #descricao').click()
    
       cy.get('.col-sm-3 > .row > .col-12 > .btn-group > .btn').click()
    
       cy.get('.col-12 > .btn-group > .dropdown-menu > .dropdown-menu > .ms-hover:nth-child(2) > a > .text').click()
    
       cy.get('.col-sm-3 > .row > .col-12 > .btn-group > #projetoObjetivoSelect').select('10590')
    
       cy.get('#row-acao-descricao-resultado > .col-xs-12 > .form-group > .col-sm-3 > #acao\[descricao_resultado\]').click()
    
       cy.get('.panel > .panel-body > #form-dados > .row:nth-child(10) > .col-xs-12').click()
    
       cy.get('.row > .col-xs-12 > .form-group > .col-sm-3 > #responsavel').click()
    
       cy.get('.row > .col-xs-12 > .form-group > .col-sm-3 > #responsavel').type('Rondinele')
    
       cy.get('.col-xs-12 > #controle-de-presenca-hidden > .form-group > .col-sm-3 > .form-control-static').click()
    
       cy.get('.form-group > .col-md-1 > div > .icheckbox_square-custom > .iCheck-helper').click()
    
       cy.get('.form-group > .col-md-1 > div > .icheckbox_square-custom > .iCheck-helper').click()
    
       cy.get('.form-group > .col-md-1 > div > .icheckbox_square-custom > .iCheck-helper').click()
    
       cy.get('.form-group > .col-sm-3 > .hover > .iradio_square-custom > .iCheck-helper').click()
    
       cy.get('.col-xs-12 > .form-group > .col-sm-4 > .input-group > #carga_horaria_horas').click()
    
       cy.get('.col-xs-12 > .form-group > .col-sm-4 > .input-group > #carga_horaria_horas').type('10')
    
       cy.get('.col-xs-12 > .form-group > .col-sm-4 > .input-group > #carga_horaria_minutos').click()
    
       cy.get('.col-xs-12 > .form-group > .col-sm-4 > .input-group > #carga_horaria_minutos').type('10')
    
       cy.get('.col-xs-12 > .form-group > .col-md-4 > .input-group > #data_inicio').click()
    
       cy.get('.col-xs-12 > .form-group > .col-md-4 > .input-group > #data_inicio').type('01/01/2020')
    
       cy.get('.col-xs-12 > .form-group > .col-md-4 > .input-group > #data_fim').click()
    
       cy.get('.col-xs-12 > .form-group > #todo-projeto > .icheckbox_square-custom > .iCheck-helper').click()
    
       cy.get('.form-group > .col-sm-3 > .hover > .icheckbox_square-custom > .iCheck-helper').click()
    
       cy.get('.col-xs-12 > .form-group > .col-md-4 > .input-group > #data_fim').type('30/12/2019')
    
       cy.get('#form-dados > .row:nth-child(20) > .col-xs-12 > .form-group > .col-sm-3').click()
    
       cy.get('#form-dados > .row:nth-child(20) > .col-xs-12 > .form-group > .col-sm-3').click()
    
       cy.get('.form-group > .col-sm-3 > .hover > .icheckbox_square-custom > .iCheck-helper').click()
    
       cy.get('.form-group > .col-sm-3 > .hover > .icheckbox_square-custom > .iCheck-helper').click()
    
       cy.get('#tab-dados > .panel > .panel-footer > .form-actions > .salvar-atividade').click()
    
       cy.visit('https://app.bussolasocial.com.br/atendimento/atividade/15741/editar#agenda')
    
    })
   
    it('Cadastro de Agenda de aulas', function() {

        cy.visit('https://app.bussolasocial.com.br/atendimento/atividade/15741/editar#agenda')
     
        cy.get('.form-group > .col-sm-3 > .hover > .iradio_square-custom > .iCheck-helper').click()
     
        cy.get('.form-group > .col-sm-3 > .hover > .icheckbox_square-custom > .iCheck-helper').click()
     
        cy.get('.form-group > .col-sm-3 > .hover > .icheckbox_square-custom > .iCheck-helper').click()
     
        cy.get('.form-group > .col-sm-3 > .hover > .icheckbox_square-custom > .iCheck-helper').click()
     
        cy.get('.div-data > .form-group > .col-sm-12 > .icheckbox_square-custom > .iCheck-helper').click()
     
        cy.get('.panel > .panel-body > #form-encontro > .form-actions > .btn-primary').click()
     
        cy.get('.swal2-in > .swal2-container > .swal2-modal > .swal2-confirm').click()
     
     })

     it('Cadastro de Avaliacoes', function() {

     
        cy.visit('https://app.bussolasocial.com.br/atendimento/atividade/15741/editar#agenda')
     
        cy.get('header > h1 > .row > .col-auto > .btn').click()
     
        cy.get('.row > .col-xs-6 > .form-group > div > #nome').click()
     
        cy.get('.row > .col-xs-6 > .form-group > div > #nome').type('Benedito e Tatiane Assessoria Jurídica ME')
     
        cy.get('.row > .col-xs-12 > .form-group > div > #descricao').click()
     
        cy.get('.row > .col-xs-3 > .form-group > div > #data_aplicacao').click()
     
        cy.get('.datepicker-days > .table-condensed > thead > tr > .next > .fa').click()
     
        cy.get('.datepicker-days > .table-condensed > tbody > tr:nth-child(4) > .day:nth-child(5)').click()
     
        cy.get('.row > .col-xs-3 > .form-group > div > #peso').click()
     
        cy.get('.row > .col-xs-3 > .form-group > div > #peso').type('10')
     
        cy.get('.modal-dialog > .modal-content > #form-avaliacao > .modal-footer > .btn-primary').click()
     
        cy.get('#form-avaliacao > .modal-body > .p-h-15 > .row > .col-xs-3:nth-child(2)').click()
     
        cy.get('.row > .col-xs-3 > .form-group > div > #data_aplicacao').type('19/11/2019')
     
        cy.get('.row > .col-xs-12 > .form-group > div > #descricao').click()
     
        cy.get('.modal-dialog > .modal-content > #form-avaliacao > .modal-footer > .btn-primary').click()
     
     })

     it('Cadastro de Conteúdos', function() {

     
        cy.visit('https://app.bussolasocial.com.br/atendimento/atividade/15741/editar#agenda')
     
        cy.get('.row > .col-md-12 > #menu-grupo > #li-plano > a').click()
     
        cy.get('.mt-repeater-item:nth-child(2) > .row > .col-xs-6 > .row > .col-xs-10 > .form-group > .mt-repeater-cell > .form-control').click()
     
        cy.get('.mt-repeater-item:nth-child(2) > .row > .col-xs-6 > .row > .col-xs-10 > .form-group > .mt-repeater-cell > .form-control').type('Matematica')
     
        cy.get('.mt-repeater-item:nth-child(2) > .row:nth-child(1) > .col-xs-5:nth-child(3) > .row:nth-child(1) > .col-xs-8:nth-child(2) > .row:nth-child(1) > .col-xs-6:nth-child(1) > .row:nth-child(1) > .form-group:nth-child(1) .form-control:nth-child(1)').click()
     
        cy.get('.mt-repeater-item:nth-child(2) > .row:nth-child(1) > .col-xs-5:nth-child(3) > .row:nth-child(1) > .col-xs-8:nth-child(2) > .row:nth-child(1) > .col-xs-6:nth-child(1) > .row:nth-child(1) > .form-group:nth-child(1) .form-control:nth-child(1)').type('10')
     
        cy.get('.mt-repeater-item:nth-child(2) > .row:nth-child(1) > .col-xs-5:nth-child(3) > .row:nth-child(1) > .col-xs-8:nth-child(2) > .row:nth-child(1) > .col-xs-6:nth-child(2) > .row:nth-child(1) > .form-group:nth-child(1) .form-control:nth-child(1)').click()
     
        cy.get('.mt-repeater-item:nth-child(2) > .row:nth-child(1) > .col-xs-5:nth-child(3) > .row:nth-child(1) > .col-xs-8:nth-child(2) > .row:nth-child(1) > .col-xs-6:nth-child(2) > .row:nth-child(1) > .form-group:nth-child(1) .form-control:nth-child(1)').type('10')
     
        cy.get('.panel-body > #form-plano > .form > .form-actions > .btn-primary').click()
     
        cy.visit('https://app.bussolasocial.com.br/atendimento/atividade/15741')
     
     })

   })
   