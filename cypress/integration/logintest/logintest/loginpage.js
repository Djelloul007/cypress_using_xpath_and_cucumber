/// <reference types ="Cypress" />

const UserName_INPUT = '//input[@id="UserName"]';
const Password_INPUT = '//input[@id="Password"]';
const Login_BUTTON = ".btn";

export class EALoginPage {
  performLogin(userName, password) {
    cy.xpath(UserName_INPUT).type(userName);
    cy.xpath(Password_INPUT).type(password);
  }

  clickLoginButton() {
    cy.get(Login_BUTTON).click();
  }
}

export const loginPage = new EALoginPage();
