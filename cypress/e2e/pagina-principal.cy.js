describe('Home Page', () => {
    beforeEach(() => {
        cy.visit('https://adopet-frontend-cypress.vercel.app/');
    })
    it('Validação do título da Home', () => {
        cy.title().should('eq', 'AdoPet');
    })
    it('Validação do texto "Quem ama adota!"', () => {
        cy.contains('Quem ama adota!').should('be.visible');
    })
    it('Validação do texto "Adotar pode mudar uma vida. Que tal buscar seu novo melhor amigo hoje? Vem com a gente!"', () => {
        cy.contains('Adotar pode mudar uma vida. Que tal buscar seu novo melhor amigo hoje? Vem com a gente!').should('be.visible');
    })
    it('Validação de login correto pelo botão de mensagem no header', () => {
        cy.get('.header__message').click();
        cy.get('[data-test="input-loginEmail"]').type('thaiss.rodriguess@icloud.com');
        cy.get('[data-test="input-loginPassword"]').type('Senha123');
        cy.get('[data-test="submit-button"]').click();
        cy.contains('Olá!Veja os amigos disponíveis para adoção!').should('be.visible');
    })
})