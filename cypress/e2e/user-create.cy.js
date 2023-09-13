/// <reference types="cypress" />
describe('API Testing', () => {
    it('should to create user', () => {
        const token = Cypress.env('AUTH_TOKEN');

        // Define query parameters
        const queryParams = {
          email: 'siti.khotimah.ft17@gmail.com',
          username: 'sitikh',
          fullName: 'sitikhotimah',
          password: 'Password1!',
          role: 'user',
        };
    
        // Check if the token is available
        if (!token) {
          throw new Error('No token provided. Please set the auth token.');
        }
    
        cy.request({
          method: 'POST', // Change the HTTP method as needed
          url: 'https://qc-test.atmatech.id/api/user/',
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
  