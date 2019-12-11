/// <reference types="Cypress" />
import { startPageTitle } from './08-cms-edit-start.test';

const samplePage = {
  url: '/om',
};

context('CMS About Page Edit', () => {
  before(() => {
    cy.visit(samplePage.url);
    window.localStorage.setItem('cookies-accepted', true);
  });

  beforeEach(() => {
    cy.viewport('macbook-13');
  });

  it('Should be possible to enter edit mode', () => {
    cy.findByTitle('Redigera sidan')
      .invoke('attr', 'href')
      .then(href => {
        cy.visit(href);
      });
  });

  const mainTextSelector = '[contenteditable="true"]';
  const mainText = 'Små grodorna, små grodorna är lustiga att se.';

  it('Should login to CMS', () => {
    cy.findByText('Login to File System')
      .click()
      .get(mainTextSelector)
      .should('be.visible');
  });

  const title = 'Om mig';
  const pageTitle = `${title} | ${startPageTitle}`;

  it('Should edit page', () => {
    cy.get(mainTextSelector)
      .should('be.visible')
      .clear()
      .type(mainText)
      .findByText('Publish')
      .click()
      .findByText('Publish now')
      .click()
      .findByText('Changes saved')
      .click()
      .get('h1')
      .should('be.visible')
      .should('have.text', 'Sidor');

    cy.visit(samplePage.url).then(() => {
      cy.get('h1')
        .should('have.text', title)
        .should('be.visible');

      cy.get('title').should('have.text', pageTitle);

      cy.get('meta[property="og:title"]').should(
        'have.attr',
        'content',
        pageTitle
      );

      cy.findByTestId('about-me-text').should('have.text', mainText);
    });
  });
});
