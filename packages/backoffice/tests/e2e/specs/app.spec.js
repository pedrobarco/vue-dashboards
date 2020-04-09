/// <reference types="cypress" />

describe("app", () => {
  it("loads the page", () => {
    cy.visit("http://localhost:8080");
    cy.url().should("be", "http://localhost:8080/#/login");
  });
});
