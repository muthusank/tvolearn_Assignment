export class Validatelinks
{

Validate_Alllinks()
{
    cy.xpath("//div[@class='shg-box-content']/div[contains(@class,'align-wrapper')]/div/div[contains(@class,'box-overlay')]").should('have.length',1).scrollIntoView();
    cy.get('.button-list')
    .find('a') // Assuming the links are anchor tags, adjust the selector if needed
      .each(($link) => {
        // Save the link href to an array or perform any desired action
        const linkHref = $link.attr('href')
        // Click on the link
        cy.wrap($link).click({ force: true }).scrollIntoView() // Replace with any additional actions you want to perform on each link
        cy.xpath("//div[@class='shg-box-content']/div[contains(@class,'align-wrapper')]/div/div[contains(@class,'box-overlay')]").should('have.length',1).scrollIntoView(); 
        cy.wait(2000) // Add a wait time if needed for the page to load after clicking the link
      })
}
}
  
  
  








   

    
  

    