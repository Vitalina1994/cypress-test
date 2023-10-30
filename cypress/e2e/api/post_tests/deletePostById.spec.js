describe('Delete Post by ID', () => {
    it('should delete post by ID', () => {
        const postIdToDelete = 10;

        cy.api('DELETE', `posts/${postIdToDelete}`).as('deletePostResponse')

        cy.get('@deletePostResponse').should((response) => {
            expect(response.status).to.eq(200)
        })
        cy.get('@deletePostResponse').its('body').should('be.empty')


    })
})
