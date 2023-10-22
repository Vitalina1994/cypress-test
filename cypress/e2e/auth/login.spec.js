import {LoginPage} from '../../pageObjects/auth/LoginPage'
describe('Login to the page', () => {

  it('should login with valid credentials', () => {

   const loginPage = new LoginPage()
   loginPage.navigate()
    loginPage.fill('vitalina.zubko@mev.com', 'qwerty12345', true)
    loginPage.clickLoginButton()
  })
})
