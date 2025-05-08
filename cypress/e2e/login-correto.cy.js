describe('Página de login', () => {
    beforeEach(() => {
        cy.visit('https://adopet-frontend-cypress.vercel.app/');
        cy.get('[data-test="login-button"]').click();
    })
    it('Validar os textos apresentados na tela de login', () => {
        cy.contains('Já tem conta? Faça seu login:').should('be.visible');
        cy.contains('E-mail').should('be.visible');
        //cy.contains('Insira seu email').should('be.visible');
        cy.contains('Senha').should('be.visible');
        //cy.contains('Insira sua senha').should('be.visible');
    })
    it('Devemos preencher os campos do login corretamente e autenticar o usuário na página', () => {
        cy.get('[data-test="input-loginEmail"]').type('thaiss.rodriguess@icloud.com');
        cy.get('[data-test="input-loginPassword"]').type('Senha123');
        cy.get('[data-test="submit-button"]').click();
        cy.contains('Olá!Veja os amigos disponíveis para adoção!').should('be.visible');
    })

})