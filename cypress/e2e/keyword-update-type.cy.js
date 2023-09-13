/// <reference types="cypress" />
describe('API Testing', () => {
    it('Keyword Update Type', () => {
     
      const token = Cypress.env('AUTH_TOKEN'); 
      
      if (!token) {
        throw new Error('No token provided. Please set the auth token.');
      }
  
      cy.request({
        method: 'PUT',
        url: 'https://qc-test.atmatech.id/api/keyword/65012d4492e5662894473dac/type',
        headers: {
          'Authorization': `Bearer ${token}`,
        },
      }).then((response) => {
        // Assertions
        expect(response.status).to.eq(200);
        expect(response.body.type).to.eq('public')
      });
    });
  });