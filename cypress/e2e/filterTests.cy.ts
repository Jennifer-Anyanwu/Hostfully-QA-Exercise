/// <reference types="Cypress" />

import { AddComputerPage } from "../page_objects/AddComputerPage";
import { ComputersPage } from "../page_objects/ComputersPage";

interface FilterData {
  existingName: string,
  nonExistingName: string,
  searchedName: string
}
const filterData: FilterData = require("../fixtures/FilterData.json")

const computersPage = new ComputersPage();
const searchName = (filterData.searchedName);
const searchedNonExistentName = (filterData.nonExistingName);
const searchTerm = `?f=${searchName}`;
const nonExistentName = `?f=${searchedNonExistentName}`;



describe('Positive Filter by Name Tests', () => {

  beforeEach(() => {
    cy.visit('/computers');
  })

  it('Validate that user can filter by an existing name', () => {
    cy.url().should('eql', 'https://computer-database.gatling.io/computers');
    computersPage.searchBox().type(filterData.existingName);
    computersPage.filterSearchButton().click();
    cy.url().should('eql', `https://computer-database.gatling.io/computers${searchTerm}`)

  })

  it('Validate that no result comes up after filtering with a non-existing name', () => {
    cy.url().should('eql', 'https://computer-database.gatling.io/computers');
    computersPage.searchBox().type(filterData.nonExistingName);
    computersPage.filterSearchButton().click();
    cy.url().should('eql', `https://computer-database.gatling.io/computers${nonExistentName}`)
    computersPage.noFilterSearchResult().should('have.text', 'Nothing to display').and('be.visible');

  })


})

