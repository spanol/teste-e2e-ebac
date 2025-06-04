Cypress.Commands.add("login", (email, password) => {
  cy.visit("minha-conta");
  cy.get("#username").type(email);
  cy.get("#password").type(password, { log: false });
  cy.get(".woocommerce-form > .button").click();
});

Cypress.Commands.add("register", (email, password) => {
  cy.visit("minha-conta");
  cy.get("#reg_email").type(email);
  cy.get("#reg_password").type(password);
  cy.get(".form-group > .button").click();
});
