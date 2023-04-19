export class ComputersPage {

   homePageHeader(){
       return cy.get('#main h1');
   }

   searchBoxField(){
       return cy.get('#searchbox');
   }

   filterButton(){
       return cy.get('#searchsubmit');
   }

   addComputerButton(){
       return cy.get('#add');
   }

   addComputerSuccessMessage(){
       return cy.get('div.alert-message');
   }

   searchBox(){
      return cy.get('#searchbox');
   }

   filterSearchButton(){
      return cy.get('#searchsubmit');
   }

   noFilterSearchResult(){
    return cy.get('.well');
   }

   nextPageButton(){
    return cy.get('.next > a')
   }

   previousPageButton(){
    return cy.get('.prev > a')
   }

}