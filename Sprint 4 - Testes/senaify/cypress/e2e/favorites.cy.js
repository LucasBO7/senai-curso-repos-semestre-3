describe('template spec', () => {
    let searchedMusic;

    before('passes', () => {
        cy.visit('/');
    });

    it('Redirecionar para a tela de favoritos', () => {
        cy.get("[href='/Favorites']").click();
        cy.scrollTo("top");
    });

    it('Tocar música favoritada', () => {
        cy.get("[aria-label='music-item']").click();
    });
})