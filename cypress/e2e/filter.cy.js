describe('Filter', () => {

  const filterName = 'neymarjunior10.dao'

  beforeEach(() => {
    cy.visit('/')
  })

  it('TC003 - Filter by Ending', () => {
    cy.selectEndingFilter(filterName)

    cy.contains('div', `Ending: ${filterName}`).should('be.visible')
  })

  it('TC004 - Clear All Filters', () => {
    cy.selectEndingFilter(filterName)

    cy.contains('button', 'Clear All').click()
    cy.contains('div', `Ending: ${filterName}`).should('not.exist')
  })

})