describe('Filter', () => {

  const categoryFilter = '100k Club'
  const endingFilter = 'neymarjunior10.dao'

  beforeEach(() => {
    cy.visit('/')
  })

  it('TC005 - Filter by Category', () => {
    cy.selectCategoryFilter(categoryFilter)
    cy.contains('div', `Category: ${categoryFilter}`).should('be.visible')
  })

  it('TC006 - Filter by Ending using the search function', () => {
    cy.selectEndingFilter(endingFilter)
    cy.contains('div', `Ending: ${endingFilter}`).should('be.visible')
  })

  it('TC007 - Clear All Filters', () => {
    cy.selectEndingFilter(endingFilter)
    cy.selectCategoryFilter(categoryFilter)
    cy.contains('button', 'Clear All').click()
    cy.contains('div', `Ending: ${categoryFilter}`).should('not.exist')
  })
})