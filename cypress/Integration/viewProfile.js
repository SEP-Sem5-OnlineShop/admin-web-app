describe('viewProfile', () => {
    it('admin can see the his profile', () => {
        //login
        cy.visit('http://localhost:3000/auth/login-admin');
        cy.findByRole('textbox').type('0712633888');
        cy.get('#password').type('User123#')
        cy.findByRole('button', {  name: /log in/i}).click();


        //go to vendors tab
        cy.findByText(/menu/i);
        cy.findByRole('link', {  name: /person my profile/i}).click();


        
    });
});