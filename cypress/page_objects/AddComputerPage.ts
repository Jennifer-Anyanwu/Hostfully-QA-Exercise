export class AddComputerPage {
    
   addComputerPageHeader(){
       return cy.get('#main h1');
   }

   computerNameField(){
       return cy.get('#name');
   }

   introducedField(){
       return cy.get('#introduced');
   }
   
   discontinuedField(){
       return cy.get('#discontinued');
   }

   companyField(){
       return cy.get('#company');
   }

   selectCompany(){
       this.companyField().select('Apple Inc.');
   }

   createComputerButton(){
       return cy.get('[type="submit"]');
   }

   blankComputerNameFieldError(){
       return cy.get('#name ~ span');
   }

   invalidIntroducedDateError(){
       return cy.get('#introduced ~ span');
   }

   invalidDiscontinuedDateError(){
       return cy.get('#discontinued ~ span');
   }

   cancelButton(){
      return cy.get('a.btn');
  }

}