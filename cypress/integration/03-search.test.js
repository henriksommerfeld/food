/// <reference types="Cypress" />

context('Search', () => {
  before(() => {
    cy.visit('/');
  });

  beforeEach(() => {
    cy.viewport('macbook-13');
  });

  const keyword = 'calzone';
  const expectedPost = {
    title: 'Calzone (LCHF)',
    url: '/calzone-lchf',
  };

  it('Should open search results', () => {
    cy.findByLabelText('Ange dina sökord här...').type(keyword);

    cy.findByTestId('search-results')
      .contains(`recept för sökningen ${keyword}`)
      .should('be.visible');
  });

  it('Should find expected post', () => {
    cy.findByText(expectedPost.title)
      .click({ force: true })
      .url()
      .should('equal', Cypress.config().baseUrl + expectedPost.url);

    cy.findByTestId('search-results').should('not.exist');
  });

  it('Should have expected tag', () => {
    const tag = 'LCHF';
    const tagsUrl = `${Cypress.config().baseUrl}/taggar/${encodeURI(
      tag.toLowerCase()
    )}`;
    cy.url().should('equal', Cypress.config().baseUrl + expectedPost.url);

    cy.findByText(tag)
      .click({ force: true })
      .url()
      .should('equal', tagsUrl);

    cy.findByText('Se alla taggar').should('be.visible');
  });

  it('Should show previous search when navigating back', () => {
    cy.go('back')
      .url()
      .should('equal', Cypress.config().baseUrl + expectedPost.url);

    cy.findByTestId('search-results')
      .should('not.exist')
      .go('back')
      .url()
      .should('equal', Cypress.config().baseUrl + '/');
  });

  it('Should close search on close button click', () => {
    cy.findByLabelText('Stäng sökresultatet').click();

    cy.findByTestId('search-results').should('not.exist');
  });

  it('Searchbox should be cleared', () => {
    cy.findByLabelText('Ange dina sökord här...').then(element => {
      expect(element.text()).to.equal('');
    });
  });
});
