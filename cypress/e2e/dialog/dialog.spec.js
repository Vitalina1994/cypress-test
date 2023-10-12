describe('Dialog page', ()=> {
  beforeEach(()=> {
    cy.visit('/pages/modal-overlays/dialog')
  })

  it('Dialog should display correct modal components', () => {
    cy.get('.appearance-filled').last().as('enterName')
    cy.get('@enterName').click()

    cy.get('ngx-dialog-name-prompt').as('modalWindow')
    cy.get('@modalWindow').should('be.visible')

    cy.get('ngx-dialog-name-prompt nb-card-header').as('modalWindowHeaderTitle')
    cy.get('@modalWindowHeaderTitle').should('be.visible')
    cy.get('@modalWindowHeaderTitle').should('have.text', 'Enter your name')

    cy.get('nb-card-body input').as('inputNameField')
    cy.get('@inputNameField').should('be.visible')

    cy.get('.cancel').as('cancelButton')
    cy.get('@cancelButton').should('be.visible')

    cy.get('.status-success').as('submitButton')
    cy.get('@submitButton').should('be.visible')
  })
})
