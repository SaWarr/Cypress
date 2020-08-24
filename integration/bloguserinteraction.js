describe('User interaction suite', () => {
    context('Theoretical blog site based on Indi Publisher 2 wordpress theme, reader side', () => {
        
        beforeEach(() => {
            cy.log('I run before each test')
            cy.visit('https://blogsite.com')
          })

        it('Leaves a comment on a post without navigating to the article', () => {
            // Going with how I would expect a user to interact
            // in terms of navigating the first page 
            cy.contains('Leave a comment').click()
    
            // Should be on a new URL which includes '#respond'
            cy.url().should('include', '#respond')
    
            // Get the comment input, type into it and verify that the value has been updated
            cy.get('input[id="comment"]')
            .should('have.placeholder', 'Enter your comment here...')
            .click()
            .type('Lorem Ipsum')
            .should('have.value', 'Lorem Ipsum')

            // Get the email input, type into it, verify
            cy.get('input[id="email"]')
            .click()
            .type('sam@email.com')
            .should('have.value', 'sam@email.com')

            // Get the name input, type into it, verify
            cy.get('input[id="author"]')
            .click()
            .type('Sam Warren')
            .should('have.value', 'Sam Warren')

            // Click Post Comment button. verify returned to main page
            cy.contains('Post Comment').click()
            cy.url().should('eq','https://blogsite.com')

          })

          it('Likes and then unlikes an article without changing page ', () => {
            // TBD
          })
    })
})