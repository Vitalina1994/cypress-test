describe('Update Post by ID', () => {
  it('should update post by ID', () => {
    const postId = 2
    const newData = {
      name: 'Vitalina New Name',
      username: 'UVitalinaNewName',
      email: 'vitalina.test.new@test.com',
    }

    cy.api('PUT', `posts/${postId}`, newData).then((response) => {
      expect(response.status).to.eq(200)
      expect(response.body).to.deep.equal({ ...newData, id: postId })
    })
  })

  it('should validate failed update attempt', () => {
    const nonExistingPostId = 1994
    const nonExistingData = {
      name: 'Bla bla bla Name',
      username: 'BlaUsername',
      email: 'bla.useremail@new.com',
    }

    cy.api('PUT', `users/${nonExistingPostId}`, nonExistingData, {
     failOnStatusCode: false}).then((response) => {
      expect(response.status).to.satisfy(
          (status) => status === 500 || status === 404,
      )
      if (response.status === 404) {
        expect(response.body).to.be.empty
      }
    })
  })
})
