import { Given, Then, When } from '@cucumber/cucumber';
import data from '../data/testdata';
import { homePage } from '../pages/AddOwner'
import { expect } from 'chai';

Given(/^User is on petclinic home page$/, async function ()
{
    await homePage.navigateToPetClinicApp();
    const ApplicationTitle = await browser.getTitle();
    expect(ApplicationTitle).to.be.equal(data.PageTitle.title);
});

When(/^User clicks on find owner menu$/, async function ()
{
  await homePage.navigateToFindOwner();
});

Then(/^Find Owner page should be dispalyed$/, async function () 
{
  expect(await homePage.findOwnerPage()).to.be.equal(true);
});

Given(/^User is on find owner page$/, async function () 
{
  expect(await homePage.findOwnerPage()).to.be.equal(true);
});

When(/^User clicks on add owner button$/, async function () 
{
  await homePage.navigateToAddOwner();
});

Then(/^Owner information page should be displayed$/, async function () 
{
  expect(await homePage.addOwnerPage()).to.be.equal(true);
});


When(/^User provides all the owner details$/, async function () 
{
  // Adding new data
  await homePage.addNewOwner(data.AddOwnerDetails.firstName,data.AddOwnerDetails.lastName,data.AddOwnerDetails.address,data.AddOwnerDetails.city,data.AddOwnerDetails.telephone);
});


Then(/^Owner information should be added$/, async function () 
{
   await homePage.verifyAddOwnerDetails();
   console.log("Actual Owner Details:"+data.ActualOwnerData);
   console.log("Expected Owner Details:"+data.ExpectedOwnerData);  
  
  // validating expected and actual result
  for(let i=0;i<data.ActualOwnerData.length;i++)
  {
    expect(data.ExpectedOwnerData[i]).to.be.equal(data.ActualOwnerData[i]);  
  }
});
