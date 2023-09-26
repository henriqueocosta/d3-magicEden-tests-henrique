describe('Cart', () => {

  beforeEach(() => {
    cy.intercept(
      'GET',
      '**/orders?sort**'
    ).as('loadNFTs')
    cy.visit('/')
    cy.wait('@loadNFTs')
    cy.wait(2000)
  })

  it('TC001 - Check if the cart is empty in the first access', () => {
    cy.checkEmptyCart()
  })

  it('TC002 - Add item to the cart', () => {
    cy.addItemToCart()
    cy.get('.tw-gap-5 > .tw-gap-x-1').should('be.visible')
  })

  it('TC003 - Remove item from the cart', () => {
    cy.addItemToCart()
    cy.get('.tw-w-12 > .tw-absolute').click()
    cy.checkEmptyCart()
  })

  it('TC004 - Open the connect to a wallet modal throught the Cart', () => {
    cy.contains('button', 'Connect wallet').click()
    cy.contains('h1', 'Connect a wallet to continue').should('be.visible')
  })

})