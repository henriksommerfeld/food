/// <reference types="Cypress" />
import { startPageTitle } from './08-cms-edit-start.test';

context('Mobile', () => {
  before(() => {
    cy.visit('/');
  });

  beforeEach(() => {
    cy.viewport('iphone-6');
  });

  const titlePostfix = ` | ${startPageTitle}`;
  const hamburgerMenuLabel = 'Hamburger menu button';

  it('Should open Published page', () => {
    const pageName = 'Publicerat';
    cy.get('nav')
      .findByLabelText(hamburgerMenuLabel)
      .click()
      .findByTestId('mobile-menu')
      .contains(pageName)
      .click()
      .url()
      .should('equal', Cypress.config().baseUrl + '/publicerat')
      .findByTestId('page-title')
      .should('have.text', pageName)
      .title()
      .should('equal', pageName + titlePostfix);
  });

  it('Should open About Me page', () => {
    const pageName = 'Om mig';
    cy.get('nav')
      .findByLabelText(hamburgerMenuLabel)
      .click()
      .findByTestId('mobile-menu')
      .contains(pageName)
      .click()
      .url()
      .should('equal', Cypress.config().baseUrl + '/om')
      .findByTestId('page-title')
      .should('have.text', pageName)
      .findByText('Kontakta mig på')
      .should('be.visible')
      .title()
      .should('equal', pageName + titlePostfix);
  });

  it('Should open Press images page', () => {
    const pageName = 'Pressbilder';
    cy.get('nav')
      .findByLabelText(hamburgerMenuLabel)
      .click()
      .findByTestId('mobile-menu')
      .contains(pageName)
      .click()
      .url()
      .should('equal', Cypress.config().baseUrl + '/pressbilder')
      .findByTestId('page-title')
      .should('have.text', pageName)
      .title()
      .should('equal', pageName + titlePostfix);
  });

  it('Start page should show more posts', () => {
    cy.visit('/', {
      onBeforeLoad: win => {
        win.sessionStorage.clear();
      },
    })
      .findAllByRole('article')
      .should('have.length', 5)
      .findByText('Visa äldre inlägg')
      .click({ force: true })
      .findAllByRole('article')
      .its('length')
      .should('be.gte', 5);
  });
});
