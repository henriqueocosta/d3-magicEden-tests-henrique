//----------- Cart commands ------------------------//
Cypress.Commands.add('addItemToCart', () => {
    cy.get('img[class*="NFTMedia_media__UTjHH"]').eq(0).click()
})

Cypress.Commands.add('checkEmptyCart', () => {
    cy.contains('span', '(Cart is empty)')
})


//----------- Filter commands -----------------------//
Cypress.Commands.add('selectCategoryFilter', (categoryFilter) => {
    cy.intercept(
        '**marketplaceFilter**',
        'GET').as('marketPlaceFilterRequest')
    cy.contains('div', 'Category').click()
    cy.contains('span', categoryFilter).parent().click()
    cy.wait('@marketPlaceFilterRequest')
})

Cypress.Commands.add('selectEndingFilter', (endingFilter) => {
    cy.intercept(
        '**marketplaceFilter**',
        'GET').as('marketPlaceFilterRequest')
    cy.contains('div', 'Ending').click()
    cy.get('input[class*="tw-outline-none"]').eq(0).type(endingFilter)
    cy.contains('span', endingFilter).parent().click()
    cy.wait('@marketPlaceFilterRequest')
})


//----------- Search commands -----------------------//
Cypress.Commands.add('searchForItem', (text) => {
    cy.intercept(
        'GET',
        'https://polygon-api.magiceden.io/v2/xc/collections/polygon/**'
        ).as('loadSearch')
      cy.get('input[placeholder="Search token id"]').eq(1).type(text)
      cy.wait('@loadSearch')
})
