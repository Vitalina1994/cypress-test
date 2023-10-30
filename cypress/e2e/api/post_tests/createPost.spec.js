describe('Create Post',()=>{
  it('should create new post', ()=>{
    const body ={
      title:'Post by Vitalina Zubko',
      body:'Hi team! Nice to meet you!',
      userId: 1
    }

    cy.api({
      url: `/posts/`,
      method: 'POST',
      body,
      headers: {
        'Content-type': 'application/json; charset=UTF-8',
      }}).as('createPost')
    cy.get('@createPost').its('status').should('equal',201)
    cy.get('@createPost').its('body').should('deep.include', body)
  })
})
