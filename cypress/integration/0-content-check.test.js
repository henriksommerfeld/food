/// <reference types="Cypress" />

/* When running the other tests, the markdown files are updated with test data.
   To avoid accidentally committing those changes when running tests locally and trashing the content, 
   the tests in this file exist to capture such a misstake when run in CI (GitHub Actions)
*/

context('Content check', () => {
  it(`Calzone page should contain sample text`, () => {
    cy.visit('/calzone-lchf')
      .get('h1')
      .should('have.text', 'Calzone (LCHF)')
      .get('h2:first')
      .should('have.text', 'Redskap');

    cy.findByText('Blanda alla smetens ingredienser i en bunke').should(
      'be.visible'
    );
  });
});
