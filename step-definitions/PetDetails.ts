import { Given, Then, When } from '@cucumber/cucumber';
import data from '../data/testdata';
import { petDetails } from '../pages/PetDetails'
import { expect } from 'chai';

Given('user successfully logged on to pet clinic application', async function() {
    await browser.url(data.AppURL.URL);
    await browser.maximizeWindow();
});

Given('the user has successfully landed on new pet UI screen', async function () {
    await petDetails.navigateToFindOwnerPage();
    await petDetails.navigateToAddOwnerPage();
    await petDetails.addingNewOwner();
    await petDetails.navigateToAddPetPage();
});

When('the user wants to select type', async function() {
    await petDetails.clickPetType();
});

Then('all pet types should be displayed under pet types select option', async function() {
    await petDetails.verifyPetDetails();
    console.log("Actual Pet type: "+data.TestData.ActualPetTypes);
    console.log("Expected Pet type: "+data.TestData.ExpectedPetTypes);
    for(let i=0; i<data.TestData.ActualPetTypes.length; i++) {
        expect(data.TestData.ActualPetTypes[i]).to.equal(data.TestData.ExpectedPetTypes[i]);
    }
});

When('user has entered name,birth date,Pet type and clicked on Add pet button', async function() {
    await petDetails.addingNewPet();
});

When('Pet details should be successfully saved', async function() {
    const name = await petDetails.verifyPetNameAdded();
    const dob = await petDetails.verifyPetDOBAdded();
    const type = await petDetails.verifyPetTypeAdded();
    expect(name).to.equal(data.TestData.PetDetails.petName);
    expect(dob).to.equal(data.TestData.PetDetails.dob);
    expect(type).to.equal(data.TestData.PetDetails.type);
});