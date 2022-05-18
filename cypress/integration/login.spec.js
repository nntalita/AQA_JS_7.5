describe("When user should is on login page, user", () => {
  it("Should be able to open the main page", () => {
    cy.visit("/");
    cy.contains("Books list");
  });
  it("Should be able to login wiht correct email and password", () => {
    cy.visit("/");
    cy.login("bropet@mail.ru", "123");
    cy.contains("Добро пожаловать").should("be.visible");
  });
  it("Should be not able to login with empty email and password", () => {
    cy.visit("/");
    cy.login("  ", "123");
    cy.get("#mail")
      .then(($el) => $el[0].checkValidity())
      .should("be.false");
    cy.get("#mail")
      .then(($el) => $el[0].validationMessage)
      .should("contain", "Заполните это поле");
    cy.get("#mail").then(($el) => cy.log($el[0]));
  });
});
