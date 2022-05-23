package utils;

import java.io.FileInputStream;
import java.io.IOException;
import java.util.Properties;

import io.restassured.builder.RequestSpecBuilder;
import io.restassured.specification.RequestSpecification;

public class CommonLib {

	RequestSpecification req;
	public RequestSpecification requestSpecification() throws IOException
	{	
	    req= new RequestSpecBuilder().setBaseUri(getGobalValues("baseUrl"))
	    		.addHeader("Content-Type", "application/json").build();
       return req;
	}
   public static String getGobalValues(String key) throws IOException
   {
	   Properties prop = new Properties();
	   FileInputStream fis = new FileInputStream(System.getProperty("user.dir")+"\\src\\test\\java\\resources\\global.properties");
	   prop.load(fis);
	   return prop.getProperty(key);	  
   }
}