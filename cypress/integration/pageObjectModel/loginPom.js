class loginPage {

    open () {
        cy.visit('/')
    }

    get username() {
        return cy.get('[id=username]');
    }

    get password() {
        return cy.get('[id=password]');
    }

    get loginButton() {
        return cy.get('[type=button]');
    }

    get loginStatusMessage() {
        return cy.get('[id=flash-message]');
    }
}

export default new loginPage();