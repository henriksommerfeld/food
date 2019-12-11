/// <reference types="Cypress" />

export const startPageTitle = '🏆🏆🏆';
const samplePage = {
  url: '/',
};

context('CMS Start Page Edit', () => {
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

  const titleSelector = '#heading-field-2';

  it('Should login to CMS', () => {
    cy.findByText('Login to File System')
      .click()
      .get(titleSelector)
      .should('be.visible');
  });

  const subHeadingSelector = '#subheading-field-3';
  const newSubHeading = '☕🎂☕';

  it('Should edit page', () => {
    cy.get(titleSelector)
      .should('be.visible')
      .clear()
      .type(startPageTitle)
      .root()
      .get(subHeadingSelector)
      .clear()
      .type(newSubHeading)
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
        .should('have.text', startPageTitle)
        .should('be.visible');

      cy.get('h2')
        .should('have.text', newSubHeading)
        .should('be.visible');

      cy.get('title').should('have.text', startPageTitle);

      cy.get('meta[property="og:title"]').should(
        'have.attr',
        'content',
        startPageTitle
      );
    });
  });
});
