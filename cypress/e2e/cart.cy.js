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

  it('TC005 - Check if the cart is empty in the first access', () => {
    cy.get('.tw-mt-14').find('span[class="tw-mx-auto"]').should('have.text', '(Cart is empty)')
  })

  it('TC006 - Add item to the cart', () => {
    cy.addItemToCart()

    cy.get('.tw-gap-5 > .tw-gap-x-1').should('be.visible')
  })

  it('TC007 - Remove item from the cart', () => {
    cy.addItemToCart()

    cy.get('.tw-w-12 > .tw-absolute').click()
    cy.get('.tw-mt-14').find('span[class="tw-mx-auto"]').should('have.text', '(Cart is empty)')
  })

  it('TC008 - Open the connect to a wallet modal throught the Cart', () => {
    cy.contains('button', 'Connect wallet').click()
    cy.contains('h1', 'Connect a wallet to continue').should('be.visible')
  })

})