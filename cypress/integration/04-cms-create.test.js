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
        .findByText('New Recept')
        .click()
        .get('#title-field-1')
        .type(article.title)
        .get('#description-field-2')
        .clear()
        .type(article.description)
        .findByText('Choose an image')
        .click()
        .findByText('Calzone.jpg')
        .click()
        .findByText('Choose selected')
        .click()
        .findByLabelText('Tema för bildtext')
        .click()
        .type('{enter}')
        .trigger('input')
        .get('#servings-field-8')
        .type('4')
        .findByText('Add grupper av ingredienser')
        .click()
        .get('#partingredientsname-field-22')
        .type(article.ingredientsTitle)
        .findByText('Add ingredienslista, delmoment')
        .click()
        .get('#ingredientamount-field-25')
        .type(article.ingredientAmount)
        .get('#unit-field-26')
        .click()
        .type('tesked')
        .type('{enter}')
        .trigger('input')
        .get('#ingredientname-field-27')
        .type(article.ingredientName)

        .findByText('Publish')
        .click()
        .findByText('Publish now')
        .click()
        .findByText('Changes saved')
        .click()
        .findByText('New Recept')
        .should('be.visible');
    });
  });

  it('Should see created post', () => {
    cy.fixture('bara-ben').then(article => {
      cy.visit('/huvudratt')
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
