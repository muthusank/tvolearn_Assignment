export class Choose_Menu
{

Click_ElementaryK8()
{
cy.get('.medium-up-hide-modified > .site-header__icons-wrapper > .site-header__menu').should('have.length', 1).click()
cy.wait(2000)
cy.screenshot()
    cy.fixture('Inputs').then( (data)=>
    {
        cy.get(data.HeaderInput).should('have.length', 1).click()
        cy.screenshot()
        cy.wait(2000)
    })
}
}
