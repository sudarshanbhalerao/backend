import { Given, Then, When } from '@cucumber/cucumber';
import data from '../data/testdata';
import { addVisit } from '../pages/AddVisit';
import { petDetails } from '../pages/PetDetails';
import { expect } from 'chai';

Given('User is on pet clinic website', async function () {
    await browser.url(data.APP_URL.BASE_URL);
    await browser.maximizeWindow();
});

When('User is on \"FIND OWNERS\" page', async function() {
    await addVisit.navigateToFindOwnerPage();
});

Then('User is navigate to \"Add Owner\" page', async function() {
    await addVisit.navigateToAddOwnerPage();
});

Then('User adding new owner', async function() {
    await petDetails.addingNewOwner();
});

Then('User navigate to \"Add Pet\" page', async function() {
    await petDetails.navigateToAddPetPage();
});

Then('User is on Add Pet page', async function() {
    await addVisit.addingPet();
});

When('User is navigate to \"Pet Details\" page', async function() {
    await addVisit.navigateToPetdetailsPage();
});
Then('User is navigate to Add Visit page', async function() 
{
    await addVisit.navigateToAddVisitPage();
  });
Then('User is on Add Visit page', async function() {
     await addVisit.addingVisit();
});