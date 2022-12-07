describe("get all users test", () => {
  beforeEach(() => {
    cy.visit("http://localhost:3000/");
  });

  // users overview has atleast 2 users all the time
  it("shows an overview of users", () => {
    cy.get("#sellerOverview")
      .find("SellerItem")
      .should("have.length.at.least", 2)
  });

  it("get to user specific page", () => {
    cy.get("#sellerOverview")
      .find("SellerItem")
      .find("#btn-sellerInfo").click()
  } )
});
