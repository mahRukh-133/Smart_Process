// ***********************************************
// This example commands.js shows you how to
// create various custom commands and overwrite
// existing commands.
//
// For more comprehensive examples of custom
// commands please read more here:
// https://on.cypress.io/custom-commands
// ***********************************************
//
//
// -- This is a parent command --
// Cypress.Commands.add('login', (email, password) => { ... })
//
//
// -- This is a child command --
// Cypress.Commands.add('drag', { prevSubject: 'element'}, (subject, options) => { ... })
//
//
// -- This is a dual command --
// Cypress.Commands.add('dismiss', { prevSubject: 'optional'}, (subject, options) => { ... })
//
//
// -- This will overwrite an existing command --
// Cypress.Commands.overwrite('visit', (originalFn, url, options) => { ... })
Cypress.Commands.add('login', (username, password) => {
    // Update the URL to your login page
  
cy.visit('https://smart-process-rh.com/login'); // Visit the login page

cy.get('#data\\.email').click().type("seniordeveloper754@gmail.com"); // Enter the email

cy.get('#data\\.password').click().type('123456789'); // Enter the password

cy.get('.fi-btn').click(); })

Cypress.Commands.add('generateRandomFirstName', () => {
    const randomFirstNames = ['John', 'Alice', 'Bob', 'Eva', 'Michael', 'Sophia', 'David', 'Emma', 'Christopher'];
  
    // Get a random index from the array
    const randomIndex = Math.floor(Math.random() * randomFirstNames.length);
  
    // Return the randomly selected first name
    return randomFirstNames[randomIndex];
  });

  Cypress.Commands.add('generateRandomLastName', () => {
    const randomLastNames = ['Smith', 'Johnson', 'Brown', 'Taylor', 'Anderson', 'Thomas', 'Jones', 'Jackson'];
  
    // Get a random index from the array
    const randomIndex = Math.floor(Math.random() * randomLastNames.length);
  
    // Return the randomly selected last name
    return randomLastNames[randomIndex];
  });

  Cypress.Commands.add('generateRandomEmail', () => {
    const randomString = Math.random().toString(36).substring(7);
    return `testuser_${randomString}@example.com`;
  });

  Cypress.Commands.add('generateRandomPhoneNumber', () => {
    const randomNumber = Math.floor(Math.random() * 10000000000).toString().padStart(10, '0');
    return `+1${randomNumber}`;
  });


  Cypress.Commands.add('generateRandomLinkedInURL', () => {
    const randomString = Math.random().toString(36).substring(7);
    return `https://www.linkedin.com/in/${randomString}`;
  });


  Cypress.Commands.add('generateRandomTitle', () => {
    const randomTitles = ['Manager', 'Engineer', 'Developer', 'Analyst', 'Designer', 'Coordinator', 'Specialist'];
  
    // Get a random index from the array
    const randomIndex = Math.floor(Math.random() * randomTitles.length);
  
    // Return the randomly selected title
    return randomTitles[randomIndex];
  });

  import 'cypress-file-upload';
  Cypress.on('uncaught:exception', (err, runnable) => {
    // returning false here prevents Cypress from failing the test
    return false;
  });
  Cypress.Commands.add('generateRandomCoordinates', () => {
    // Generate random latitude and longitude within a specific range
    const randomLatitude = (Math.random() * (90 - (-90)) - 90).toFixed(6);
    const randomLongitude = (Math.random() * (180 - (-180)) - 180).toFixed(6);
  
    return `${randomLatitude}, ${randomLongitude}`;
  });  