import { Launchwebsite } from "../TestCases_POM/Launch"
import { Choose_Menu } from "../TestCases_POM/Choose_HeaderMenu"
import { Choose_Grade } from "../TestCases_POM/Choose_Grade"
import { Scrolldown } from "../TestCases_POM/Scrolldown_ToCards"
import {Validatelinks} from "../TestCases_POM/Links_Validation"
import { ChooseLesson } from "../TestCases_POM/Lessons_LearningActivities"
import { ValidateSections } from "../TestCases_POM/ValidateSections_LearningActivities"

describe('tvoAutomation_Testsuite', () => 
{
  //Initilizations & Declarations
const launch = new Launchwebsite()
const choosemenu = new Choose_Menu()
const gradeselect = new Choose_Grade()
const scroll = new Scrolldown()
const links = new Validatelinks()
const lesson = new ChooseLesson()
const sections = new ValidateSections()

before(function()
{
    //Launch Website
    launch.Application_launch()
})

it('TestExecution', () => 
{
  try{
    //Click Elementary K-8 form the header menu
    choosemenu.Click_ElementaryK8()
    //Choose any Grade
    gradeselect.Choose_Grade_n()
    //Scrolldown to select the Subjects from the card
    scroll.Scrolldown_tocards()
    //Scroll to links available in "On this page" section
    links.Validate_Alllinks()
    //Choose any one lesson under Learning Activities
    lesson.Selectanylesson()
    //Validate all the sections under Learning Activity frame
    sections.Validate_allsections_InLearnActivities()
  }
  catch (error) 
  {
    cy.log("An exception occurred: " + error.message);
    cy.fail("Test failed due to an exception: " + error.message);
  }
  }) 
  })
  

  

