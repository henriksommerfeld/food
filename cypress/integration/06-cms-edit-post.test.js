/// <reference types="Cypress" />

const samplePost = {
  title: 'Calzone (LCHF)',
  url: '/calzone-lchf',
};

context('CMS Recipe Edit', () => {
  before(() => {
    cy.visit(samplePost.url);
  });

  beforeEach(() => {
    cy.viewport('macbook-13');
  });

  it('Should be possible to enter edit mode', () => {
    cy.findByTitle('Redigera sidan')
      .invoke('attr', 'href')
      .then((href) => {
        cy.visit(href);
      });
  });

  it('Should login to CMS', () => {
    cy.findByText('Login to File System').click();

    cy.findByLabelText('Titel').should('have.value', samplePost.title);
  });

  it('Should edit post', () => {
    cy.findByLabelText('Titel')
      .should('have.value', samplePost.title)
      .type('🍕');

    cy.findByText('Publish').click();

    cy.findByText('Publish now').click();

    cy.findByText('Changes saved').click();

    cy.findByText('New Recept').should('be.visible');

    cy.visit(samplePost.url).then(() => {
      cy.findByText(samplePost.title + '🍕').should('be.visible');
    });
  });
});
