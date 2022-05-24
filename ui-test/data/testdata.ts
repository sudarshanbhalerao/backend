const data = {
    APP_URL: {
        BASE_URL: "https://spring-petclinic-community.herokuapp.com/"
    },
 PageTitle: {
        title: "PetClinic :: a Spring Framework demonstration"
    },
    AddOwner: {
        firstName: 'Add New Owner',
        lastName: "A",
        address: "112, New street, India",
        city: "Chennai",
        telephone: "9876543622",
        invalidtelephone: "abcd123e",
        digits: '9876543647890'
    },
    FieldValidationErrorMessage: {
        Errormsg: "must not be empty",
        TelephonevalidationErrorMsg: "numeric value out of bounds (<10 digits>.<0 digits> expected)"
    },
    AddOwnerDetails: {
      firstName: "pavan",
      lastName: "kumar",
      address: "389, azad street, India",
      city: "Pune",
      telephone: "9745632156",
  },
  ActualOwnerData:<any>[],
  ExpectedOwnerData:["pavan kumar","389, azad street, India","Pune","9745632156"],
    TestData: {
    OwnerDetails: {
      firstName: "test",
      lastName: "alpha",
      address: "chennai",
      city: "chennai",
      telephone: "12345"
    },
    ExpectedPetTypes: ["bird", "cat", "dog", "hamster", "lizard", "snake"],
    ActualPetTypes: [],
    PetDetails: {
      petName: "ChukChuk",
      dob: "2022-01-01"
    },
    _AddVisit: {
      Descriptoin: "all tests are done condition is good"
    }
  }

}
export default data;