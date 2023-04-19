Feature: Add a Computer Test

Scenario: Validate that user cannot sucessfully add a new computer while leaving the ComputerName field blank

Given user is on the add a new computer page
When user enters "2000-01-01" in the Introduced field
When user enters "2023-01-01" in the Discontinued field
When user selects the comapny in the comapny field
When user clicks on Create this Computer button
Then user should get an error stating 'Failed to refine type : Predicate isEmpty() did not fail.'



Scenario: Validate that user cannot sucessfully add a new computer using an invalid date in the Introduced field

Given user is on the add a new computer page
When user enters "01-01-2000" in the Introduced field
When user enters "2023-01-01" in the Discontinued field
When user selects the comapny in the comapny field
When user clicks on Create this Computer button
Then user should get an error stating 'Failed to decode date : java.time.format.DateTimeParseException: Text "01-01-2000" could not be parsed at index 0'.
 
