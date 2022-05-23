const data = {
  AppURL: {
    URL: "https://spring-petclinic-community.herokuapp.com/"
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
};
export default data;