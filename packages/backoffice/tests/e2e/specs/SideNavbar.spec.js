/// <reference types="cypress" />

describe("side navbar", () => {
  beforeEach(() => {
    cy.login();
  });
  it("should be visible in bigger devices", () => {
    cy.get("[data-cy=side-navbar]").should("be.visible");
  });
  it("should not be visible in smaller devices", () => {
    cy.viewport("iphone-x");
    cy.get("[data-cy=side-navbar]").should("not.be.visible");
  });
  it("correctly routes navbar links to pages", () => {
    cy.get("[data-cy=side-sales-link]")
      .first()
      .click()
      .hash()
      .should("eq", "#/sales")
      .get("[data-cy=side-products-link]")
      .first()
      .click()
      .hash()
      .should("eq", "#/products")
      .get("[data-cy=side-clients-link]")
      .first()
      .click()
      .hash()
      .should("eq", "#/clients")
      .get("[data-cy=side-dashboard-link]")
      .first()
      .click()
      .hash()
      .should("eq", "#/dashboard");
  });
});
