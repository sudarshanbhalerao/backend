Feature: New Owner Feature

@SmokeTest
Scenario Outline: Verify the API creates new owner details in the database
	Given hit the request to add new Owner in Pet Clinic application API
	When pass the payload with "<address>" "<city>" "<firstName>" "<id>" "<lastName>" "<telephone>"
	Then should be able to get response code 201
	
Examples: 
   |address   |  city      | firstName | id   |lastName| telephone  |
   | Delhi    |  Delhi     | FnTest    | 2022 | LnTest | 1234567895 |