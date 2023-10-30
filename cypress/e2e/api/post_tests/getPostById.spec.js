describe('Get Post by ID', () => {
    const postId = 1
    const apiUrl = `posts/${postId}`
    it('should successfully get post by id', () => {
        cy.api('GET', apiUrl).as('getPostResponse')

        cy.get('@getPostResponse').should((response) => {
            expect(response.status).to.eq(200)
            const { userId, id, title, body } = response.body

            expect(userId).to.be.a('number')
            expect(id).to.be.a('number')
            expect(title).to.be.a('string')
            expect(body).to.be.a('string')
        })
    })

    it('should handle non-existing post id', () => {
        const nonExistingPostId = 1994
        const nonExistingApiUrl = `posts/${nonExistingPostId}`

        cy.api('GET', nonExistingApiUrl, null, { failOnStatusCode: false }).as('nonExistingPostResponse')

        cy.get('@nonExistingPostResponse').should((response) => {
            expect(response.status).to.eq(404)
            expect(response.body).to.be.empty
        })
    })
})
