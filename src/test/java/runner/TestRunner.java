package runner;

import org.junit.runner.RunWith;
import cucumber.api.junit.Cucumber;
import cucumber.api.CucumberOptions;

@RunWith(Cucumber.class)
@CucumberOptions(format = { "pretty" }, 
features = { "src/test/java/features" }, 
glue = { "tests" }, 
tags = {"@SmokeTest" },
		// plugin = {
		// "com.cucumber.listener.ExtentCucumberFormatter:src//test//java//resources//myreport.html","html:output/html-reports"},
monochrome = true)

public class TestRunner {

}