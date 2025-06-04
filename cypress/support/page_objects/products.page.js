class ProductsPage {
  visit() {
    cy.visit("/produtos");
  }

  addToCart(productColor, productSize) {
    cy.get(`.button-variable-item-${productSize}`).click();
    cy.get(`.button-variable-item-${productColor}`).click();
    cy.get(".input-text").click();
    cy.get(".single_add_to_cart_button").click();
  }

  goToProduct(productName) {
    const formattedUrl = productName.replace(/ /g, "-");
    cy.visit(`/produtos/${formattedUrl}`);
  }

  searchProduct(productName) {
    cy.get("[name='s']").eq(1).type(productName);
    cy.get(".button-search").eq(1).click();
  }

  goToCheckout() {
    cy.visit("/checkout");
  }

  viewCart() {
    cy.get(".woocommerce-cart-link").click();
  }
}

export default new ProductsPage();
