const user = require("../fixtures/user");
const createUser = require("../fixtures/createUser");

describe("create,update,delete user", () => {
  it("Should create a user", () => {
    cy.request("POST", "https://petstore.swagger.io/v2/user", user).then(
      (response) => {
        expect(response.status).be.eq(200);
      }
    );
  });

  it("Should update the user", () => {
    cy.request("POST", "https://petstore.swagger.io/v2/user", user).then(
      (response) => {
        expect(response.status).be.eq(200);
      }
    );
    cy.request(
      "PUT",
      `https://petstore.swagger.io/v2/user/${user.username}`,
      createUser
    ).then((response) => {
      expect(response.status).to.eq(200);
    });
    cy.request(
      "GET",
      `https://petstore.swagger.io/v2/user/${createUser.username}`
    ).then((response) => {
      expect(response.status).to.eq(200);
      expect(response.body).to.deep.eq(createUser);
    });
  });


  it("Should delete the user", () => {
  cy.request("POST", "https://petstore.swagger.io/v2/user", createUser).then(
    (response) => {
      expect(response.status).to.eq(200);
      cy.request(
        "DELETE",
        `https://petstore.swagger.io/v2/user/${createUser.username}`
      ).then((response) => {
        expect(response.status).to.eq(200);
      });
    });
  });
});

