@Regression
Feature: pet types

    Background: Sign in to pet clinic application
        Given user successfully logged on to pet clinic application

    @PetTypes
    Scenario: Verify all pet types displayed under type select in UI
        Given the user has successfully landed on new pet UI screen
        When the user wants to select type
        Then all pet types should be displayed under pet types select option