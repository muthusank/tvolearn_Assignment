export class ChooseLesson
{

Selectanylesson()
{
    //Click on Go to Learning Activities
    cy.get('#la-menu-dialog-dialog_label > .mobile-hide-767').should('have.length',1).click()
    cy.screenshot()
    cy.wait(2000)
    //Choose Algebra
    cy.get(':nth-child(2) > .activity-title > a').should('have.length',1).click()
    cy.wait(2000)
    cy.xpath("//div[@class='activity-menu-panel']").should('have.length',1).scrollIntoView(); 
}
}
    






