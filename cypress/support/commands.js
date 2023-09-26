// ***********************************************
// This example commands.js shows you how to
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

Cypress.Commands.add('selectEndingFilter', (filterName) => {
    cy.intercept(
        '**marketplaceFilter**',
        'GET').as('marketPlaceFilterRequest')
    cy.contains('div', 'Ending').click()
    cy.contains('span', filterName).parent().click()
    cy.wait('@marketPlaceFilterRequest')
})

Cypress.Commands.add('searchForItem', (text) => {
    cy.intercept(
        'GET',
        'https://polygon-api.magiceden.io/v2/xc/collections/polygon/**'
        ).as('loadSearch')
      cy.get('input[placeholder="Search token id"]').eq(1).type(text)
      cy.wait('@loadSearch')
})

Cypress.Commands.add('addItemToCart', () => {
    cy.get(':nth-child(1) > :nth-child(1) > .tw-p-0 > .tw-flex-auto > .tw-rounded-xl > .tw-cursor-pointer > .NFTMedia_media__UTjHH').click()
})