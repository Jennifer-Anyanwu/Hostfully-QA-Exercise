/// <reference types="Cypress" />

import { ComputersPage } from "../page_objects/ComputersPage";
import { AddComputerPage } from "../page_objects/AddComputerPage";

interface ComputerData {
  validIntroducedDate: string,
  validDiscontinuedDate: string,
  inValidIntroducedDate: string,
  inValidDiscontinuedDate: string,
  validFutureIntroducedDate: string,
  validPastDiscontinuedDate: string,
  invalidIntroducedDateFormat: string,
  invalidDiscontinuedDateFormat: string,
}
const addComputerData: ComputerData = require("../fixtures/AddComputerData.json")

const computersPage = new ComputersPage();
const addComputerPage = new AddComputerPage();

const dayjs = require('dayjs')
const dateTimeNow = dayjs().format('YYMMDDHHmmss')
const validComputerName = `TestComputer${dateTimeNow}`

describe('Negative Add Computer Tests', () => {

  beforeEach(() => {
    cy.visit('/computers/new');
    addComputerPage.addComputerPageHeader().should('include.text', 'Add a computer');
  })

  it('Validate that user cannot sucessfully add a new computer while leaving the ComputerName field blank', () => {
    addComputerPage.introducedField().type(addComputerData.validIntroducedDate);
    addComputerPage.discontinuedField().type(addComputerData.validDiscontinuedDate);
    addComputerPage.selectCompany();
    addComputerPage.createComputerButton().click();
    addComputerPage.blankComputerNameFieldError().should('have.text', 'Failed to refine type : Predicate isEmpty() did not fail.').and('be.visible');
  })

  it('Validate that user cannot sucessfully add a new computer using an invalid date in the Introduced field ', () => {
    addComputerPage.computerNameField().type(validComputerName);
    addComputerPage.introducedField().type(addComputerData.inValidIntroducedDate);
    addComputerPage.discontinuedField().type(addComputerData.validDiscontinuedDate);
    addComputerPage.selectCompany();
    addComputerPage.createComputerButton().click();
    addComputerPage.invalidIntroducedDateError().should('include.text', 'Failed to decode date').and('include.text', `${addComputerData.inValidIntroducedDate}`).and('be.visible');
  })

  it('Validate that user cannot sucessfully add a new computer using an invalid date format in the Introduced field ', () => {
    addComputerPage.computerNameField().type(validComputerName);
    addComputerPage.introducedField().type(addComputerData.invalidIntroducedDateFormat);
    addComputerPage.discontinuedField().type(addComputerData.validDiscontinuedDate);
    addComputerPage.selectCompany();
    addComputerPage.createComputerButton().click();
    addComputerPage.invalidIntroducedDateError().should('include.text', 'Failed to decode date').and('include.text', `${addComputerData.invalidIntroducedDateFormat}`).and('be.visible');
  })

  it('Validate that user cannot sucessfully add a new computer using an invalid date format in the Discontinued field ', () => {
    addComputerPage.computerNameField().type(validComputerName);
    addComputerPage.introducedField().type(addComputerData.validIntroducedDate);
    addComputerPage.discontinuedField().type(addComputerData.invalidDiscontinuedDateFormat);
    addComputerPage.selectCompany();
    addComputerPage.createComputerButton().click();
    addComputerPage.invalidDiscontinuedDateError().should('include.text', 'Failed to decode date').and('include.text', `${addComputerData.invalidDiscontinuedDateFormat}`).and('be.visible');
  })

  it('Validate that user cannot sucessfully add a new computer using an invalid date in the Discontinued field ', () => {
    addComputerPage.computerNameField().type(validComputerName);
    addComputerPage.introducedField().type(addComputerData.validIntroducedDate);
    addComputerPage.discontinuedField().type(addComputerData.inValidDiscontinuedDate);
    addComputerPage.selectCompany();
    addComputerPage.createComputerButton().click();
    addComputerPage.invalidDiscontinuedDateError().should('include.text', 'Failed to decode date').and('include.text', `${addComputerData.inValidDiscontinuedDate}`).and('be.visible');
  })

  it('Validate that user is unable to add a new computer with a Discontinued date that precedes the Introduced date', () => {
    addComputerPage.computerNameField().type(validComputerName);
    addComputerPage.introducedField().type(addComputerData.validIntroducedDate);
    addComputerPage.discontinuedField().type(addComputerData.validPastDiscontinuedDate);
    addComputerPage.selectCompany();
    addComputerPage.createComputerButton().click();
    addComputerPage.invalidDiscontinuedDateError().should('include.text', 'Discontinued date is before introduction date').and('be.visible');
  })

  it('Validate that user cannot sucessfully add a new computer without filling any field ', () => {
    addComputerPage.createComputerButton().click();
    addComputerPage.blankComputerNameFieldError().should('have.text', 'Failed to refine type : Predicate isEmpty() did not fail.').and('be.visible');
  })

})

describe('Positive Add Computer Tests', () => {

  beforeEach(() => {
    cy.visit('/computers');
    computersPage.homePageHeader().should('include.text', 'computers found');
  })

  it('Validate that user can sucessfully add a new computer', () => {
    computersPage.addComputerButton().click();
    cy.url().should('eql', 'https://computer-database.gatling.io/computers/new');
    addComputerPage.computerNameField().type(validComputerName);
    addComputerPage.introducedField().type(addComputerData.validIntroducedDate);
    addComputerPage.discontinuedField().type(addComputerData.validDiscontinuedDate);
    addComputerPage.selectCompany();
    addComputerPage.createComputerButton().click();
    cy.url().should('eql', 'https://computer-database.gatling.io/computers');
    computersPage.addComputerSuccessMessage().should('include.text', `Computer ${validComputerName} has been created`).and('be.visible');
  })

  it('Validate that  that when the user clicks on the cancel button, the system navigates them back to the Computer database.', () => {
    computersPage.addComputerButton().click();
    cy.url().should('eql', 'https://computer-database.gatling.io/computers/new');
    addComputerPage.computerNameField().type(validComputerName);
    addComputerPage.introducedField().type(addComputerData.validIntroducedDate);
    addComputerPage.discontinuedField().type(addComputerData.validDiscontinuedDate);
    addComputerPage.selectCompany();
    addComputerPage.cancelButton().click();
    cy.url().should('eql', 'https://computer-database.gatling.io/computers');

  })

  it('Validate that user can sucessfully add a new computer by filling only the required field', () => {
    computersPage.addComputerButton().click();
    cy.url().should('eql', 'https://computer-database.gatling.io/computers/new');
    addComputerPage.computerNameField().type(validComputerName);
    addComputerPage.createComputerButton().click();
    cy.url().should('eql', 'https://computer-database.gatling.io/computers');
    computersPage.addComputerSuccessMessage().should('include.text', `Computer ${validComputerName} has been created`).and('be.visible');
  })

})


