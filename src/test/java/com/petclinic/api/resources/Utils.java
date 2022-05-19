package com.petclinic.api.resources;

import java.io.FileInputStream;
import java.io.IOException;
import java.util.Properties;

public class Utils {

	static String userDirectory = System.getProperty("user.dir");
	static String propertyPath = "/src/test/java/com/petclinic/api/resources/application.properties";

	public static String getPropertyValue(String key) throws IOException {
		Properties prop = new Properties();
		FileInputStream fis = new FileInputStream(userDirectory + propertyPath);
		prop.load(fis);
		return prop.getProperty(key);

	}

}
