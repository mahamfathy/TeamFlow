describe('Home', () => {
  it('should visit the home page', () => {
    cy.visit('localhost:4200/dashboard/home');
    cy.contains('Welcome');
  });
});
