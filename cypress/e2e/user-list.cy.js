/// <reference types="cypress" />
describe('API Testing', () => {
    it('User List', () => {
      // Use Cypress.env to store the token or load it from an external source
      const token = Cypress.env('AUTH_TOKEN'); // Replace with your actual token
      
      // Check if the token is available
      if (!token) {
        throw new Error('No token provided. Please set the auth token.');
      }
  
      cy.request({
        method: 'GET',
        url: 'https://qc-test.atmatech.id/api/user/?page=1&limit=10',
        headers: {
          'Authorization': `Bearer ${token}`,
        },
      }).then((response) => {
        // Assertions
        expect(response.status).to.eq(200); 
        expect(response.body.total).to.eq(1); 
        
      });
    });
  });