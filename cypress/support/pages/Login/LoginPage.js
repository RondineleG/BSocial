let el = require('./LoginPageElements').ELEMENTS;

class Login 
{
    abrirUrl() 
    {
        cy.visit(Cypress.env('prod'));
    }

    preencherDadosLogin() 
    {
        cy.get(el.email).type(Cypress.env('email'));

        cy.get(el.senha).type(Cypress.env('senha'));

        cy.get(el.submit).submit();
        
    }
    
    preencherEmail(email)
    {
        cy.get(el.email).type(email)
    }

    preencherSenha(senha)
    {
        cy.get(el.senha).type(senha)
    }
   
    clickButtonEntrar() 
    {
        cy.get(el.submit).submit()
    }

    mensagemDeErro()
    {
        return cy.get(el.mensagem)
                 .should('be.visible')
                 .should('contain', 'As informações de login não foram encontradas.');
    }
    

}

export default new Login();