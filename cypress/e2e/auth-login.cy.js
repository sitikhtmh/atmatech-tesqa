/// <reference types="cypress" />
  describe('API Login Test', () => {
    it('API login and show the token', () => {
      cy.request({
        method: 'POST',
        url: 'https://qc-test.atmatech.id/api/login',
        body: {
          username: "superadmin",
          password: "Password1!",
        },
      }).then((response) => {
        expect(response.status).to.eq(200);

        expect(response.body).to.have.property('accessToken');
        expect(response.body.accessToken).to.be.a('string');
       
      });
    });
  });

