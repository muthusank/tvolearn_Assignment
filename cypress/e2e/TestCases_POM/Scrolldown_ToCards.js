export class Scrolldown
{

Scrolldown_tocards()
{
    cy.contains('Learn Forward in the Curriculum').scrollIntoView()
    cy.wait(2000)
    cy.screenshot()
    cy.xpath("//div[text()='Mathematics']").should('have.length',1).click()
    cy.wait(2000)
}
}
    