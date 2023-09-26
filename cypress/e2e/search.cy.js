describe('Search', () => {

  const existentItem = '.dao'
  const nonExistentItem = 'gatoCachorro'

  beforeEach(() => {
    cy.visit('/')
  })

  it('TC001 - Search for a valid item', () => {
    cy.searchForItem(existentItem)
    cy.get('div[class="tw-truncate"]').eq(0).should('contain', existentItem)
  })

  it('TC002 - Search for an item that does not exists', () => {
    cy.searchForItem(nonExistentItem)
    cy.contains("It seems there’s no item you’re looking for. Give it another shot!").should('be.visible')
  })

})