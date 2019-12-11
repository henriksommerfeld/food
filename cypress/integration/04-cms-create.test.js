/// <reference types="Cypress" />

context('CMS create/delete blog post', () => {
  beforeEach(() => {
    cy.viewport('macbook-13');
    cy.clearCookies();
    cy.clearLocalStorage();
  });

  it('Should create post', () => {
    cy.fixture('bara-ben').then(article => {
      cy.visit('/admin')
        .findByText('Login to File System')
        .click()
        .findByText('New Bloggpost')
        .click()
        .get('#title-field-1')
        .clear()
        .type(article.title)
        .get('[data-slate-editor="true"]')
        .click()
        .type(article.body)
        .findByText('Publish')
        .click()
        .findByText('Publish now')
        .click()
        .findByText('Changes saved')
        .click()
        .findByText('New Bloggpost')
        .should('be.visible');
    });
  });

  it('Should see created post', () => {
    cy.fixture('bara-ben').then(article => {
      cy.visit('/')
        .findByText(article.title)
        .click()
        .findByText(article.title);
    });
  });

  it('Should delete created post', () => {
    cy.fixture('bara-ben').then(article => {
      cy.visit('/admin')
        .findByText('Login to File System')
        .click()
        .findByText(article.title)
        .click()
        .findByText('Delete entry')
        .click();
    });
  });
});
