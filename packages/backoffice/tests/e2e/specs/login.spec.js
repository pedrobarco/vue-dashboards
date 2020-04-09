/// <reference types="cypress" />

describe("login", () => {
  it("loads the page", () => {
    cy.visit("http://localhost:8080/#/login");
    cy.url().should("be", "http://localhost:8080/#/login");
  });
  it("has the login form elements", () => {
    cy.visit("http://localhost:8080/#/login");
    cy.get("[data-cy=email]");
    cy.get("[data-cy=password]");
    cy.get("[data-cy=submit]");
  });
  it("requires an email address", () => {
    cy.visit("http://localhost:8080/#/login");
    cy.get("[data-cy=submit]").click();
    cy.url().should("be", "http://localhost:8080/#/login");
  });
  it("validates the email address", () => {
    cy.visit("http://localhost:8080/#/login");
    const username = cy.faker.internet.userName();
    cy.get("[data-cy=email]").type(username);
    cy.get("[data-cy=submit]").click();
    cy.url().should("be", "http://localhost:8080/#/login");
  });
  it("requires a password", () => {
    cy.visit("http://localhost:8080/#/login");
    const email = cy.faker.internet.email();
    cy.get("[data-cy=email]").type(email);
    cy.get("[data-cy=submit]").click();
    cy.url().should("be", "http://localhost:8080/#/login");
  });
  it("denies login to invalid login credentials", () => {
    cy.visit("http://localhost:8080/#/login");
    const email = cy.faker.internet.email();
    cy.get("[data-cy=email]").type(email);
    const password = cy.faker.internet.password();
    cy.get("[data-cy=password]").type(password);
    cy.get("[data-cy=submit]").click();
    cy.url().should("be", "http://localhost:8080/#/login");
  });
  it("validates login credentials", () => {
    cy.visit("http://localhost:8080/#/login");
    cy.get("[data-cy=email]").type("admin@admin");
    cy.get("[data-cy=password]").type("admin");
    cy.get("[data-cy=submit]").click();
    cy.url().should("be", "http://localhost:8080");
  });
  it("redirects to home if already logged in", () => {
    cy.visit("http://localhost:8080/#/login");
    cy.get("[data-cy=email]").type("admin@admin");
    cy.get("[data-cy=password]").type("admin");
    cy.get("[data-cy=submit]").click();
    cy.visit("http://localhost:8080/#/login");
    cy.url().should("be", "http://localhost:8080");
  });
});
