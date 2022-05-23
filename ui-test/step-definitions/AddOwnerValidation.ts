import { Given, Then, When } from '@cucumber/cucumber';
import data from "../data/testdata";
import { expect } from "chai";
import { homePage } from "../pages/HomePage";

Given(/^User has landed on add Owner UI page$/, async function () {
    await browser.url(data.APP_URL.BASE_URL);
    await browser.maximizeWindow();
    const ApplicationTitle = await browser.getTitle();
    expect(ApplicationTitle).to.be.equal(data.PageTitle.title)
    //navigate to find owner page
    await homePage.navigateToFindOwner();
    //Navigate to add owner page
    await homePage.navigateToAddOwner();
});
When(/^User has not entered first name field$/, async function () {
    await homePage.firstnameFieldValidation("")
    await homePage.lastnameFieldValidation(data.AddOwner.lastName)
    await homePage.addressFieldValidation(data.AddOwner.address)
    await homePage.cityFieldValidation(data.AddOwner.city)
    await homePage.telephoneNumberValidation(data.AddOwner.telephone)
    await homePage.AddOwner()
});

Then(/^Error message should be displayed to the user below the first name field$/, async function () {
    expect(await homePage.firstnameFieldErrorMsgValidation()).to.be.equal(data.FieldValidationErrorMessage.Errormsg)

});
When(/^User has not entered last name field$/, async function () {
    await homePage.firstnameFieldValidation(data.AddOwner.firstName)
    await homePage.lastnameFieldValidation("")
    await homePage.addressFieldValidation(data.AddOwner.address)
    await homePage.cityFieldValidation(data.AddOwner.city)
    await homePage.telephoneNumberValidation(data.AddOwner.telephone)
    await homePage.AddOwner()

});
Then(/^Error message should be displayed to the user below the last name field$/, async function () {
    expect(await homePage.lastnameFieldErrorMsgValidation()).to.be.equal(data.FieldValidationErrorMessage.Errormsg);

});
When(/^User has not entered address field$/, async function () {
    await homePage.firstnameFieldValidation(data.AddOwner.firstName)
    await homePage.lastnameFieldValidation(data.AddOwner.lastName)
    await homePage.addressFieldValidation("")
    await homePage.cityFieldValidation(data.AddOwner.city)
    await homePage.telephoneNumberValidation(data.AddOwner.telephone)
    await homePage.AddOwner()
});

Then(/^Error message should be displayed to the user below the address field$/, async function () {
    expect(await homePage.addressFieldErrorMsgValidation()).to.be.equal(data.FieldValidationErrorMessage.Errormsg);
});
When(/^User has not entered city field$/, async function () {
    await homePage.firstnameFieldValidation(data.AddOwner.firstName)
    await homePage.lastnameFieldValidation(data.AddOwner.lastName)
    await homePage.addressFieldValidation(data.AddOwner.address)
    await homePage.cityFieldValidation("")
    await homePage.telephoneNumberValidation(data.AddOwner.telephone)
    await homePage.AddOwner()

});
Then(/^Error message should be displayed to the user below the city field$/, async function () {
    expect(await homePage.cityFieldErrorMsgValidation()).to.be.equal(data.FieldValidationErrorMessage.Errormsg);

});
When(/^User has not entered telephone field$/, async function () {
    await homePage.firstnameFieldValidation(data.AddOwner.firstName)
    await homePage.lastnameFieldValidation(data.AddOwner.lastName)
    await homePage.addressFieldValidation(data.AddOwner.address)
    await homePage.cityFieldValidation(data.AddOwner.city)
    await homePage.telephoneNumberValidation("")
    await homePage.AddOwner()
});
Then(/^Error message should be displayed to the user below the telephone field$/, async function () {
    const TelephoneEmptyFieldValidation = await homePage.telephoneErrorMsgValidation()
    expect(TelephoneEmptyFieldValidation[0]).to.be.equal(data.FieldValidationErrorMessage.TelephonevalidationErrorMsg)
    expect(TelephoneEmptyFieldValidation[1]).to.be.equal(data.FieldValidationErrorMessage.Errormsg)
});
When(/^User has entered invalid digits on telephone field$/, async function () {
    await homePage.firstnameFieldValidation(data.AddOwner.firstName)
    await homePage.lastnameFieldValidation(data.AddOwner.lastName)
    await homePage.addressFieldValidation(data.AddOwner.address)
    await homePage.cityFieldValidation(data.AddOwner.city)
    await homePage.telephoneNumberValidation(data.AddOwner.invalidtelephone)
    await homePage.AddOwner()
});

Then(/^Numeric error message gets displayed to the user below the telephone field$/, async function () {
    const TelephoneNonNumericValidation = await homePage.telephoneErrorMsgValidation()
    expect(TelephoneNonNumericValidation[0]).to.be.equal(data.FieldValidationErrorMessage.TelephonevalidationErrorMsg)
});
