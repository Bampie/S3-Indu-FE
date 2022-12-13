describe("get all users test component test", () => {
  beforeEach(() => {
    cy.visit("http://localhost:3000/");
  });

  // users overview has atleast 2 users all the time
  it("shows an overview of users", () => {
    cy.get(".sellerOverview").should("have.length.at.least", 2);

  });
});

// testing the API E2E
describe('E2E testing', () => {
  it('test JSON from the API GetAllProfiles', () => {
    cy.visit('http://localhost:3000/');

    cy.request('http://localhost:8082/api/profiles')
      .then(response => {
        expect(response.headers['content-type']).to.eq('application/json;charset=UTF-8');

        expect(response.body).to.not.be.empty;

        expect(response.body).to.be.an('array');
        expect(response.body[0]).to.have.property('id');
        expect(response.body[0]).to.have.property('name');
        expect(response.body[0]).to.have.property('auth0Id');
      });
  });
  it('test JSON get ProfileById', () => {
    cy.visit('http://localhost:3000/sellerPage/auth0|634e54f55bdae0d184bedc37');

    cy.request('http://localhost:8082/api/profiles/auth0|634e54f55bdae0d184bedc37')
      .then(response => {
        expect(response.headers['content-type']).to.eq('application/json;charset=UTF-8');

        expect(response.body).to.not.be.empty;

        expect(response.body).to.have.property('id');
        expect(response.body).to.have.property('name');
        expect(response.body).to.have.property('auth0Id');
      });
  });
  it('test JSON get check profileById', () => {
    cy.visit('http://localhost:3000/sellerPage/auth0|634e54f55bdae0d184bedc37');

    cy.request('http://localhost:8082/api/profiles/check/auth0|634e54f55bdae0d184bedc37')
      .then(response => {
        expect(response.headers['content-type']).to.eq('application/json;charset=UTF-8');

        expect(response.body).to.not.be.empty;

        expect(response.body).to.have.property('isIdFound');
        expect(response.body).not.to.have.property('name');
      });
  });
});