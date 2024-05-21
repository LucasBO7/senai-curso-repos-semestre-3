describe('template spec', () => {
  let searchedMusic;

  before('passes', () => {
    cy.visit('/');
  });

  it('Redirecionar para a tela de busca', () => {
    // [] --> indicam que em seu interior referencia-se à um código css
    cy.get("[href='/Search']").click();
    cy.scrollTo("top");
  });

  it('Procurando uma música específica', () => {
    // [] --> indicam que em seu interior referencia-se à um código css
    cy.get("[data-testid='campoBusca']").type("Melhor Agora");

    cy.get("[aria-label='music-item'").should("have.length.greaterThan", 0);
  });

  it('Clique na música desejada', () => {
    // cy.get("[aria-label='music-item']").contains(/^(Filipe Ret)/i).click();

    searchedMusic = cy.get("[aria-label='music-item']").contains(/^(Filipe Ret)/i);
    searchedMusic.click();
  });

  it('Clicar no curtir da música', () => {
    if (searchedMusic) {
      searchedMusic.then((item) => {
        item.get("[data-testid='icon-button']").first().click();
      });
    }
  });
})