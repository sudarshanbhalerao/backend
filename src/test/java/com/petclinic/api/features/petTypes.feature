Feature: Pet types feature

@Test
Scenario: Verify pet types
   Given a request to get pet types in Pet Clinic Application API
   Then API returns a HTTP 200 success response with all pet types