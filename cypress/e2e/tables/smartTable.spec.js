describe('Smart table', ()=> {
  it('Added new user should have correct information',() => {
    cy.addUser('03', 'Jonh', 'Smith', 'JSmith', 'vitalina.zubko@mev.com', '15')
  })

  it('Edited user should have correct information',() => {
    cy.editUser('04','Mary', 'Neuman', 'MNeuman', 'vitalina.zubko@mev.com', '16')
  })
})
