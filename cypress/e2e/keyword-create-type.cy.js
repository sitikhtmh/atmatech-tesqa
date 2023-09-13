/// <reference types="cypress" />
describe('API Testing', () => {
    it('create keyword type from public to private', () => {
      // Use Cypress.env to store the token or load it from an external source
      const token = Cypress.env('AUTH_TOKEN'); // Replace with your actual token
  
      // Define query parameters
      const queryParams = {
        keyword: 'balon',
        type: 'private',
      };
  
      // Check if the token is available
      if (!token) {
        throw new Error('No token provided. Please set the auth token.');
      }
  
      cy.request({
        method: 'GET', // Change the HTTP method as needed
        url: 'https://qc-test.atmatech.id/api/keyword/',
        headers: {
          'Authorization': `Bearer ${token}`,
        },
        qs: queryParams, // Include query parameters
      }).then((response) => {
        // Assertions
        expect(response.status).to.eq(200); 
       
      });
    });
  });
  