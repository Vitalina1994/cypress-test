describe('Get Posts List', () => {
    it('should retrieve posts list', () => {
        cy.api('GET', 'posts').then((response) => {
            expect(response.status).to.eq(200)
            expect(response.body).to.be.an('array')
            expect(response.body).to.have.length.above(0)

            response.body.forEach((post) => {
                expect(post).to.have.property('userId')
                expect(post).to.have.property('id')
                expect(post).to.have.property('title')
                expect(post).to.have.property('body')
            })
        })
    })
})
