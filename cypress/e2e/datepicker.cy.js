describe('Date Picker Test', () => {
    it('should set date to February 28, 2013, and validate the time', () => {
      cy.visit('https://demoqa.com/date-picker');
  
      cy.get('#dateAndTimePickerInput').click();
  
      cy.get('.react-datepicker__year-read-view').click();
  
      cy.get('.react-datepicker__year-dropdown').contains('2019').click();
      cy.get('.react-datepicker__year-read-view').click();
      cy.get('.react-datepicker__year-dropdown').contains('2014').click();
      cy.get('.react-datepicker__year-read-view').click();
      cy.get('.react-datepicker__year-dropdown').contains('2013').click();
  
      cy.get('.react-datepicker__month-read-view').click();
  
      cy.get('.react-datepicker__month-option').contains('February').click();
  
      cy.get('.react-datepicker__day--028').last().click();
  
      cy.get('.react-datepicker__time-list').contains('12:00').click();
  
      cy.get('#dateAndTimePickerInput').should('have.value', 'February 28, 2013 12:00 PM');
    });
  });
  