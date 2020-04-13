/// <reference types="cypress" />

describe("router", () => {
  it("redirects to login when visting a auth protected page", () => {
    cy.visit("#/dashboard")
      .hash()
      .should("eq", "#/login");
  });
  it("redirects to main page when visting root", () => {
    cy.login()
      .visit("#/")
      .hash()
      .should("eq", "#/dashboard");
  });
  it("redirects to main page when revisiting login inside app", () => {
    cy.login()
      .visit("#/login")
      .hash()
      .should("eq", "#/dashboard");
  });
  it("redirects to login page when visiting 404", () => {
    cy.login()
      .visit("#/thispagedoesnotexist")
      .hash()
      .should("eq", "#/dashboard");
  });
  it("redirects to main page when logged in user visits 404", () => {
    cy.login()
      .visit("#/thispagedoesnotexist")
      .hash()
      .should("eq", "#/dashboard");
  });
});
