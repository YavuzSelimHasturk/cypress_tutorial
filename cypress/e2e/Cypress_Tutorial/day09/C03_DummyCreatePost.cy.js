describe('Create POST', () => {

    it('TEST', () => {
        cy.request({
            url : 'https://dummy.restapiexample.com/api/v1/create',
            method  : 'POST',
            body : {"name":"Yavuz","age":"32","salary":"5000$"}
        }).then((response=>{
            expect(response.body.message).to.eq('Successfully! Record has been added.')
            expect(response.body.name).to.eq('Yavuz')
        }))
    });
});