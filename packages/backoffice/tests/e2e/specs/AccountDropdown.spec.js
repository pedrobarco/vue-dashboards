/// <reference types="cypress" />

describe("account dropdown", () => {
  beforeEach(() => {
    cy.login();
  });
  it.skip("correctly routes dropdown links to pages", () => {
    /*     cy.login()
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
*/
  });
});
