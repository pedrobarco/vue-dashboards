/// <reference types="cypress" />

describe("login", () => {
  it("loads the page", () => {
    cy.visit("/#/login")
      .hash()
      .should("eq", "#/login");
  });
  it("has the login form elements", () => {
    cy.visit("/#/login")
      .get("[data-cy=email]")
      .get("[data-cy=password]")
      .get("[data-cy=submit]");
  });
  it("requires an email address", () => {
    cy.visit("/#/login")
      .get("[data-cy=submit]")
      .click()
      .hash()
      .should("eq", "#/login");
  });
  it("validates the email address", () => {
    cy.visit("/#/login")
      .get("[data-cy=email]")
      .type(cy.faker.internet.userName())
      .get("[data-cy=submit]")
      .click()
      .hash()
      .should("eq", "#/login");
  });
  it("requires a password", () => {
    cy.visit("/#/login")
      .get("[data-cy=email]")
      .type(cy.faker.internet.email())
      .get("[data-cy=submit]")
      .click()
      .hash()
      .should("eq", "#/login");
  });
  it("denies login to invalid login credentials", () => {
    cy.visit("/#/login")
      .get("[data-cy=email]")
      .type(cy.faker.internet.email())
      .get("[data-cy=password]")
      .type(cy.faker.internet.password())
      .get("[data-cy=submit]")
      .click()
      .hash()
      .should("eq", "#/login");
  });
  it("validates login credentials", () => {
    cy.visit("/#/login")
      .get("[data-cy=email]")
      .type(Cypress.env("ADMIN_EMAIL"))
      .get("[data-cy=password]")
      .type(Cypress.env("ADMIN_PASSWORD"))
      .get("[data-cy=submit]")
      .click()
      .hash()
      .should("eq", "#/dashboard");
  });
});
