describe('Cypress Docs Walkthrough', () => {
// Most of the code here is from the cypress guide on their
// https://docs.cypress.io/guides/getting-started/writing-your-first-test.html#Add-a-test-file
// with a bit extra to cement understanding

    it('Does not do much!', () => {
      expect(true).to.equal(true)
    })

    it('Deliberate fail', () => {
      expect(true).to.equal(false)
    })

    it('Visits the Kitchen Sink', () => {
        cy.visit('https://example.cypress.io')  
    })
  
    it('finds and clicks the content "type"', () => {
        cy.visit('https://example.cypress.io')
    
        cy.contains('type').click()

        // Should be on a new URL which includes '/commands/actions'
        cy.url().should('include', '/commands/actions')

        // Get an input, type into it and verify that the value has been updated
        cy.get('.action-email')
        .type('fake@email.com')
        .should('have.value', 'fake@email.com')
      })
})
