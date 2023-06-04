export class ValidateSections
{

Validate_allsections_InLearnActivities()
{
    cy.get('#la_iframe').scrollIntoView()
    cy.wait(2000)
    cy.screenshot()
}
}
    