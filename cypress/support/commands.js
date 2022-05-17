Cypress.Commands.add("login", (email, password) => {
  cy.contains("Log in").click();
  cy.get("#mail").type(email);
  cy.get("#pass").type(password);
  cy.contains("Submit").click();
});
Cypress.Commands.add("add_book", (name, author) => {
  cy.contains("Add new").click();
  cy.get("#title").type(name);
  cy.get("#authors").type(author);
  cy.get('#favorite').check();
  cy.contains("Submit").click();
});
