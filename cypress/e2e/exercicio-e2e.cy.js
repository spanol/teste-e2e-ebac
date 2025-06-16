import productsPage from "../support/page_objects/products.page";
import checkoutPage from "../support/page_objects/checkout.page";
const perfil = require("../fixtures/perfil.json");
const products = require("../fixtures/products.json");

context("Exercicio - Testes End-to-end - Fluxo de pedido", () => {
  /*  Como cliente 
      Quero acessar a Loja EBAC 
      Para fazer um pedido de 4 produtos 
      Fazendo a escolha dos produtos
      Adicionando ao carrinho
      Preenchendo todas opções no checkout
      E validando minha compra ao final */
  beforeEach(() => {
    cy.login(perfil.email, perfil.senha);
    productsPage.visit();
  });

  it("Deve fazer um pedido na loja Ebac Shop de ponta a ponta", () => {
    products.forEach((product) => {
      productsPage.goToProduct(product.name);
      productsPage.addToCart(product.color, product.size);
    });

    cy.get(".dropdown-toggle > .mini-cart-items").should("contain", "4");

    productsPage.goToCheckout();

    checkoutPage.fillCheckoutDetails(perfil);
    checkoutPage.acceptTerms();
    checkoutPage.placeOrder();
    checkoutPage.verifyOrderSuccess();
  });
});
