describe('template spec', () => {
    it('Create Candidate', () => {
        cy.login('seniordeveloper754@gmail.com', '123456789');    
        cy.contains('Candidates').should('be.visible').click()

        //Click on New Candidate button
        cy.contains('New candidate').should('be.visible').click()


     // Generate a random first name
     cy.generateRandomFirstName().then((randomFirstName) => {
        // Type the generated first name into the input field
        cy.get('#data\\.firstname').type(randomFirstName);
    })

     // Generate a random last name
     cy.generateRandomLastName().then((randomLastName) => {
        // Type the generated last name into the input field
        cy.get('#data\\.lastname').type(randomLastName);
})

// Generate a random email
cy.generateRandomEmail().then((randomEmail) => {
    // Type the generated email into the input field
    cy.get('#data\\.email').type(randomEmail);
})

// Generate a random phone number
cy.generateRandomPhoneNumber().then((randomPhoneNumber) => {
    // Type the generated phone number into the input field
    cy.get('#data\\.phone').type(randomPhoneNumber);

  });
// Generate random coordinates
cy.generateRandomCoordinates().then((randomCoordinates) => {
    // Type the generated coordinates into the input field
    cy.get('#data\\.location_coordinates').type(randomCoordinates);

    // Continue with the rest of your test
  });
  // Generate a random LinkedIn URL
  cy.generateRandomLinkedInURL().then((randomLinkedInURL) => {
    // Type the generated LinkedIn URL into the input field
    cy.get('#data\\.linked_in').type(randomLinkedInURL);
  });

  // Accept to be cotacted
  cy.get('#data\\.opt_in_contact').click();

   // Generate a random title
   cy.generateRandomTitle().then((randomTitle) => {
    // Type the generated title into the input field
    cy.get('#data\\.title').type(randomTitle);

  });

  // Recruited
  cy.get('#data\\.status').click();

  // Upload Image Avatar
 // cy.get('.filepond--label-action').attachFile("profileimage.jpg", { subjectType: 'drag-n-drop' });


  const fileName = 'sample.jpeg';

// Upload the file
//cy.contains('Drag & Drop your files or Browse').click();

// Upload the file using the file input field
//cy.get('input[type="file"]').attachFile({
 ///fileContent: fileName,
 //fileName: fileName,
//  mimeType: 'image/jpeg', // Adjust the mimeType based on your file type
//});


cy.wait(3000)
//Click on Create 
cy.get('.fi-ac > .fi-color-custom').click()
cy.wait(5000)


//Edit Candidate
//Edit first Name
cy.generateRandomFirstName().then((randomFirstName) => {
  cy.get('#data\\.firstname').clear().type(randomFirstName);
})


// Generate a random last name
cy.generateRandomLastName().then((randomLastName) => {
  // Type the generated last name into the input field
  cy.get('#data\\.lastname').clear().type(randomLastName);
})

// Generate a random email
cy.generateRandomEmail().then((randomEmail) => {
// Type the generated email into the input field
cy.get('#data\\.email').clear().type(randomEmail);
})

// Generate a random phone number
cy.generateRandomPhoneNumber().then((randomPhoneNumber) => {
// Type the generated phone number into the input field
cy.get('#data\\.phone').clear().type(randomPhoneNumber);

});

cy.generateRandomLinkedInURL().then((randomLinkedInURL) => {
  // Type the generated LinkedIn URL into the input field
  cy.get('#data\\.linked_in').clear().type(randomLinkedInURL);
});

   // Generate a random title
   cy.generateRandomTitle().then((randomTitle) => {
    // Type the generated title into the input field
    cy.get('#data\\.title').clear().type(randomTitle);

  });

  // Recruited
  cy.get('#data\\.status').click();

  //TODO - Click on Save Changes
  cy.contains('Save changes').should('be.visible').click()

  //TODO - Validate  that data was saved correctly (optional)
  cy.get('.pointer-events-auto > .w-full').should('be.visible')



  //TODO - Delete Candidate
  cy.contains('Delete').should('be.visible').click()
  cy.get('.fi-modal-description').should('be.visible').and('contain', 'Are you sure you would like to do this?')
  cy.contains('Confirm').should('be.visible').click()
})























})