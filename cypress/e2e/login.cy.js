import loginPage from "../integration/pageObjectModel/loginPom";

describe('User Login', () => {
  it('Successful login with valid credentials.', () => {
    loginPage.open()
    loginPage.username.type('practice');
    loginPage.password.type('SuperSecretPassword!');
    loginPage.loginButton.click();
    loginPage.loginStatusMessage.contains('You logged into a secure area!')
  })

  it('Failed login with invalid credentials.', () => {
    loginPage.open()
    loginPage.username.type('practice');
    loginPage.password.type('Password!');
    loginPage.loginButton.click();
    loginPage.loginStatusMessage.contains('Your password is invalid!')
  })
})