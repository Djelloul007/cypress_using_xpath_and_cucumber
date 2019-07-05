/// <reference types ="Cypress" />
import { Given, When, Then } from "cypress-cucumber-preprocessor/steps";
import { loginPage } from "./loginpage";

Given(`I visit ExecuteAutomation Site`, () => {
  //Visit ExecuteAutomation Website
  cy.visit("http://eaapp.somee.com/");
});

Given(`I click login link`, () => {
  cy.contains("Login").click();
});

When(`I login as user with {string} and {string}`, (userName, password) => {
  //Enter username and password
  loginPage.performLogin(userName, password);
  loginPage.clickLoginButton();
});

Then("I should see {string}", title => {
  cy.contains(title).should("be.visible");
});
