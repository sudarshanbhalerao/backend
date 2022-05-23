package com.petclinic.api.stepDefinitions;

import java.io.IOException;
import java.util.ArrayList;
import cucumber.api.java.en.Given;
import cucumber.api.java.en.Then;
import cucumber.api.java.en.When;
import org.apache.http.HttpStatus;
import static io.restassured.RestAssured.given;
import io.restassured.path.json.JsonPath;
import io.restassured.response.Response;
import org.junit.Assert;
import com.petclinic.api.resources.Utils;

public class PetTypesSteps {

	String baseURI, basePath, getAPIPath;
	String[] expectedPetTypes = {"dog","lizard","snake", "bird", "hamster"};
	ArrayList<String> petNames = new ArrayList<String>();
	Response response;

	public PetTypesSteps() throws IOException {
		baseURI = Utils.getPropertyValue("baseURI");
		basePath = Utils.getPropertyValue("basePath");
		getAPIPath = Utils.getPropertyValue("getAPIPath");
	}

	@Given("^a request to get pet types in Pet Clinic Application API$")
	public void callGetAPI() { 
		try {			
			//Calling get API to retrieve pet details
			response = given().baseUri(baseURI).header("Content-Type", "application/json").log().all().
					when().get(basePath + getAPIPath).andReturn();
			
			//Reading pet types from API response
			JsonPath jsonPath = response.jsonPath();
			petNames = jsonPath.get("name");
		} catch(Exception e) {
			System.out.println(e.getMessage());
		}

	}
	
	@Then("^API returns a HTTP 200 success response with all pet types$")
	public void verifyPetTypes() {
		Assert.assertEquals(response.getStatusCode(), HttpStatus.SC_OK);
		Assert.assertEquals(response.getStatusLine(), "HTTP/1.1 200 ");
		//Comparing API returned value with expected
		for(int i = 0; i < petNames.size(); i++){
			Assert.assertEquals("Pet types mismatched", expectedPetTypes[i], petNames.get(i));
		}
	}

}
