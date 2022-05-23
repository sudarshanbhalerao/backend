package com.petclinic.api.runner;

import org.junit.runner.RunWith;
import cucumber.api.CucumberOptions;
import cucumber.api.junit.Cucumber;

@RunWith(Cucumber.class)
@CucumberOptions(

		features = { "./src/test/java/com/petclinic/api" }, glue = { "com.petclinic.api.stepDefinitions" }, tags = {
				"@Test" }, plugin = {
						"com.cucumber.listener.ExtentCucumberFormatter:reports//API_Report.html",
						"html:output/html-reports" }, monochrome = true)
public class TestRunner {

}
