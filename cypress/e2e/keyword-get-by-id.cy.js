/// <reference types="cypress" />
describe('API Testing', () => {
    it('Keyword Get By ID', () => {
     
      const token = Cypress.env('AUTH_TOKEN'); 
      
      if (!token) {
        throw new Error('No token provided. Please set the auth token.');
      }
  
      cy.request({
        method: 'GET',
        url: 'https://qc-test.atmatech.id/api/keyword/65012d4492e5662894473dac',
        headers: {
          'Authorization': `Bearer ${token}`,
        },
      }).then((response) => {
        // Assertions
        expect(response.status).to.eq(200);
        expect(response.body._id).to.be.a('string');
      });
    });
  });