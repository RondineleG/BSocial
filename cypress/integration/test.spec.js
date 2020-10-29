describe('Cadastro de planos',()=>
{
    beforeEach ( ( )  => 
     { 
        cy.visit(Cypress.env('prod'), {
            onBeforeLoad: win => {
              win.sessionStorage.clear();
            }
          });
          cy.logonEmail(Cypress.env("adminUser"),Cypress.env("adminUserPassword"));
  
     });

  
    it('Cadastro de planos', function() 
    {
    //    cy.get('nav > .nav > :nth-child(2) > .menu-link').click();       

    //    cy.get('#objetivo-17058 > .m-0 > .m-b-3 > .flex > .bg-branco > .row > .col-12 > .btn').click()
    
    //    cy.get('#form-objetivo-17058 > .row > .col-12:nth-child(2) > .bg-branco > .form-control').click()
    
    //    cy.get('#form-objetivo-17058 > .row > .col-12:nth-child(3) > .bg-branco > .form-control').click()
    
    //    cy.get('#form-objetivo-17058 > .row > .col-auto > .bg-branco > .row > .col-12 > .input-group > .form-control').click()
    
    //    cy.get('body > .daterangepicker:nth-child(24) > .drp-buttons > .applyBtn').click()
    
    //    cy.get('#form-objetivo-17058 > .row:nth-child(2) > .col-auto:nth-child(4) > .bg-branco:nth-child(1) > .row:nth-child(3) > .col-12:nth-child(1) > .periodo-monitoramento:nth-child(1) > .row:nth-child(1) > .col-12:nth-child(1) .fa:nth-child(1)').click()
    
    //    cy.get('#form-objetivo-17058 > .row:nth-child(2) > .col-auto:nth-child(4) > .bg-branco:nth-child(1) > .row:nth-child(3) > .col-12:nth-child(1) > .periodo-monitoramento:nth-child(1) > .row:nth-child(1) li:nth-child(3) .text:nth-child(1)').click()
    
    //    cy.get('.periodo-monitoramento > .row > .col-12 > .open > #monitoramento').select('SE')
    
    //    cy.get('.row > .col-xs-12 > #planosAcordion > .panel > .grupo-custom-collapse-titulo:nth-child(3)').click()
    
    //    cy.get('.main-content > .bg-branco > .form-cadastro-projeto > .row:nth-child(3) > .col-xs-12').click()
    
    //    cy.get('#objetivo-17059 > .m-0 > .m-b-3 > .flex > .bg-branco > .row > .col-12 > .btn').click()
    
    //    cy.get('#form-objetivo-17058 > .row > .flex-1 > .height-100 > .btn > .fas').click()
    
    //    cy.get('body > #toast-container > .toast > .toast-message').click()
    
    //    cy.get('#form-objetivo-17059 > .row > .col-12:nth-child(2) > .bg-branco > .form-control').click()
    
    //    cy.get('#form-objetivo-17059 > .row > .col-12:nth-child(3) > .bg-branco > .form-control').click()
    
    //    cy.get('#form-objetivo-17059 > .row > .col-auto > .bg-branco > .row > .col-12 > .input-group > .form-control').click()
    
    //    cy.get('body > .daterangepicker:nth-child(30) > .drp-buttons > .applyBtn').click()
    
    //    cy.get('#form-objetivo-17059 > .row:nth-child(2) > .col-auto:nth-child(4) > .bg-branco:nth-child(1) > .row:nth-child(3) > .col-12:nth-child(1) > .periodo-monitoramento:nth-child(1) > .row:nth-child(1) > .col-12:nth-child(1) .fa:nth-child(1)').click()
    
    //    cy.get('#form-objetivo-17059 > .row:nth-child(2) > .col-auto:nth-child(4) > .bg-branco:nth-child(1) > .row:nth-child(3) > .col-12:nth-child(1) > .periodo-monitoramento:nth-child(1) > .row:nth-child(1) li:nth-child(3) .text:nth-child(1)').click()
    
    //    cy.get('.periodo-monitoramento > .row > .col-12 > .open > #monitoramento').select('SE')
    
    //    cy.get('#form-objetivo-17059 > .row > .flex-1 > .height-100 > .btn > .fas').click()
    
    //    cy.get('body > #toast-container > .toast > .toast-message').click()
    
    //    cy.get('.navegacao-lateral-flex > .navegacao-lateral > ul > .li-navegacao-lateral:nth-child(5) > a').click()
    
         cy.get('nav > .nav > li:nth-child(2) > .menu-link').click();
         cy.get('.open .informacoes-internas:nth-child(1) li:nth-child(1) > a').click();

                  
         cy.url().should('contains', 'https://app.bussolasocial.com.br/projeto-novo');
            

         cy.visit('https://app.bussolasocial.com.br/projeto-novo');
         cy.get('.navbar-btn:nth-child(2)').click();
         cy.get('#nomeProjeto').click().type('6576');
         cy.get('#filtrarProjeto').click();
         cy.get('#filtroProjetoListagem').submit();
         
         cy.get('.projeto-nome').should('be.visible');
         cy.url().should('contains', '6576');
         cy.get('.projeto-nome > a').click();

         cy.url().should('contains', 'https://app.bussolasocial.com.br/projeto-novo/6576');
         cy.get('.btn-group > .btn-default:nth-child(1)').click();
         cy.url().should('contains', 'https://app.bussolasocial.com.br/projeto-novo/6576/cadastro');
         cy.get('.li-navegacao-lateral:nth-child(4) > a').click();
         cy.url().should('contains', 'https://app.bussolasocial.com.br/projeto-novo/6576/cadastro/planos');
         cy.get('.adicionar-nova-acao').click();
         cy.get('.col-12:nth-child(2) > .bg-branco > .form-control').click();
         cy.get('.col-12:nth-child(2) > .bg-branco > .form-control').type('Nova Acao');
         cy.get('.col-12:nth-child(3) .form-control').click();
         cy.get('.col-12:nth-child(3) .form-control').type('{backspace}');
         cy.get('.col-12:nth-child(3) .form-control').type('Resultado');
        
         cy.xpath('//*[@id="form-objetivo-17132"]/div/div[4]/div/div[2]/div/div/div').click().type('23/10/2020 - 18/11/2020');
         cy.get('body > .daterangepicker:nth-child(25) > .drp-buttons > .applyBtn').click()
         
 
         cy.get('.bs-caret').click();
         cy.get('li:nth-child(3) .text').click();
         cy.get('#ponto').click();
         cy.get('#ponto').type('10');
         cy.get('.salvar-icon').click();
         cy.get('#form-objetivo-17132').submit();
         

    });
});