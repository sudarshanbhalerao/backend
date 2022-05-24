Feature: Error message shown while adding new owner, if mandatory fields are empty

    Background: Login into Application
        Given User has landed on add Owner UI page
    @firstname
    Scenario: Verify user gets error messages if firstname field is empty
        When User has not entered first name field
        Then Error message should be displayed to the user below the first name field
    @lastname
    Scenario: Verify user gets error messages if lastname field is empty
        When User has not entered last name field
        Then Error message should be displayed to the user below the last name field
    @address
    Scenario: Verify user gets error messages if address field is empty
        When User has not entered address field
        Then Error message should be displayed to the user below the address field
    @city
    Scenario: Verify user gets error messages if city field is empty
        When User has not entered city field
        Then Error message should be displayed to the user below the city field
    @telephone
    Scenario: Verify user gets error messages if telephone field is empty
        When User has not entered telephone field
        Then Error message should be displayed to the user below the telephone field
    @invalidtelephone
    Scenario: Verify user gets error messages if telephone field is empty
        When User has entered invalid telephone number
        Then Numeric error message gets displayed to the user below the telephone field

    @invalidtelephoneDigits
    Scenario: Verify user gets error messages if telephone field is empty
        When User has entered invalid telephone digits in telephone field
        Then Error message gets displayed to the user below the telephone field
