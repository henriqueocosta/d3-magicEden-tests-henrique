describe('Filter', () => {

  const categoryFilter = '100k Club'
  const endingFilter = 'neymarjunior10.dao'

  beforeEach(() => {
    cy.intercept(
      'GET',
      '**20&marketplaceFilter=**').as('filterLoad')
    cy.visit('/')
    cy.wait('@filterLoad')
  })

  it('TC005 - Collapse filters bar', () => {
    cy.contains('div', 'Ending').should('be.visible')
    cy.get(':nth-child(1) > .tw-text-lg').click()
    cy.contains('div', 'Ending').should('not.be.visible')
  })

  it('TC006 - Filter by Category', () => {
    cy.selectCategoryFilter(categoryFilter)
    cy.contains('div', `Category: ${categoryFilter}`).should('be.visible')
  })

  it('TC007 - Filter by Ending using the search function', () => {
    cy.selectEndingFilter(endingFilter)
    cy.contains('div', `Ending: ${endingFilter}`).should('be.visible')
  })

  it('TC008 - Clear All Filters', () => {
    cy.selectEndingFilter(endingFilter)
    cy.selectCategoryFilter(categoryFilter)
    cy.contains('button', 'Clear All').click()
    cy.contains('div', `Ending: ${categoryFilter}`).should('not.exist')
  })
})