/// <reference types="Cypress" />

/* When running the other tests, the markdown files are updated with test data.
   To avoid accidentally committing those changes when running tests locally and trashing the content, 
   the tests in this file exist to capture such a misstake when run in CI (GitHub Actions)
*/

context('Content check', () => {
  it(`Start page should contain Isabel's name`, () => {
    cy.visit('/')
      .get('h1')
      .should('have.text', 'Isabel Sommerfeld');
  });

  it(`Published page should contain sample link`, () => {
    cy.visit('/publicerat')
      .findByTestId('published-text')
      .get('h2')
      .contains('2009')
      .findByTestId('published-text')
      .contains('Protester mot nedläggningen av vitryska sändningar');
  });

  it(`About page should contain sample text`, () => {
    cy.visit('/om')
      .get('h1')
      .should('have.text', 'Om mig')
      .get('h2:first')
      .should('have.text', 'Kontakta mig på')
      .findByTestId('about-me-text')
      .contains('jurist');
  });

  it(`Press images page should contain sample text`, () => {
    cy.visit('/pressbilder')
      .get('h1')
      .should('have.text', 'Pressbilder')
      .get('main a:first')
      .should('have.attr', 'download')
      .root()
      .get('main a:first')
      .should('have.text', 'Ladda ner');
  });
});
