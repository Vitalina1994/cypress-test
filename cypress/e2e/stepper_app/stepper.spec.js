describe('Stepper page', () => {
  it ('should find text on the page 1', () => {
    cy.visit('/pages/layout/stepper')
    cy.get("h3").should('have text', 'Step content #1')
  });

  it ('should find text on the page 2', () => {
    cy.visit('/pages/layout/stepper')

    cy.get('h3').should('have text', 'Step content #1')

  });
})
