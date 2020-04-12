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
  /*   it("correctly routes account dropdown links to pages", () => {
    cy.login()
      .get("[data-cy=profile-link]")
      .first()
      .click()
      .hash()
      .should("eq", "#/profile")
      .get("[data-cy=settings-link]")
      .first()
      .click()
      .hash()
      .should("eq", "#/settings")
      .get("[data-cy=logout-link]")
      .first()
      .click()
      .hash()
      .should("eq", "#/login");
  }); */
});
