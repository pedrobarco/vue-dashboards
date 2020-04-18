/// <reference types="cypress" />

describe("bottom navbar", () => {
  beforeEach(() => {
    cy.login();
  });
  it("should not be visible in bigger devices", () => {
    cy.get("[data-cy=bottom-navbar]").should("not.be.visible");
  });
  it("should be visible in smaller devices", () => {
    cy.viewport("iphone-x");
    cy.get("[data-cy=bottom-navbar]").should("be.visible");
  });
  it("correctly routes navbar links to pages", () => {
    cy.viewport("iphone-x");
    cy.get("[data-cy=bottom-sales-link]")
      .first()
      .click()
      .hash()
      .should("eq", "#/sales")
      .get("[data-cy=bottom-products-link]")
      .first()
      .click()
      .hash()
      .should("eq", "#/products")
      .get("[data-cy=bottom-clients-link]")
      .first()
      .click()
      .hash()
      .should("eq", "#/clients")
      .get("[data-cy=bottom-dashboard-link]")
      .first()
      .click()
      .hash()
      .should("eq", "#/dashboard");
  });
});
