class DatePickerPage {
  openDatePicker() {
    cy.get('#dateAndTimePickerInput').click();
  }

  selectYear(year) {
    cy.get('.react-datepicker__year-read-view').click();
    
    if (year === '2013') {
      cy.get('.react-datepicker__year-dropdown').contains('2019').click();
      cy.get('.react-datepicker__year-read-view').click(); 
      cy.get('.react-datepicker__year-dropdown').contains('2014').click();
      cy.get('.react-datepicker__year-read-view').click();
    }
    cy.get('.react-datepicker__year-dropdown').contains(year).click();
  }

  selectMonth(month) {
    cy.get('.react-datepicker__month-read-view').click();
    cy.get('.react-datepicker__month-option').contains(month).click();
  }

  selectDay(day) {
    cy.get(`.react-datepicker__day--0${day}`).last().click();
  }

  selectTime(time) {
    cy.get('.react-datepicker__time-list').contains(time).click();
  }

  verifyDate(expectedDate) {
    cy.get('#dateAndTimePickerInput').should('have.value', expectedDate);
  }
}

export default DatePickerPage;