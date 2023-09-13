/// <reference types="cypress" />
describe('API Testing', () => {
    it('Keyword List', () => {
     
      const token = Cypress.env('AUTH_TOKEN'); 
      
      if (!token) {
        throw new Error('No token provided. Please set the auth token.');
      }
  
      cy.request({
        method: 'GET',
        url: 'https://qc-test.atmatech.id/api/keyword/',
        headers: {
          'Authorization': `Bearer ${token}`,
        },
      }).then((response) => {
        // Assertions
        expect(response.status).to.eq(200);
      });
    });
  });