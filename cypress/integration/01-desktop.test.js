/// <reference types="Cypress" />

context('Desktop', () => {
  before(() => {
    cy.visit('/');
  });

  beforeEach(() => {
    cy.viewport('macbook-15');
  });

  it('Should open Breakfast page', () => {
    const pageName = 'Frukost';
    cy.findByText(pageName)
      .click()
      .url()
      .should('equal', Cypress.config().baseUrl + '/frukost')
      .get('h1')
      .should('have.text', pageName)
      .title()
      .should('equal', `${pageName} | Recept`);

    cy.findByTestId('category-recepies').its('length').should('be.gt', 0);
  });
});
