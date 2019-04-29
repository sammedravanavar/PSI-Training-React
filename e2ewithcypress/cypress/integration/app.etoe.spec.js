describe('First test',()=>{
    it('is working',()=>{
        expect(true).to.equal(true);
    });
})

describe('Functional Testing Counter',()=>{
    it('Visit The app and Click the Button !',()=>{
        cy.visit('/');
        cy.get('button').click();
        cy.get('p').should('contain','Current Count : 1');
    })
})