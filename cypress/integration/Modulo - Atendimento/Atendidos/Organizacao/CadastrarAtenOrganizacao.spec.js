describe.skip('Cadastrar novo Atendico - Organização', function() {

    before(function()
    {
        cy.login();
    });

      
    it('Dados cadastrais', function() {
       
           cy.viewport(1366, 625)
        
           cy.visit('https://app.bussolasocial.com.br/')
        
           cy.get('#bs-example-navbar-collapse-1 > nav > .nav > li:nth-child(3) > .menu-link').click()
        
           cy.get('.dropdown-menu > .dropdown-menu-caixa-submenu > .informacoes-wrapper > .informacoes-internas > .btn:nth-child(4)').click()
        
           cy.visit('https://app.bussolasocial.com.br/atendimento/individuo/juridica/cadastro')
        
           cy.get('.col-xs-12 > .container-ajuda > .form-group > div > #pessoa\[nome\]').click()
        
           cy.get('.col-xs-12 > .container-ajuda > .form-group > div > #pessoa\[nome\]').type('Wiiddo')
        
           cy.get('.col-xs-12 > .container-ajuda > .form-group > div > #juridica\[razao_social\]').click()
        
           cy.get('.col-xs-12 > .container-ajuda > .form-group > div > #juridica\[razao_social\]').type('Levrai Tec')
        
           cy.get('.col-xs-6 > .container-ajuda > .form-group > div > #pessoa\[matricula\]').click()
        
           cy.get('.col-xs-6 > .container-ajuda > .form-group > div > #pessoa\[matricula\]').type('914.753.223')
        
           cy.get('.row > .col-xs-6 > .form-group > div > #pessoa\[cnpj\]').click()
        
           cy.get('.row > .col-xs-6 > .form-group > div > #pessoa\[cnpj\]').type('93.967.574/0001-14')
        
           cy.get('.row > .col-xs-6 > .form-group > .btn-group > .btn').click()
        
           cy.get('.btn-group > .dropdown-menu > .dropdown-menu > li:nth-child(4) > .opt').click()
        
           cy.get('.row > .col-xs-6 > .form-group > .btn-group > #pais_nacionalidade_id').select('30')
        
           cy.get('.row > .col-xs-6 > .form-group > div > #juridica\[data_fundacao\]').click()
        
           cy.get('.row > .col-xs-6 > .form-group > div > #juridica\[data_fundacao\]').type('09/12/2015')
        
           cy.get('.row > .col-xs-6 > .form-group > div > #juridica\[site\]').click()
        
           cy.get('.row > .col-xs-6 > .form-group > div > #juridica\[site\]').type('www.empresar.com.br')
        
           cy.get('.row:nth-child(3) > .col-xs-6:nth-child(1) > .form-group > div > .form-control').click()
        
           cy.get('.row:nth-child(3) > .col-xs-6:nth-child(1) > .form-group > div > .form-control').type('atendimento@beneditoetatianeassessoriajuridicame.com.br')
        
           cy.get('.col-sm-8 > .form-group > .row > .col-sm-4 > .form-control').click()
        
           cy.get('.col-sm-8 > .form-group > .row > .col-sm-4 > .form-control').type('(33) 3333-3335')
        
           cy.get('div > .checkbox > .hover > .icheckbox_square-custom > .iCheck-helper').click()
        
           cy.get('.row > .col-sm-4 > .form-group > div > #pessoa\[contatos\]\[nome\]\[\]').click()
        
           cy.get('.row > .col-sm-4 > .form-group > div > #pessoa\[contatos\]\[nome\]\[\]').type('Benedito e Tatiane Assessoria Jurídica ME')
        
           cy.get('.col-sm-8 > .form-group > .row > .col-sm-6 > .form-control').click()
        
           cy.get('.col-sm-8 > .form-group > .row > .col-sm-6 > .form-control').type('(33) 3333-3335')
        
           cy.get('div > .checkbox > .hover > .icheckbox_square-custom > .iCheck-helper').click()
        
           cy.get('.form-group > div > .btn-group > .btn > .filter-option').click()
        
           cy.get('.dropdown-menu > .dropdown-menu:nth-child(1) > li:nth-child(5) > a > .text').click()
        
           cy.get('.col-xs-4 > .form-group > div > .btn-group > #pessoa\[forma_acesso_id\]').select('451')
        
           cy.get('.col-xs-12 > .form-group > div > .checkbox > .hover').click()
        
           cy.get('.col-xs-8 > .container-ajuda > .form-group > div > #pessoa\[observacoes\]').click()
        
           cy.get('.panel > .panel-body > #form-dados-pessoais > .form-actions > .btn-primary').click()
        
           cy.visit('https://app.bussolasocial.com.br/atendimento/individuo/juridica/328801/editar#dados-familia')
        
        })
       
    it('Cadastro de equipe', function() {

            cy.viewport(1366, 625)
         
            cy.visit('https://app.bussolasocial.com.br/atendimento/individuo/juridica/328801/editar#dados-familia')
         
            cy.get('.col-12 > nav > #menu-individuo > li > #a-tab-dados-familia').click()
         
            cy.get('.form-body > .row > .col-sm-10 > .dropdown > .btn').click()
         
            cy.get('.col-sm-10 > .dropdown > .dropdown-menu > li:nth-child(2) > a').click()
         
            cy.get('.row > .col-xs-6 > .form-group > div > #pessoa_nome').click()
         
            cy.get('.row > .col-xs-6 > .form-group > div > #pessoa_nome').type('ROberto VErde')
         
            cy.get('.row > .col-xs-3 > .form-group > div > #cargo').click()
         
            cy.get('.row > .col-xs-3 > .form-group > div > #cargo').type('Gestor')
         
            cy.get('.form-body > .row > .col-xs-8 > .row > .col-xs-3:nth-child(3)').click()
         
            cy.get('.col-xs-3:nth-child(3) > .form-group > div > .btn-group > .btn > .filter-option').click()
         
            cy.get('.col-xs-3:nth-child(3) > .form-group > div > .btn-group > .dropdown-menu > .dropdown-menu > li:nth-child(2) > a > .text').click()
         
            cy.get('.col-xs-3 > .form-group > div > .btn-group > #tipo_responsavel').select('1')
         
            cy.get('.row > .col-xs-4 > div > .input-group > #fisica_data_nascimento').click()
         
            cy.get('.row > .col-xs-4 > div > .input-group > #fisica_data_nascimento').type('12/12/2010')
         
            cy.get('.form-group > div > .hover > .iradio_square-custom > .iCheck-helper').click()
         
            cy.get('.row > .col-xs-3 > .form-group > div > #documento\[cpf\]').click()
         
            cy.get('.row > .col-xs-3 > .form-group > div > #documento\[cpf\]').type('1-23')
         
            cy.get('.row > .col-xs-3 > .form-group > div > #documento\[cpf\]').click()
         
            cy.get('.row > .col-xs-3 > .form-group > div > #documento\[cpf\]').click()
         
            cy.get('.row > .col-xs-3 > .form-group > div > #documento\[cpf\]').click()
         
            cy.get('.row > .col-xs-3 > .form-group > div > #documento\[cpf\]').click()
         
            cy.get('.row > .col-xs-3 > .form-group > div > #documento\[cpf\]').click()
         
            cy.get('.row > .col-xs-3 > .form-group > div > #documento\[cpf\]').type('199.615.680-28')
         
            cy.get('.form-group > div > .row > .col-xs-6 > #rg').click()
         
            cy.get('.row > .col-xs-12 > .form-group > div > #pessoa\[observacoes\]').click()
         
            cy.get('.row > .col-xs-12 > .form-group > div > #pessoa\[observacoes\]').type('is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrys standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not o')
                     
         })
    
     it('Cadastrar endereco', function() {

            cy.viewport(1366, 625)
         
            cy.visit('https://app.bussolasocial.com.br/atendimento/individuo/juridica/328801/editar#dados-familia')
         
            cy.get('.col-12 > nav > #menu-individuo > li > #a-tab-dados-domicilio').click()
         
            cy.get('.row > .col-xs-12 > .form-group > .p-l-none > .m-r-10').click()
         
            cy.get('.row > .col-xs-12 > .form-group > .p-l-none > .m-r-10').type('88370-34')
         
            cy.get('.col-xs-3 > .form-group > div > .btn-group > #estado_id').select('16')
         
            cy.get('.row > .col-xs-12 > .form-group > .p-l-none > .m-r-10').type('88370-34')
         
            cy.get('.col-xs-3:nth-child(2) > .form-group > div > .btn-group > .btn > .filter-option').click()
         
            cy.get('.cidade > .dropdown-menu > .dropdown-menu > li:nth-child(8) > a').click()
         
            cy.get('.col-xs-3 > .form-group > div > .btn-group > #cidade_id').select('5143')
         
            cy.get('.row > .col-xs-3 > .form-group > div > #bairro').click()
         
            cy.get('.row > .col-xs-3 > .form-group > div > #bairro').type('Jardim Atlântico')
         
            cy.get('.row > .col-xs-6 > .form-group > div > #logradouro').click()
         
            cy.get('.row > .col-xs-6 > .form-group > div > #logradouro').type('Servidão Nilton Batista da Cunha')
         
            cy.get('.row > .col-xs-3 > .form-group > div > #numero').click()
         
            cy.get('.row > .col-xs-3 > .form-group > div > #numero').type('505')
         
            cy.get('.row > .col-xs-3 > .form-group > div > #complemento').click()
         
            cy.get('.row > .col-xs-3 > .form-group > div > #complemento').type('casa b')
         
            cy.get('.row > .col-xs-6 > .form-group > div > #referencia').click()
         
            cy.get('.row > .col-xs-6 > .form-group > div > #referencia').type('Milium')
         
            cy.get('.panel > .panel-body > #form-dados-domicilio > .form-actions > .btn-primary').click()
         
            cy.get('.row > .col-xs-12 > .form-group > .p-l-none > .m-r-10').click()
         
            cy.get('.row > .col-xs-12 > .form-group > .p-l-none > .m-r-10').type('88370-340')
         
            cy.get('.row > .col-xs-3 > .form-group > div > #complemento').click()
         
            cy.get('.row > .col-xs-3 > .form-group > div > #complemento').type('casa b')
         
            cy.get('.panel > .panel-body > #form-dados-domicilio > .form-actions > .btn-primary').click()
         
         })
   })
   