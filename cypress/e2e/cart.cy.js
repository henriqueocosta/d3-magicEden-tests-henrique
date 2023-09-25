describe('Cart', () => {

  beforeEach(() => {
    cy.visit('/')
  })

  it('TC005 - Check if the cart is empty', () => {
    cy.get('.tw-mt-14').find('span[class="tw-mx-auto"]').should('have.text', '(Cart is empty)')
  })

  it('TC006 - Add item to the cart', () => {
    cy.get('') 
  })

})