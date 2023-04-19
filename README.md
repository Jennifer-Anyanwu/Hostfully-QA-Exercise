# Automated Tests for the Demo Application https://computer-database.gatling.io/computers

## Overview
This README document provides instructions for running automated tests for the demo application at https://computer-database.gatling.io/computers. The focus of these tests is on the functionality of adding a new computer and filtering.


## Prerequisites

Your preferred code editor is installed on your computer
Node.js version v18.16.0  is installed on your computer
The latest version of Google Chrome or Firefox browser is installed on your computer


## Installation:

- Clone the repository to your local machine
- Open the project in your editor
- Open the terminal in your editor and navigate to the project directory
- Run the command 'npm install' to install the required dependencies

- ### Running Tests:

- Open the terminal in your editor and navigate to the project directory
- Run the command 'npm test' to run the automated tests
- The automated tests will open the Chrome or Firefox browser and navigate to the demo application at https://computer-database.gatling.io/computers
- The automated tests will then perform the following actions:
- Adding a new computer to the database
- Filtering the computers by name
- The automated tests will then report the test results in the terminal


## Note:

- If you prefer to use Firefox browser, you should set the environment variable BROWSER=firefox in the command line.
- If the tests fail, you can check the logs in the console and the screenshots saved in the "screenshots" folder to help you debug the issues.


## Conclusion:

This README provides clear instructions for running automated tests for the demo application at https://computer-database.gatling.io/computers. By following these instructions, you can verify the functionality of adding a new computer and filtering the computers by name.

