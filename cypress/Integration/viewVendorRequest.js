describe('viewVendorRequests', () => {
    it('admin can see the vendor request details', () => {
        //login
        cy.visit('http://localhost:3000/auth/login-admin');
        cy.findByRole('textbox').type('0712633888');
        cy.get('#password').type('User123#')
        cy.findByRole('button', {  name: /log in/i}).click();


        //go to vendors tab
        cy.findByText(/menu/i);
        cy.findByRole('link', {  name: /toc vendor request list/i}).click();


        //select one vendor
        cy.findByText(/kamal/i).click();


        //click  submit
        cy.findByRole('button', {
            name: /submit/i
          }).click();

    
    });
});