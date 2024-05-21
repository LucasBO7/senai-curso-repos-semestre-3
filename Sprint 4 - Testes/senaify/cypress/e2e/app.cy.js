describe('template spec', () => {
  // Passos que ele executará
  it('passes', () => {
    cy.visit('/');
  });

  it('passes', () => {
    cy.get("[aria-label='title-head']");
    // Valida se existe o texto 'Good morning'
    cy.get("[aria-label='title-head']").should("contain", "Good morning");
  });

  it('Verificar se tem uma lista com as playlists exibidas', () => {
    cy.wait(2000);
    // have.length.greaterThan --> se há algum recurso e este recurso for maior que 0
    cy.get("[aria-label='playlist-item']").should("have.length.greaterThan", 0);
  });

  it("Clicar em uma opção de playlist e listar suas músicas", () => {
    cy.get("[aria-label='playlist-item']").eq(3).click();
    cy.wait(2000);
    cy.get("[aria-label='music-item']").should("have.length.greaterThan", 0);
  });

  it("Clicar em uma opção de playlist e listar suas músicas", () => {
    cy.get("[aria-label='music-item']").eq(3).click();
    cy.wait(1000);
    cy.get("[aria-label='music-item']").should("have.length.greaterThan", 0);
  });

  it("Clicar em uma opção de playlist e listar suas músicas", () => {
    cy.get("[aria-label='music-item']").contains("Vamo de Pagodin").click();
    cy.scrollTo("top");
  });
})