/// <reference types="cypress" />
// ***********************************************
// This example commands.ts shows you how to
// create various custom commands and overwrite
// existing commands.
//
// For more comprehensive examples of custom
// commands please read more here:
// https://on.cypress.io/custom-commands
// ***********************************************
//
//
// -- This is a parent command --
// Cypress.Commands.add('login', (email, password) => { ... })
//
//
// -- This is a child command --
// Cypress.Commands.add('drag', { prevSubject: 'element'}, (subject, options) => { ... })
//
//
// -- This is a dual command --
// Cypress.Commands.add('dismiss', { prevSubject: 'optional'}, (subject, options) => { ... })
//
//
// -- This will overwrite an existing command --
// Cypress.Commands.overwrite('visit', (originalFn, url, options) => { ... })
//
// declare global {
//   namespace Cypress {
//     interface Chainable {
//       login(email: string, password: string): Chainable<void>
//       drag(subject: string, options?: Partial<TypeOptions>): Chainable<Element>
//       dismiss(subject: string, options?: Partial<TypeOptions>): Chainable<Element>
//       visit(originalFn: CommandOriginalFn, url: string, options: Partial<VisitOptions>): Chainable<Element>
//     }
//   }
// }
Cypress.Commands.add('addUser', function(id, firstName, lastName, userName, eMail, age) {
  cy.visit('pages/tables/smart-table')

  cy.get('th.ng2-smart-actions-title.ng2-smart-actions-title-add.ng-star-inserted').as('addActionsButton')
  cy.get('@addActionsButton').click()

  cy.get('input-editor input[ng-reflect-name="id"]').type(id, {delay: 15})
  cy.get('input-editor input[ng-reflect-name="firstName"]').type(firstName, {delay: 15})
  cy.get('input-editor input[ng-reflect-name="lastName"]').type(lastName, {delay: 15})
  cy.get('input-editor input[ng-reflect-name="username"]').type(userName, {delay: 15})
  cy.get('input-editor input[ng-reflect-name="email"]').type(eMail, {delay: 15})
  cy.get('input-editor input[ng-reflect-name="age"]').type(age, {delay: 15})

  cy.get('i.nb-checkmark').as('checkmarkActionsButton')
  cy.get('@checkmarkActionsButton').click()

  cy.get('table tr:nth-child(1) td:nth-child(2)').should('have.text', id)
  cy.get('table tr:nth-child(1) td:nth-child(3)').should('have.text', firstName)
  cy.get('table tr:nth-child(1) td:nth-child(4)').should('have.text', lastName)
  cy.get('table tr:nth-child(1) td:nth-child(5)').should('have.text', userName)
  cy.get('table tr:nth-child(1) td:nth-child(6)').should('have.text', eMail)
  cy.get('table tr:nth-child(1) td:nth-child(7)').should('have.text', age)
})

Cypress.Commands.add('editUser', function(id, firstName, lastName, userName, email, age) {
  cy.visit('pages/tables/smart-table')

  cy.get('i.nb-edit').first().as('editActionsButton')
  cy.get('@editActionsButton').click()

  cy.get('input-editor input[ng-reflect-name="id"]').clear().type(id, {delay: 25})
  cy.get('input-editor input[ng-reflect-name="firstName"]').clear().type(firstName, {delay: 25})
  cy.get('input-editor input[ng-reflect-name="lastName"]').clear().type(lastName, {delay: 25})
  cy.get('input-editor input[ng-reflect-name="username"]').clear().type(userName, {delay: 25})
  cy.get('input-editor input[ng-reflect-name="email"]').clear().type(email, {delay: 25})
  cy.get('input-editor input[ng-reflect-name="age"]').clear().type(age, {delay: 20})

  cy.get('i.nb-checkmark').as('checkmarkActionsButton')
  cy.get('@checkmarkActionsButton').click()

  cy.get('table tr:nth-child(1) td:nth-child(2)').should('have.text', id)
  cy.get('table tr:nth-child(1) td:nth-child(3)').should('have.text', firstName)
  cy.get('table tr:nth-child(1) td:nth-child(4)').should('have.text', lastName)
  cy.get('table tr:nth-child(1) td:nth-child(5)').should('have.text', userName)
  cy.get('table tr:nth-child(1) td:nth-child(6)').should('have.text', email)
  cy.get('table tr:nth-child(1) td:nth-child(7)').should('have.text', age)
})
Cypress.Commands.add(
  'api',
  { prevSubject: false },
  (method, endpoint, body = null, options = {}) => {
    const requestOptions = {
      method,
      url: `https://jsonplaceholder.typicode.com/${endpoint}`,
      body,
      ...options,
    };

    if (typeof requestOptions.failOnStatusCode === 'undefined') {
      requestOptions.failOnStatusCode = true
    }

    return cy.request(requestOptions)
  },
);
