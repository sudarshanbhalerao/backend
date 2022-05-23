package resources;

import pojo.AddCustomer;

public class TestDataBuild {

	public AddCustomer addCustomerPlayLoad(String address, String city, String firstName, int id, String lastName,
			String telephone) {
		AddCustomer ac = new AddCustomer();
		ac.setAddress(address);
		ac.setCity(city);
		ac.setFirstName(firstName);
		ac.setId(id);
		ac.setLastName(lastName);
		ac.setTelephone(telephone);
		return ac;
	}
}