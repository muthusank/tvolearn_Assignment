export class Choose_Grade
{

Choose_Grade_n()
{
    cy.fixture('Inputs').then( (data)=>
    {
    cy.get(data.GradeInput).should('have.length', 1).click()
    cy.wait(2000)
    //cy.screenshot()
    cy.wait(2000)
    })
}
}
    