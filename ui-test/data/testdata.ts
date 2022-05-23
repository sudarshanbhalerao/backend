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
        invalidtelephone: "abcd123e"
    },
    FieldValidationErrorMessage: {
        Errormsg: "must not be empty",
        TelephonevalidationErrorMsg: "numeric value out of bounds (<10 digits>.<0 digits> expected)"
    },
    TestData: {
    OwnerDetails: {
      firstName: "test",
      lastName: "alpha",
      address: "chennai",
      city: "chennai",
      telephone: "12345"
    },
    PetDetails: {
      petName: "lucky",
      dob: "2022-01-01",
      type: ""
    },
    ExpectedPetTypes: ["bird", "cat", "dog", "hamster", "lizard", "snake"],
    ActualPetTypes: []
  }

}
export default data;