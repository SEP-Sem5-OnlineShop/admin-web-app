describe('viewVendors', () => {
    it('admin can see the vendor details', () => {
        //login
        cy.visit('http://localhost:3000/auth/login-admin');
        cy.findByRole('textbox').type('0712633888');
        cy.get('#password').type('User123#')
        cy.findByRole('button', {  name: /log in/i}).click();


        //go to vendors tab
        cy.findByText(/menu/i);
        cy.findByRole('link', {  name: /toc vendor list/i}).click();


        //select one vendor
        cy.findByText(/0712633378/i).click();


        //select one item
        cy.findByText(/765/i).click();

        //back to vendr list
        cy.findByRole('link', {  name: /toc vendor list/i}).click();

        //select one vendor
        cy.findByText(/0712223378/i).click();

        //click remove vendor
        cy.findByRole('button', {  name: /remove the vendor/i}).click();

        //verify if vendor removed
        cy.findByText(/successfully removed!!!!!!!!!!/i).should('be.visible');
    });
});