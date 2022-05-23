Feature: Pet types feature

@Regression
Scenario: As a user I want to view all the pet types on new pet UI screen so that owner can identify pet types through auto populated dropdown
   Given a request to get pet types in Pet Clinic Application API
   Then API returns a HTTP 200 success response with all pet types
   