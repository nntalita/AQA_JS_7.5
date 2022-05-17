describe("When a user works with Favorites,  ", () => {
  beforeEach(() => {
    cy.visit("/");
  });
  afterEach(() => {
    cy.contains("Log out").click();
  });
  it("User should be able add a book to the Favorites", () => {
    cy.login("bropet@mail.ru", "123");
    cy.add_book("Пьеро", "Папа Карло");
    cy.contains("Favorites").click();
    cy.contains("Пьеро" + "Папа Карло");
  });
  it("User should be able to delete a book from favorites", () => {
    cy.login("bropet@mail.ru", "123");
    cy.add_book("Артемон", "Папа Карло");
    cy.contains("Артемон" + "Папа Карло" + "Delete from")
      .find("button")
      .click();
    cy.contains("Favorites").click();
    cy.contains("Артемон" + "Папа Карло").should("not.exist");
  });
  it("User's Favorites are not visible to another user", () => {
    cy.login("bropet@mail.ru", "123");
    cy.add_book("Буратино", "Папа Карло");
    cy.contains("Log out").click();
    cy.login("test@test.com", "test");
    cy.contains("Favorites").click();
    cy.contains("Буратино").should("not.be.visible");
  });
});
