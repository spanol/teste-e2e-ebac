import productsPage from "../support/page_objects/products.page";
import prodcutsPage from "../support/page_objects/products.page";
const perfil = require("../fixtures/perfil.json");
const products = require("../fixtures/products.json");

context("Exercicio - Testes End-to-end - Fluxo de pedido", () => {
  beforeEach(() => {
    cy.visit("minha-conta");
    cy.login(perfil.usuario, perfil.senha);
    prodcutsPage.visit();
  });

  it("Deve fazer um pedido na loja Ebac Shop de ponta a ponta", () => {
    prodcutsPage.goToProduct(products[0].name);
    prodcutsPage.addToCart(products[0].color, products[0].size);
    prodcutsPage.goToProduct(products[1].name);
    prodcutsPage.addToCart(products[1].color, products[1].size);
    prodcutsPage.goToProduct(products[2].name);
    prodcutsPage.addToCart(products[2].color, products[2].size);
    prodcutsPage.goToProduct(products[3].name);
    prodcutsPage.addToCart(products[3].color, products[3].size);

    cy.get(".dropdown-toggle > .mini-cart-items").should("contain", "4");

    productsPage.goToCheckout();

    cy.get("#billing_company").clear().type(perfil.company);
    cy.get("#billing_address_1").clear().type(perfil.address1);
    cy.get("#billing_address_2").clear().type(perfil.address2);
    cy.get("#billing_city").clear().type(perfil.city);
    cy.get("#billing_postcode").clear().type(perfil.postcode);
    cy.get("#billing_phone").clear().type(perfil.phone);
    cy.get("#order_comments").clear().type(perfil.comments);

    cy.get("#terms").check();
    cy.get("#place_order").click();

    cy.wait(5000);

    cy.get(".page-title").should("contain", "Pedido recebido");
    cy.get(".woocommerce-notice").should(
      "contain",
      "Obrigado. Seu pedido foi recebido."
    );
  });
});
