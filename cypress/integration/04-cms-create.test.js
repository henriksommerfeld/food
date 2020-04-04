/// <reference types="Cypress" />

context('CMS create/delete recipe', () => {
  beforeEach(() => {
    cy.viewport('macbook-13');
    cy.clearCookies();
    cy.clearLocalStorage();
  });

  it('Should create post', () => {
    cy.fixture('bara-ben').then((article) => {
      cy.visit('/admin');
      cy.findByText('Login to File System').click();

      cy.findByText('New Recept')
        .click()
        .get('#title-field-1')
        .type(article.title)
        .get('#description-field-2')
        .clear()
        .type(article.description);

      cy.findByText('Choose an image').click();

      cy.findByText('Calzone.jpg').click();

      cy.findByText('Choose selected').click();

      cy.findByLabelText('Tema för bildtext')
        .click()
        .type('{enter}')
        .trigger('input')
        .get('#servings-field-8')
        .type('4');

      cy.findByText('Add grupper av ingredienser').click();

      cy.get('#partingredientsname-field-22').type(article.ingredientsTitle);

      cy.findByText('Add ingredienslista, delmoment').click();

      cy.get('#ingredientamount-field-25').type(article.ingredientAmount);

      cy.get('#unit-field-26')
        .click()
        .type('tesked')
        .type('{enter}')
        .trigger('input');

      cy.get('#ingredientname-field-27').type(article.ingredientName);

      cy.findByText('Publish').click();

      cy.findByText('Publish now').click();

      cy.findByText('Changes saved').click();

      cy.findByText('New Recept').should('be.visible');
    });
  });

  it('Should see created post', () => {
    cy.fixture('bara-ben').then((article) => {
      cy.visit('/huvudratt');
      cy.findByText(article.title).click({ force: true });

      cy.findByText(article.title);
    });
  });

  it('Should delete created post', () => {
    cy.fixture('bara-ben').then((article) => {
      cy.visit('/admin');
      cy.findByText('Login to File System').click();

      cy.findByText(article.title).click();

      cy.findByText('Delete entry').click();
    });
  });
});
