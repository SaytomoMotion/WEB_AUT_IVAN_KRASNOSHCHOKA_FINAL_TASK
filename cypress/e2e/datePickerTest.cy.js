import DatePickerPage from './datePickerPage';

describe('Date Picker Test', () => {
  const datePickerPage = new DatePickerPage();

  beforeEach(() => {
    cy.visit('/date-picker');
  });

  it('should set date to February 28, 2013, and validate the time', () => {
    datePickerPage.openDatePicker();

    datePickerPage.selectYear('2013');

    datePickerPage.selectMonth('February');

    datePickerPage.selectDay('28');

    datePickerPage.selectTime('12:00');

    datePickerPage.verifyDate('February 28, 2013 12:00 PM');
  });
});
