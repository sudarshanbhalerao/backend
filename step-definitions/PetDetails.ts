import { Given, Then, When } from '@cucumber/cucumber';
import data from '../data/testdata';
import { petDetails } from '../pages/PetDetails'
import { expect } from 'chai';

Given('User is on pet clinic website', async function () {
    await browser.url(data.AppURL.URL);
    await browser.maximizeWindow();
});

When('User is on \"FIND OWNERS\" page', async function() {
    await petDetails.navigateToFindOwnerPage();
});

Then('User is navigate to \"Add Owner\" page', async function() {
    await petDetails.navigateToAddOwnerPage();
});

Then('User is on \"Add Owner\" page', async function() {
    await petDetails.addingNewOwner();
});

Then('User is navigate to \"Add Pet\" page', async function() {
    await petDetails.navigateToAddPetPage();
});

Then('User is on \"Add Pet\" page', async function() {
    await petDetails.addingPet();
});

Then('Added new pet details displayed in type', async function() {
    await petDetails.AddedPetDetails();
    console.log("Actual Pet type: "+data.TestData.ActualPetTypes);
    console.log("Expected Pet type: "+data.TestData.ExpectedPetTypes);
    for(let i=0; i<data.TestData.ActualPetTypes.length; i++) {
        expect(data.TestData.ActualPetTypes[i]).to.equal(data.TestData.ExpectedPetTypes[i]);
    } 
});