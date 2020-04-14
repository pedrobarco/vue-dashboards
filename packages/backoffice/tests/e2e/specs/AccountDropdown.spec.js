/// <reference types="cypress" />

describe("account dropdown", () => {
  beforeEach(() => {
    cy.login();
  });
  it("should hide the dropdown by default", () => {
    cy.get("[data-cy=account-dropdown--dropdown]").should("not.be", "visible");
  });
  it("should toggle the dropdown when clicked", () => {
    cy.get("[data-cy=account-dropdown]")
      .click()
      .get("[data-cy=account-dropdown--dropdown]")
      .should("be", "visible")
      .focused()
      .click()
      .get("[data-cy=account-dropdown--dropdown]")
      .should("not.be", "visible");
  });
  it("should close the dropdown when clicked away", () => {
    cy.get("[data-cy=account-dropdown]")
      .click()
      .get("[data-cy=account-dropdown--dropdown]")
      .should("be", "visible")
      .get("body")
      .click()
      .get("[data-cy=account-dropdown--dropdown]")
      .should("not.be", "visible");
  });
  it("correctly routes dropdown links to pages", () => {
    cy.get("[data-cy=account-dropdown]")
      .click()
      .get("[data-cy=profile-link]")
      .first()
      .click()
      .hash()
      .should("eq", "#/profile")
      .get("[data-cy=account-dropdown]")
      .click()
      .get("[data-cy=settings-link]")
      .first()
      .click()
      .hash()
      .should("eq", "#/settings")
      .get("[data-cy=account-dropdown]")
      .click()
      .get("[data-cy=logout-link]")
      .first()
      .click()
      .hash()
      .should("eq", "#/login");
  });
});
