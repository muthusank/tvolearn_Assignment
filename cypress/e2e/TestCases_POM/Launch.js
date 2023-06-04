export class Launchwebsite
{

Application_launch()
{
//Launch tvolearn website in the Browser
cy.visit('https://www.tvolearn.com/')
cy.wait(2000)
//Verify the page title
cy.title().should('eq','Learn at Home Resources for K to Grade 12 Students | TVO Learn | TVO Learn')
cy.screenshot()
cy.wait(2000)
}
}
