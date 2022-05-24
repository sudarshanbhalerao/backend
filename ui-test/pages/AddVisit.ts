import { FedexBasePage, timeout } from "qcoe-fedex-ui-test-wdio";
import data from '../data/testdata';

const selectors = {
    findOwnerLink: "a[href='/owners/find']",
    addOwnerButton: 'a.btn.btn-default',
    firstNameInput: 'input#firstname',
    lastNameInput: 'input#lastname',
    addressInput: 'input#address',
    cityInput: 'input#city',
    telephoneInput: 'input#telephone',
    addOwnerButton2: 'button.btn.btn-default',
    addPetButton:'/html/body/div/div/a[2]',
    petName: 'input#name.form-control',
    birthDate: 'input#birthDate.form-control',
    petType:'*[@id="type"]',
    petTypeOptions:'select#type',
    addPet2:'button.btn.btn-default',
    addVisitlink:"//a[contains(text(),'Visit')]",
    description:'//*[@id="description"]',
    addvisitButton:'button.btn.btn-default'
}

class AddVisit extends FedexBasePage {
    waitForElementClickable: any;
    click: any;
    sendKeys: any;
    

    constructor() {
        super (selectors, '');
    }

    public async navigateToFindOwnerPage() {
        await this.waitForElementClickable('findOwnerLink', timeout.MEDIUM);
        await this.click('findOwnerLink');
    }
    

    public async navigateToAddOwnerPage() {
        await this.waitForElementClickable('addOwnerButton', timeout.MEDIUM);
        await this.click('addOwnerButton');
    }
    

    public async addingNewOwner() {
        await this.sendKeys('firstNameInput',data.TestData.OwnerDetails.firstName);
        await this.sendKeys('lastNameInput',data.TestData.OwnerDetails.lastName);
        await this.sendKeys('addressInput',data.TestData.OwnerDetails.address);
        await this.sendKeys('cityInput',data.TestData.OwnerDetails.city);
        await this.sendKeys('telephoneInput',data.TestData.OwnerDetails.telephone);
        await this.waitForElementClickable('addOwnerButton2', timeout.MEDIUM);
        await this.click('addOwnerButton2');
    }
    

    public async navigateToAddPetPage() {
        await this.waitForElementClickable('addPetButton', timeout.MEDIUM);
        await this.click('addPetButton');
    }

    public async addingPet() {
        await this.sendKeys('petName',data.TestData.PetDetails.petName);
        await this.sendKeys('birthDate',data.TestData.PetDetails.dob);
    }

    public async verifyPetDetails() {
        await this.click('petType');
    
     }
    public async navigateToPetdetailsPage() {
        await this.sendKeys('petName',data.TestData.PetDetails.petName);
        await this.sendKeys('birthDate',data.TestData.PetDetails.dob);
        await this.waitForElementClickable('addPet2', timeout.MEDIUM);
        await this.click('addPet2');
        
        
    }

    public async navigateToAddVisitPage() {
        await this.click('addVisitlink');
       
    }
    public async addingVisit() {
        await this.sendKeys('description',data.TestData._AddVisit.Descriptoin);
        await this.click('addvisitButton');
       
        
    }
    
}
export const addVisit = new AddVisit();