/// <reference types="Cypress" />

const samplePost = {
  title: 'Isabel deltar i kvällens Uppdrag Granskning',
  url: '/2012/04/18/isabel-sommerfeld-deltar-i-kvallens-uppdrag-granskning',
};

context('CMS Blog Post Edit', () => {
  before(() => {
    cy.visit(samplePost.url);
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

  it('Should login to CMS', () => {
    cy.findByText('Login to File System')
      .click()
      .get('#title-field-1')
      .should('have.value', samplePost.title);
  });

  it('Should edit post', () => {
    cy.get('#title-field-1')
      .should('have.value', samplePost.title)
      .type('🎈')
      .findByText('Publish')
      .click()
      .findByText('Publish now')
      .click()
      .findByText('Changes saved')
      .click()
      .findByText('New Bloggpost')
      .should('be.visible');

    cy.visit(samplePost.url).then(() => {
      cy.findByText(samplePost.title + '🎈').should('be.visible');
    });
  });
});
