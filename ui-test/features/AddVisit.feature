Feature: add visit

    Background: Sign in to pet clinic application
        Given user successfully logged on to pet clinic application

    Scenario: Add Visit for pet
        Given the user has successfully landed on new pet UI screen
        When User is navigate to "Pet Details" page
        Then User is navigate to Add Visit page
        And  User is on Add Visit page 