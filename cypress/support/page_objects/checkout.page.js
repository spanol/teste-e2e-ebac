class CheckoutPage {
  fillCheckoutDetails(perfil) {
    cy.get("#billing_company").clear().type(perfil.company);
    cy.get("#billing_address_1").clear().type(perfil.address1);
    cy.get("#billing_address_2").clear().type(perfil.address2);
    cy.get("#billing_city").clear().type(perfil.city);
    cy.get("#billing_postcode").clear().type(perfil.postcode);
    cy.get("#billing_phone").clear().type(perfil.phone);
    cy.get("#order_comments").clear().type(perfil.comments);
  }

  acceptTerms() {
    cy.get("#terms").check();
  }

  placeOrder() {
    cy.get("#place_order").click();
  }

  verifyOrderSuccess() {
    cy.get(".page-title", { timeout: 6000 }).should(
      "contain",
      "Pedido recebido"
    );
    cy.get(".woocommerce-notice").should(
      "contain",
      "Obrigado. Seu pedido foi recebido."
    );
  }
}

export default new CheckoutPage();
