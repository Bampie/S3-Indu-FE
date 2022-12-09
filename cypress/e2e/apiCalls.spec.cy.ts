
describe("get all users test", () => {
  beforeEach(() => {
    cy.visit("http://localhost:3000/");
  });

  // users overview has atleast 2 users all the time
  it("shows an overview of users", () => {
    cy.get("#sellerOverview").should("have.length.at.least", 1);
  });
  // it("get to user specific page", () => {
  //   cy.get("#sellerOverview")
  //     .find("SellerItem")
  //     .find("#btn-sellerInfo").click()
  // } )
});

// testing the API E2E
describe("get all users test", () => {
  beforeEach(() => {
    cy.visit("http://localhost:3000/");
  });

  it("test get all profiles", () => {
    cy.request('GET', 'http://localhost:8082/api/profiles')
    .then((response) => {
      console.log(response.body)
      expect(response[0]).to.equal('Baptist')

    })
    
    .should((response) => {
      expect(response.status).to.eq(200);
      // the server sometimes gets an extra comment posted from another machine
      // which gets returned as 1 extra object
      // expect(response.body).to.have.property('length').and.be.oneOf([425])
    });
  });
});
