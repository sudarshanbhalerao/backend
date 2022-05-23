package tests;

import static io.restassured.RestAssured.given;
import cucumber.api.java.en.Given;
import cucumber.api.java.en.Then;
import cucumber.api.java.en.When;
import io.restassured.specification.RequestSpecification;
import io.restassured.specification.ResponseSpecification;
import io.restassured.RestAssured;
import io.restassured.builder.ResponseSpecBuilder;
import io.restassured.response.Response;
import io.restassured.http.ContentType;
import resources.TestDataBuild;
import utils.CommonLib;

public class PostApiTest extends CommonLib {

	RequestSpecification reqSpec;
	ResponseSpecification resSpec;
	Response response;
	TestDataBuild testDataBuild = new TestDataBuild();

	@Given("^hit the request to add new Owner in Pet Clinic application API$")
	public void hit_the_request_to_add_new_Owner_in_Pet_Clinic_application_API() throws Throwable {
		   RestAssured.baseURI = "";
	}

	@When("^pass the payload with \"([^\"]*)\" \"([^\"]*)\" \"([^\"]*)\" \"([^\"]*)\" \"([^\"]*)\" \"([^\"]*)\"$")
	public void pass_the_payload_with(String address, String city, String firstName, int id, String lastName, String telephone) throws Throwable {
		reqSpec = given().spec(requestSpecification())
				.body(testDataBuild.addCustomerPlayLoad(address, city, firstName, id, lastName, telephone));
	}

	@Then("^should be able to get response code (\\d+)$")
	public void should_be_able_to_get_response_code(int statusCode) throws Throwable {
		resSpec = new ResponseSpecBuilder().expectContentType(ContentType.JSON).build();
		response = reqSpec.when().post().then().spec(resSpec).extract().response();
		System.out.println("Status Code:" + response.getStatusCode());
		System.out.println(response.asPrettyString());
	}
	
	/*public void validateAddCustomerApi(String address, String city, String firstName, int id, String lastName,
			String telephone) throws IOException {
		reqSpec = given().spec(requestSpecification())
				.body(testDataBuild.addCustomerPlayLoad(address, city, firstName, id, lastName, telephone));

		resSpec = new ResponseSpecBuilder().expectContentType(ContentType.JSON).build();
		response = reqSpec.when().post().then().spec(resSpec).extract().response();
		System.out.println("Status Code:" + response.getStatusCode());
	}*/
}