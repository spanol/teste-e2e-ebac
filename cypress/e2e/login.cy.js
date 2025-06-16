const perfil = require("../fixtures/perfil.json");
let dadosLogin;

context("Funcionalidade Login", () => {
  before(() => {
    dadosLogin = perfil;
  });

  beforeEach(() => {
    cy.visit("minha-conta");
  });

  afterEach(() => {
    cy.screenshot();
  });

  it("Login com sucesso usando Comando customizado", () => {
    cy.login(dadosLogin.email, dadosLogin.senha);
    cy.get(".page-title").should("contain", "Minha conta");
    cy.get(".woocommerce-MyAccount-content > p").should(
      "contain",
      `Olá, ${dadosLogin.usuario}`
    );
  });

  it("Deve exibir mensagem de erro ao inserir usuário inválido", () => {
    const email = "usuarioinexistente@teste.com";
    cy.login(email, dadosLogin.senha);
    cy.url().should("include", "/minha-conta");
    cy.get(".woocommerce-error > li").should(
      "contain",
      "Endereço de e-mail desconhecido. Verifique novamente ou tente seu nome de usuário."
    );
  });

  it("Deve exibir mensagem de erro ao inserir senha inválida", () => {
    const email = dadosLogin.email;
    const password = "senhaerrada";
    cy.login(email, password);
    cy.url().should("include", "/minha-conta");
    cy.get(".woocommerce-error > li").should(
      "contain",
      `A senha fornecida para o e-mail ${email} está incorreta.`
    );
  });
});
